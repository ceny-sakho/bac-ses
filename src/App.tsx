import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SubjectView from "./pages/SubjectView";
import LevelView from "./pages/LevelView";
import ChapterDetail from "./pages/ChapterDetail";
import BacSubjects from "./pages/BacSubjects";
import PdfViewer from "./components/PdfViewer";
import { dissertationChapters } from "./data/chapters/dissertationChapters";
import { ecChapters } from "./data/chapters/ecChapters";
import { DissertationTopics } from "./components/DissertationTopics";
import { EC1Topics } from "./components/EC1Topics";
import { EC2Topics } from "./components/EC2Topics";
import { EC3Topics } from "./components/EC3Topics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/matiere/:subject" element={<SubjectView />} />
        <Route path="/niveau/:level" element={<LevelView />} />
        <Route path="/chapitre/:chapterId" element={<ChapterDetail />} />
        <Route path="/sujets-bac" element={<BacSubjects />} />
        <Route path="/pdf-viewer/:chapterId/:topicId" element={<PdfViewer />} />
        
        {/* Routes de dissertation */}
        {dissertationChapters.map((chapter) => (
          <Route
            key={`dissertation-${chapter.id}`}
            path={`/dissertation/${chapter.id}`}
            element={
              <DissertationTopics
                chapter={chapter.id}
                title={`Dissertation Chapitre ${chapter.id} : ${chapter.title}`}
              />
            }
          />
        ))}

        {/* Routes EC */}
        {ecChapters.map((chapter) => (
          <React.Fragment key={`ec-group-${chapter.id}`}>
            <Route
              path={`/ec1/${chapter.id}`}
              element={
                <EC1Topics
                  chapter={chapter.id}
                  title={`EC1 Chapitre ${chapter.id} : ${chapter.title}`}
                />
              }
            />
            <Route
              path={`/ec2/${chapter.id}`}
              element={
                <EC2Topics
                  chapter={chapter.id}
                  title={`EC2 Chapitre ${chapter.id} : ${chapter.title}`}
                />
              }
            />
            <Route
              path={`/ec3/${chapter.id}`}
              element={
                <EC3Topics
                  chapter={chapter.id}
                  title={`EC3 Chapitre ${chapter.id} : ${chapter.title}`}
                />
              }
            />
          </React.Fragment>
        ))}
      </Routes>
    </Router>
  );
}

export default App;