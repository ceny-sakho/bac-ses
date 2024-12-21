import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SubjectView from "./pages/SubjectView";
import LevelView from "./pages/LevelView";
import ChapterDetail from "./pages/ChapterDetail";
import BacSubjects from "./pages/BacSubjects";
import { DissertationTopics } from "./components/DissertationTopics";
import { EC1Topics } from "./components/EC1Topics";
import { EC2Topics } from "./components/EC2Topics";

function App() {
  const dissertationChapters = [
    { id: '1', title: 'Croissance économique' },
    { id: '2', title: 'Commerce international' },
    { id: '3', title: 'Chômage' },
    { id: '4', title: 'Crises financières' },
    { id: '5', title: 'Politiques économiques européennes' },
    { id: '6', title: 'Structure sociale' },
    { id: '7', title: "L'École" },
    { id: '8', title: 'Mobilité sociale' },
    { id: '9', title: 'Mutations du travail' },
    { id: '10', title: 'Engagement politique' },
    { id: '11', title: 'Justice sociale' },
    { id: '12', title: "L'Environnement" },
  ];

  const ec1Chapters = [
    { id: '1', title: 'Croissance économique' },
    { id: '2', title: 'Commerce international' },
    { id: '3', title: 'Chômage' },
    { id: '4', title: 'Crises financières' },
    { id: '5', title: 'Politiques économiques européennes' },
    { id: '6', title: 'Structure sociale' },
    { id: '7', title: "L'École" },
    { id: '8', title: 'Mobilité sociale' },
    { id: '9', title: 'Mutations du travail' },
    { id: '10', title: 'Engagement politique' },
    { id: '11', title: 'Justice sociale' },
    { id: '12', title: "L'Environnement" },
  ];

  const ec2Chapters = [
    { id: '1', title: 'Croissance économique' },
    { id: '2', title: 'Commerce international' },
    { id: '3', title: 'Chômage' },
    { id: '4', title: 'Crises financières' },
    { id: '5', title: 'Politiques économiques européennes' },
    { id: '6', title: 'Structure sociale' },
    { id: '7', title: "L'École" },
    { id: '8', title: 'Mobilité sociale' },
    { id: '9', title: 'Mutations du travail' },
    { id: '10', title: 'Engagement politique' },
    { id: '11', title: 'Justice sociale' },
    { id: '12', title: "L'Environnement" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/matiere/:subject" element={<SubjectView />} />
        <Route path="/niveau/:level" element={<LevelView />} />
        <Route path="/chapitre/:chapterId" element={<ChapterDetail />} />
        <Route path="/sujets-bac" element={<BacSubjects />} />
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
        {ec1Chapters.map((chapter) => (
          <Route
            key={chapter.id}
            path={`/ec1/${chapter.id}`}
            element={
              <EC1Topics
                chapter={chapter.id}
                title={`EC1 Chapitre ${chapter.id} : ${chapter.title}`}
              />
            }
          />
        ))}
        {ec2Chapters.map((chapter) => (
          <Route
            key={chapter.id}
            path={`/ec2/${chapter.id}`}
            element={
              <EC2Topics
                chapter={chapter.id}
                title={`EC2 Chapitre ${chapter.id} : ${chapter.title}`}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
