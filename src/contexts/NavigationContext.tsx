import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type BacTab = "dissertation" | "ec1" | "ec2" | "ec3" | "filtres";

interface NavigationEntry {
  pathname: string;
  search: string;
  hash: string;
  state: unknown;
  scrollY: number;
  bacTab: BacTab;
}

interface PushOptions {
  state?: unknown;
  replace?: boolean;
}

interface BackOptions {
  state?: unknown;
}

interface NavigationContextValue {
  activeBacTab: BacTab;
  setActiveBacTab: (tab: BacTab) => void;
  push: (to: string, options?: PushOptions) => void;
  back: (fallback?: string, options?: BackOptions) => void;
  getBacPath: (tab?: BacTab) => string;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

const isBacTab = (value: unknown): value is BacTab =>
  value === "dissertation" ||
  value === "ec1" ||
  value === "ec2" ||
  value === "ec3" ||
  value === "filtres";

const asObject = (value: unknown): Record<string, unknown> => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }

  return {};
};

export const buildBacPath = (tab: BacTab = "dissertation") =>
  tab === "dissertation" ? "/sujets-bac" : `/sujets-bac?tab=${tab}`;

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setStack] = useState<NavigationEntry[]>([]);
  const stackRef = useRef<NavigationEntry[]>([]);
  const [activeBacTab, setActiveBacTab] = useState<BacTab>("dissertation");

  const updateStack = useCallback((next: NavigationEntry[]) => {
    stackRef.current = next;
    setStack(next);
  }, []);

  const push = useCallback(
    (to: string, options?: PushOptions) => {
      const nextEntry: NavigationEntry = {
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,
        state: location.state,
        scrollY: window.scrollY,
        bacTab: activeBacTab,
      };

      updateStack([...stackRef.current, nextEntry]);
      navigate(to, { replace: options?.replace, state: options?.state });
    },
    [activeBacTab, location.hash, location.pathname, location.search, location.state, navigate, updateStack],
  );

  const back = useCallback(
    (fallback = "/", options?: BackOptions) => {
      const currentStack = stackRef.current;
      const previousEntry = currentStack[currentStack.length - 1];

      if (!previousEntry) {
        navigate(fallback, { replace: true, state: options?.state });
        return;
      }

      updateStack(currentStack.slice(0, -1));
      setActiveBacTab(previousEntry.bacTab);

      navigate(`${previousEntry.pathname}${previousEntry.search}${previousEntry.hash}`, {
        replace: true,
        state: {
          ...asObject(previousEntry.state),
          ...asObject(options?.state),
          __navRestoreScrollY: previousEntry.scrollY,
          __navRestoreBacTab: previousEntry.bacTab,
        },
      });
    },
    [navigate, updateStack],
  );

  useEffect(() => {
    const locationState = asObject(location.state);
    const restoreScrollY = locationState.__navRestoreScrollY;
    const restoreBacTab = locationState.__navRestoreBacTab;

    if (typeof restoreScrollY === "number") {
      requestAnimationFrame(() => {
        window.scrollTo({ top: restoreScrollY, behavior: "auto" });
      });
    }

    if (isBacTab(restoreBacTab)) {
      setActiveBacTab(restoreBacTab);
    }
  }, [location.key, location.state]);

  const value = useMemo(
    () => ({
      activeBacTab,
      setActiveBacTab,
      push,
      back,
      getBacPath: buildBacPath,
    }),
    [activeBacTab, back, push],
  );

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};

export const useAppNavigation = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useAppNavigation must be used within NavigationProvider");
  }

  return context;
};