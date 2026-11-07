import HomePage from "./pages/HomePage";
import PollPage from "./pages/PollPage";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poll/:id" element={<PollPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
