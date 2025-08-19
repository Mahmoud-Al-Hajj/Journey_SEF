import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./App.css";
import Home from "./Pages/Home";
import TechnicalSkills from "./Pages/TechnicalSkills.jsx";
import SoftSkills from "./Pages/SoftSkills";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technical-skills" element={<TechnicalSkills />} />
            <Route path="/soft-skills" element={<SoftSkills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
