import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface LevelFilterProps {
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
}

export const LevelFilter: React.FC<LevelFilterProps> = ({ selectedLevel, setSelectedLevel }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Niveaux</h2>
      <RadioGroup value={selectedLevel} onValueChange={setSelectedLevel}>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">Toutes les étiquettes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="seconde" id="seconde" />
            <Label htmlFor="seconde">niveau seconde</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="premiere" id="premiere" />
            <Label htmlFor="premiere">niveau première</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="terminale" id="terminale" />
            <Label htmlFor="terminale">niveau terminale</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};