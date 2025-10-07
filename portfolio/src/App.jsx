import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectPage";
import BeerRecipeGeneratorPage from "./pages/BeerRecipeGeneratorPage";
import BREventsPage from "./pages/BREventsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./i18n";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/beer-recipe-generator"
          element={<BeerRecipeGeneratorPage />}
        />
        <Route path="/br-events" element={<BREventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
