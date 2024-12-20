import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SubjectView from "./pages/SubjectView";
import LevelView from "./pages/LevelView";
import { ChapterDetail } from "./pages/ChapterDetail";
import BacSubjects from "./pages/BacSubjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/matiere/:subject" element={<SubjectView />} />
        <Route path="/niveau/:level" element={<LevelView />} />
        <Route path="/chapitre/:chapterId" element={<ChapterDetail />} />
        <Route path="/sujets-bac" element={<BacSubjects />} />
      </Routes>
    </Router>
  );
}

export default App;