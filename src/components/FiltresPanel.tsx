import React, { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { dissertationTopics } from '@/data/dissertationTopics';
import { ec1Topics } from '@/data/ec1';
import { ec2Topics } from '@/data/ec2Topics';
import { getTopicsByChapter as getEc3TopicsByChapter } from '@/data/ec3Topics';
import {
  useAppNavigation,
  FILTER_INDIFFERENT as INDIFFERENT,
} from '@/contexts/NavigationContext';

const TYPE_OPTIONS = [
  { value: INDIFFERENT, label: 'Indifférent' },
  { value: 'ecrit-dissertation', label: 'Dissertation' },
  { value: 'ecrit-ec1', label: 'EC1' },
  { value: 'ecrit-ec2', label: 'EC2' },
  { value: 'ecrit-ec3', label: 'EC3' },
];

const CHAPTER_TITLES: Record<string, string> = {
  '1': 'Croissance économique',
  '2': 'Commerce international',
  '3': 'Chômage',
  '4': 'Crises financières',
  '5': 'Politiques économiques européennes',
  '6': 'Structure sociale',
  '7': "L'École",
  '8': 'Mobilité sociale',
  '9': 'Mutations du travail',
  '10': 'Engagement politique',
  '11': 'Justice sociale',
  '12': "L'Environnement",
};

const CHAPTER_OPTIONS = [
  { value: INDIFFERENT, label: 'Indifférent' },
  ...Object.entries(CHAPTER_TITLES).map(([id, title]) => ({
    value: id,
    label: `Chapitre ${id} : ${title}`,
  })),
];

const YEAR_OPTIONS = [
  { value: INDIFFERENT, label: 'Indifférent' },
  ...['2020', '2021', '2022', '2023', '2024', '2025', '2026'].map((y) => ({
    value: y,
    label: y,
  })),
];

const LOCATION_OPTIONS = [
  { value: INDIFFERENT, label: 'Indifférent' },
  { value: 'France métropolitaine', label: 'France métropolitaine' },
  { value: 'Nouvelle-Calédonie', label: 'Nouvelle-Calédonie' },
  { value: 'Polynésie', label: 'Polynésie' },
  { value: 'Amérique du Nord', label: 'Amérique du Nord' },
  { value: 'Amérique du Sud', label: 'Amérique du Sud' },
  { value: 'Asie', label: 'Asie' },
  { value: 'Liban', label: 'Liban' },
  { value: 'La Réunion', label: 'La Réunion' },
  { value: 'Autres centres étrangers', label: 'Autres centres étrangers' },
];

interface AggregatedTopic {
  type: string;
  typeLabel: string;
  chapter: string;
  question: string;
  year: string;
  location: string;
  indexInChapter: number;
  route?: string;
}

const buildAllTopics = (): AggregatedTopic[] => {
  const all: AggregatedTopic[] = [];

  const addFromMap = (
    map: Record<string, Array<{ question: string; year: string; location: string }>>,
    type: string,
    typeLabel: string,
    routePrefix: string,
  ) => {
    Object.entries(map).forEach(([chapter, topics]) => {
      topics.forEach((t, idx) => {
        all.push({
          type,
          typeLabel,
          chapter,
          ...t,
          indexInChapter: idx,
          route: `/${routePrefix}/${chapter}/sujet/${idx + 1}`,
        });
      });
    });
  };

  addFromMap(dissertationTopics, 'ecrit-dissertation', 'Dissertation', 'dissertation');
  addFromMap(ec1Topics as any, 'ecrit-ec1', 'EC1', 'ec1');
  addFromMap(ec2Topics, 'ecrit-ec2', 'EC2', 'ec2');

  Object.keys(CHAPTER_TITLES).forEach((chapter) => {
    const topics = getEc3TopicsByChapter(chapter) || [];
    topics.forEach((t, idx) => {
      all.push({
        type: 'ecrit-ec3',
        typeLabel: 'EC3',
        chapter,
        ...t,
        indexInChapter: idx,
        route: `/ec3/${chapter}/sujet/${idx + 1}`,
      });
    });
  });

  return all;
};

interface RadioSectionProps {
  title: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}

const RadioSection: React.FC<RadioSectionProps> = ({ title, name, options, value, onChange }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-2 text-sm cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="h-4 w-4"
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  </div>
);

export const FiltresPanel: React.FC = () => {
  const {
    push,
    bacFilters: applied,
    pendingBacFilters: pending,
    setBacFilters,
    setPendingBacFilters,
    resetBacFilters,
  } = useAppNavigation();

  const pendingType = pending.type;
  const pendingChapter = pending.chapter;
  const pendingYear = pending.year;
  const pendingLocation = pending.location;

  const setPendingType = (type: string) => setPendingBacFilters({ ...pending, type });
  const setPendingChapter = (chapter: string) => setPendingBacFilters({ ...pending, chapter });
  const setPendingYear = (year: string) => setPendingBacFilters({ ...pending, year });
  const setPendingLocation = (location: string) => setPendingBacFilters({ ...pending, location });

  const allTopics = useMemo(() => buildAllTopics(), []);

  const filtered = useMemo(() => {
    if (!applied.submitted) return [];
    return allTopics.filter((t) => {
      if (applied.type !== INDIFFERENT && t.type !== applied.type) return false;
      if (applied.chapter !== INDIFFERENT && t.chapter !== applied.chapter) return false;
      if (applied.year !== INDIFFERENT && t.year !== applied.year) return false;
      if (applied.location !== INDIFFERENT && t.location !== applied.location) return false;
      return true;
    });
  }, [applied, allTopics]);

  const handleValidate = () => {
    setBacFilters({ ...pending, submitted: true });
  };

  const handleReset = () => {
    resetBacFilters();
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <h3 className="text-xl font-semibold">Filtrer les sujets</h3>

        <RadioSection
          title="Types de sujets"
          name="filter-type"
          options={TYPE_OPTIONS}
          value={pendingType}
          onChange={setPendingType}
        />
        <RadioSection
          title="Chapitres"
          name="filter-chapter"
          options={CHAPTER_OPTIONS}
          value={pendingChapter}
          onChange={setPendingChapter}
        />
        <RadioSection
          title="Années"
          name="filter-year"
          options={YEAR_OPTIONS}
          value={pendingYear}
          onChange={setPendingYear}
        />
        <RadioSection
          title="Lieux"
          name="filter-location"
          options={LOCATION_OPTIONS}
          value={pendingLocation}
          onChange={setPendingLocation}
        />

        <div className="flex gap-3 pt-2">
          <Button onClick={handleValidate}>Valider</Button>
          <Button variant="outline" onClick={handleReset}>
            Réinitialiser
          </Button>
        </div>

        {applied.submitted && (
          <div className="pt-4 border-t">
            <h4 className="text-lg font-semibold mb-4">
              Résultats ({filtered.length})
            </h4>
            {filtered.length === 0 ? (
              <p className="text-sm text-gray-600">
                Aucun sujet ne correspond à ces critères.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map((t, idx) => (
                  <Card
                    key={idx}
                    className={t.route ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}
                    onClick={t.route ? () => push(t.route!) : undefined}
                    role={t.route ? 'link' : undefined}
                    tabIndex={t.route ? 0 : undefined}
                    onKeyDown={
                      t.route
                        ? (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              push(t.route!);
                            }
                          }
                        : undefined
                    }
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                          {t.typeLabel}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                          Chapitre {t.chapter} : {CHAPTER_TITLES[t.chapter]}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                          {t.year}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                          {t.location}
                        </span>
                      </div>
                      <p className="text-sm">{t.question}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};