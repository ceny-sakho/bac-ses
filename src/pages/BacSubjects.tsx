import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BacExercises } from '@/components/BacExercises';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BacSubjects = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>
      </div>
      <BacExercises />
    </div>
  );
};

export default BacSubjects;