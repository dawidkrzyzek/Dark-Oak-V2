import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingSelector from "./LandingSelector";
import MeblePage from "./MeblePage";
import KamperyPage from "./KamperyPage";
import RoweryPage from "./RoweryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingSelector />} />
        <Route path="/meble" element={<MeblePage />} />
        <Route path="/kampery" element={<KamperyPage />} />
        <Route path="/rowery" element={<RoweryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
