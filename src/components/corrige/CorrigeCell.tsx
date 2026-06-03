import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export type CorrigeType = 'dissertation' | 'ec2' | 'ec3';

interface CorrigeCellProps {
  type: CorrigeType;
  chapter: string;
  sujetNumber: number;
}

const SESSION_PREFIX = 'corrigeAccess:';

export const CorrigeCell: React.FC<CorrigeCellProps> = ({ type, chapter, sujetNumber }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const goToCorrige = () => {
    navigate(`/corrige/${type}/${chapter}/${sujetNumber}`);
  };

  const sessionKey = `${SESSION_PREFIX}${type}/${chapter}/${sujetNumber}`;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (sessionStorage.getItem(sessionKey) === 'true') {
      goToCorrige();
      return;
    }
    setCode('');
    setError(null);
    setOpen(true);
  };

  const handleValidate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/config/access-codes.json', { cache: 'no-store' });
      const data = await res.json();
      const chapterKey = `chapitre${chapter}`;
      const sujetKey = `sujet${sujetNumber}`;
      const expected = String(data?.[type]?.[chapterKey]?.[sujetKey] ?? '');
      if (code.trim() === expected && expected.length > 0) {
        sessionStorage.setItem(sessionKey, 'true');
        setOpen(false);
        goToCorrige();
      } else {
        setError('Code incorrect. Veuillez réessayer.');
      }
    } catch {
      setError('Code incorrect. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gris-sideral hover:text-white hover:border-gris-sideral cursor-pointer"
      >
        Corrigé-{sujetNumber}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent onClick={(e) => e.stopPropagation()}>
          <DialogHeader>
            <DialogTitle>Code d'accès</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              type="password"
              value={code}
              placeholder="Saisir le code"
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleValidate();
              }}
              autoFocus
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
          <DialogFooter>
            <Button onClick={handleValidate} disabled={loading || !code.trim()}>
              Valider
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CorrigeCell;