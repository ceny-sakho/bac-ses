import React from 'react';
import { BacExercises } from '@/components/BacExercises';

const BacSubjects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <div className="py-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Sujets de Bac
          </h1>
          <BacExercises />
        </div>
      </main>
    </div>
  );
};

export default BacSubjects;