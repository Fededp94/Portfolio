import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main
      className="portfolio-hero is-entering"
      role="main"
      aria-label="Portfolio cover">
      {/* Bande verticali */}
      <div className="left-panel" aria-hidden="true" />
      <div className="right-panel" aria-hidden="true" />

      {/* Riquadro titolo (cliccabile) */}
      <section
        className="title-card"
        onClick={() => navigate("/projects")}
        role="button"
        tabIndex={0}
        aria-label="Entra nel portfolio"
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && navigate("/projects")
        }>
        <p className="subtitle">Full Stack Developer</p>
        <h1 className="title">
          <span className="port">PORT</span>
          <span className="folio">FOLIO</span>
        </h1>
        <p className="byline">By : Federico Di Presa</p>
      </section>
    </main>
  );
};

export default HomePage;
