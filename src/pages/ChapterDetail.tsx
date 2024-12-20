import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChapterHeader } from '@/components/ChapterHeader';
import { chaptersData } from '@/data/chaptersData';
import { BacSubjectsTerminaleCh1 } from '@/components/BacSubjectsTerminaleCh1';

export const ChapterDetail = () => {
  const { chapterId } = useParams();
  const chapter = chaptersData[chapterId as keyof typeof chaptersData];
  const [currentTab, setCurrentTab] = useState('science-eco');

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  const showBacSubjects = chapterId === 'terminale-ch1';

  const getCurrentTab = () => currentTab;
  const handleTabChange = (value: string) => setCurrentTab(value);

  return (
    <div className="container mx-auto px-4 py-8">
      <ChapterHeader
        title={chapter.title}
        category={chapter.category}
        level={chapter.level}
        getCurrentTab={getCurrentTab}
        handleTabChange={handleTabChange}
      />
      {showBacSubjects && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Sujets de Bac</h2>
          <BacSubjectsTerminaleCh1 />
        </div>
      )}
    </div>
  );
};