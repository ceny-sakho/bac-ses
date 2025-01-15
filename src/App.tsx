import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { BacExercises } from "./components/BacExercises";
import { DissertationTopics } from "./components/DissertationTopics";
import { EC1Topics } from "./components/EC1Topics";
import { EC2Topics } from "./components/EC2Topics";
import { EC3Topics } from "./components/EC3Topics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bac" element={<BacExercises />} />
        <Route path="/dissertation/:chapter" element={<DissertationTopics chapter="" title="" />} />
        <Route path="/ec1/:chapter" element={<EC1Topics chapter="" title="" />} />
        <Route path="/ec2/:chapter" element={<EC2Topics chapter="" title="" />} />
        <Route path="/ec3/:chapter" element={<EC3Topics chapter="" title="" />} />
      </Routes>
    </Router>
  );
}

export default App;