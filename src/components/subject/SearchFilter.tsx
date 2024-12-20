import React from 'react';
import { Input } from "@/components/ui/input";

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recherche</h2>
      <Input 
        type="search" 
        placeholder="Votre recherche.." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};