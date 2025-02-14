import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../pages/ProjectPage.css";
import foto from "../images/ProfiloImg.jpg";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  // Aggiorna progress bar e donut
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

    const donuts = document.querySelectorAll(".donut-progress");
    donuts.forEach((donut) => {
      const percentage = donut.getAttribute("data-percentage");
      const radius = donut.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = sidebarVisible
        ? circumference - (percentage / 100) * circumference
        : circumference;

      donut.style.strokeDasharray = `${circumference} ${circumference}`;
      donut.style.strokeDashoffset = offset;
    });
  }, [sidebarVisible]);

  return (
    <div className="container-fluid container-full-height">
      <div className="row row-full-height">
        {/* SIDEBAR */}
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
              <p className="card-text">{t("profileTitle")}</p>
            </div>
          </div>

          <hr />
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="100"></div>
              <span className="progress-bar-label">
                HTML5 | CSS3 | JavaScript | React.js | GitHub
              </span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="90"></div>
              <span className="progress-bar-label">Bootstrap | SpringBoot</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="80"></div>
              <span className="progress-bar-label">Java</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="85"></div>
              <span className="progress-bar-label">PostgresSQL</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" data-percentage="100"></div>
              <span className="progress-bar-label">
                Photoshop | Illustrator | InDesign
              </span>
            </div>
          </div>

          <hr />
          <div className="donut-container">
            <div className="donut">
              <svg width="100" height="100">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%">
                    <stop offset="0%" stopColor="rgba(255,149,0,1)" />
                    <stop offset="100%" stopColor="rgba(255,205,0,1)" />
                  </linearGradient>
                </defs>
                <circle
                  className="donut-background"
                  cx="50"
                  cy="50"
                  r="45"></circle>
                <circle
                  className="donut-progress"
                  cx="50"
                  cy="50"
                  r="45"
                  data-percentage="100"></circle>
                <text x="50%" y="50%" textAnchor="middle" dy=".3em">
                  {t("italian")}
                </text>
              </svg>
            </div>
            <div className="donut">
              <svg width="100" height="100">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%">
                    <stop offset="0%" stopColor="rgba(255,149,0,1)" />
                    <stop offset="100%" stopColor="rgba(255,205,0,1)" />
                  </linearGradient>
                </defs>
                <circle
                  className="donut-background"
                  cx="50"
                  cy="50"
                  r="45"></circle>
                <circle
                  className="donut-progress"
                  cx="50"
                  cy="50"
                  r="45"
                  data-percentage="75"></circle>
                <text x="50%" y="50%" textAnchor="middle" dy=".3em">
                  {t("english")}
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="main-content">
          {/* SEZIONE SUPERIORE */}
          <div className="top-section">
            <div className="main-card">
              <h3 className="main-card-text">
                eat <span className="parentesi1">&#40;</span>
                &nbsp;<span className="parentesi1">&#41;</span>; code{" "}
                <span className="parentesi2">&#40;</span>
                &nbsp;<span className="parentesi2">&#41;</span>; sleep{" "}
                <span className="parentesi3">&#40;</span>
                &nbsp;<span className="parentesi3">&#41;</span>; code{" "}
                <span className="parentesi4">&#40;</span>
                &nbsp;<span className="parentesi4">&#41;</span>; repeat{" "}
                <span className="parentesi5">&#40;</span>
                &nbsp;<span className="parentesi5">&#41;</span>;
              </h3>
            </div>
          </div>
          <h4>
            {t("h4MyProject")} <span className="yellow">3+</span>
          </h4>
          {/* SEZIONE INFERIORE */}
          <div className="bottom-section">
            <div className="row w-100 justify-content-center">
              <div className="col-md-4">
                <div
                  className="card first"
                  onClick={() => navigate("/beer-recipe-generator")}>
                  <div className="card-body">
                    <h5 className="card-title">{t("beerGenerator")}</h5>
                    <p className="card-text">{t("descriptionCard1")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card second">
                  <div className="card-body">
                    <h5 className="card-title">{t("speasy")}</h5>
                    <p className="card-text">{t("descriptionCard2")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card third">
                  <div className="card-body">
                    <h5 className="card-title">{t("card3")}</h5>
                    <p className="card-text">{t("descriptionCard3")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LanguageSwitcher />
    </div>
  );
};

export default ProjectPage;
