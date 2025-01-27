import React, { useState, useEffect } from "react";
import "../pages/ProjectPage.css";
import foto from "../images/ProfiloImg.jpg";

const ProjectPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [mouseOverSidebar, setMouseOverSidebar] = useState(false);

  // Funzione per rilevare il movimento del mouse
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

  return (
    <div className="container-fluid container-full-height">
      <div className="row row-full-height">
        <div
          className={`col-3 sidebar ${
            sidebarVisible ? "sidebar-visible" : "sidebar-hidden"
          }`}
          onMouseEnter={handleMouseEnterSidebar}
          onMouseLeave={handleMouseLeaveSidebar}>
          {/* Card con immagine e testo */}
          <div className="card sidebar-card">
            {/* Foto rotonda */}
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

          {/* Testi sotto la card */}
          <div className="sidebar-texts">
            <p className="sidebar-text">Testo 1</p>
            <p className="sidebar-text">Testo 2</p>
            <p className="sidebar-text">Testo 3</p>
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
