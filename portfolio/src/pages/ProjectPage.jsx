import React, { useState, useEffect } from "react";
import "../pages/ProjectPage.css";
import foto from "../images/ProfiloImg.jpg";

const ProjectPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [mouseOverSidebar, setMouseOverSidebar] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX < 20) {
        setSidebarVisible(true);
      } else if (!mouseOverSidebar) {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseOverSidebar]);

  const handleMouseEnterSidebar = () => {
    setMouseOverSidebar(true);
    setSidebarVisible(true);
  };

  const handleMouseLeaveSidebar = () => {
    setMouseOverSidebar(false);
    if (window.event.clientX < 20) {
      setSidebarVisible(true);
    } else {
      setSidebarVisible(false);
    }
  };

  // Effetto per aggiornare le progress bar in base alla visibilità della sidebar
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar-fill");
    progressBars.forEach((bar) => {
      if (sidebarVisible) {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = `${percentage}%`;
      } else {
        bar.style.width = "0%";
      }
    });
  }, [sidebarVisible]);

  return (
    <div className="container-fluid container-full-height">
      <div className="row row-full-height">
        <div
          className={`col-3 sidebar ${
            sidebarVisible ? "sidebar-visible" : "sidebar-hidden"
          }`}
          onMouseEnter={handleMouseEnterSidebar}
          onMouseLeave={handleMouseLeaveSidebar}>
          <div className="card sidebar-card">
            <div className="sidebar-card-img-container">
              <img src={foto} alt="Foto Profilo" className="sidebar-card-img" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Federico Di Presa</h5>
              <p className="card-text">
                Full Stack Developer with a great passion for Frontend
              </p>
            </div>
          </div>

          {/* Barre di caricamento */}
          <hr />
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="100"></div>
              <span className="progress-bar-label">
                HTML5 | CSS3| JavaScript | React.js | GitHub
              </span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="90"></div>
              <span className="progress-bar-label">Bootstrap | SpringBoot</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="70"></div>
              <span className="progress-bar-label">Java</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="75"></div>
              <span className="progress-bar-label">PostgresSQL</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="100"></div>
              <span className="progress-bar-label">
                Photoshop | Illustrator | InDesign
              </span>
            </div>
            <hr />
          </div>
        </div>

        <div className="col-9 main-content">
          <h1 className="text-3xl font-bold">Benvenuto nella Project Page</h1>
          <p>Questo è il contenuto principale della pagina.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
