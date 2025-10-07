import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/BREventsPage.css";

const VIDEO_ENABLED = false;
const EventsVideo = undefined;

const BREventsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const rawTech = t("DescrizioneBrE.technologies", { returnObjects: true });

  const technologies = Array.isArray(rawTech)
    ? rawTech
    : typeof rawTech === "string"
    ? rawTech
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const intro = t("DescrizioneBrE.description");
  const d1 = t("BrE_cardDescrizione1");
  const d2 = t("BrE_cardDescrizione2");
  const d3 = t("BrE_cardDescrizione3");
  const d4 = t("BrE_cardDescrizione4");
  const d5 = t("BrE_cardDescrizione5");
  const dVideo = t("BrE_cardDescrizioneVideo");

  return (
    <div className="events-container">
      {/* Back */}
      <button
        className="events-back-arrow"
        aria-label="Torna alla ProjectPage"
        onClick={() => navigate("/projects")}>
        <FaArrowLeft />
      </button>

      {/* Titolo + intro */}
      <div className="events-title">
        <h1>BR EVENTS</h1>
        <p>
          {(typeof intro === "string" ? intro : "") + " "}
          {technologies.length > 0 &&
            technologies.map((tech, index) => (
              <React.Fragment key={`${tech}-${index}`}>
                <span className={`events-tech-${index}`}>{tech}</span>
                {index < technologies.length - 1 && ", "}
              </React.Fragment>
            ))}
        </p>
      </div>

      {/* Card 1: Testo a sinistra */}
      <div className="events-card-container">
        <div className="events-card-text">
          <p>{typeof d1 === "string" ? d1 : ""}</p>
        </div>
        <div className="events-card events-card-1" />
      </div>

      {/* Card 2: Testo a destra */}
      <div className="events-card-container">
        <div className="events-card events-card-2" />
        <div className="events-card-text">
          <p>{typeof d2 === "string" ? d2 : ""}</p>
        </div>
      </div>

      {/* Card 3: Testo a sinistra */}
      <div className="events-card-container">
        <div className="events-card-text">
          <p>{typeof d3 === "string" ? d3 : ""}</p>
        </div>
        <div className="events-card events-card-3" />
      </div>

      {/* Card 4: Testo a destra */}
      <div className="events-card-container">
        <div className="events-card events-card-4" />
        <div className="events-card-text">
          <p>{typeof d4 === "string" ? d4 : ""}</p>
        </div>
      </div>

      {/* Card 5: Testo a sinistra */}
      <div className="events-card-container">
        <div className="events-card-text">
          <p>{typeof d5 === "string" ? d5 : ""}</p>
        </div>
        <div className="events-card events-card-5" />
      </div>

      {/* 🔇 Card Video (inattiva ma pronta) */}
      {VIDEO_ENABLED && (
        <div className="events-card-container">
          <div className="events-card events-card-video">
            <video autoPlay muted loop playsInline>
              <source src={EventsVideo} type="video/mp4" />
            </video>
          </div>
          <div className="events-card-text">
            <p>{typeof dVideo === "string" ? dVideo : ""}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BREventsPage;
