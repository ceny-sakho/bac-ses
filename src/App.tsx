import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LevelView from "./pages/LevelView";
import SubjectView from "./pages/SubjectView";
import ChapterDetail from "./pages/ChapterDetail";
import BacSubjects from "./pages/BacSubjects";
import EC1View from "./pages/EC1View";
import EC1ChapterView from "./pages/EC1ChapterView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/niveau/:level" element={<LevelView />} />
        <Route path="/niveau/:level/:subject" element={<SubjectView />} />
        <Route path="/chapitre/:chapterId" element={<ChapterDetail />} />
        <Route path="/sujets-bac" element={<BacSubjects />} />
        <Route path="/ec1" element={<EC1View />} />
        <Route path="/ec1/:chapterId" element={<EC1ChapterView />} />
      </Routes>
    </Router>
  );
}

export default App;