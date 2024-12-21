import React from 'react';
import { Route } from 'react-router-dom';
import { DissertationTopics } from '../DissertationTopics';
import { EC1Topics } from '../EC1Topics';
import { EC2Topics } from '../EC2Topics';
import { EC3Topics } from '../EC3Topics';
import { dissertationChapters } from '../../data/chapters/dissertationChapters';
import { ecChapters } from '../../data/chapters/ecChapters';

export const ChapterRoutes = () => {
  return (
    <>
      {dissertationChapters.map((chapter) => (
        <Route
          key={chapter.id}
          path={`/dissertation/${chapter.id}`}
          element={
            <DissertationTopics
              chapter={chapter.id}
              title={`Dissertation Chapitre ${chapter.id} : ${chapter.title}`}
            />
          }
        />
      ))}
      {ecChapters.map((chapter) => (
        <>
          <Route
            key={`ec1-${chapter.id}`}
            path={`/ec1/${chapter.id}`}
            element={
              <EC1Topics
                chapter={chapter.id}
                title={`EC1 Chapitre ${chapter.id} : ${chapter.title}`}
              />
            }
          />
          <Route
            key={`ec2-${chapter.id}`}
            path={`/ec2/${chapter.id}`}
            element={
              <EC2Topics
                chapter={chapter.id}
                title={`EC2 Chapitre ${chapter.id} : ${chapter.title}`}
              />
            }
          />
          <Route
            key={`ec3-${chapter.id}`}
            path={`/ec3/${chapter.id}`}
            element={
              <EC3Topics
                chapter={chapter.id}
                title={`EC3 Chapitre ${chapter.id} : ${chapter.title}`}
              />
            }
          />
        </>
      ))}
    </>
  );
};