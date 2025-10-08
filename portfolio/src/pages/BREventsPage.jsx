import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaArrowLeft,
  FaBackward,
  FaPause,
  FaPlay,
  FaForward,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CardVideo from "../images/CardsBREvents/CardVideo.mp4";

import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/BREventsPage.css";

const VIDEO_ENABLED = true;

const BREventsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 992px)");
    const upd = () => setControlsVisible(mq.matches);
    upd();
    mq.addEventListener("change", upd);
    return () => mq.removeEventListener("change", upd);
  }, []);

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
  const dVideo = t("BrE_cardDescrizioneVideo");

  // Controls handlers
  const handlePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };
  const handleForward = () => {
    const v = videoRef.current;
    if (v) v.currentTime = Math.min(v.duration || Infinity, v.currentTime + 10);
  };
  const handleBackward = () => {
    const v = videoRef.current;
    if (v) v.currentTime = Math.max(0, v.currentTime - 10);
  };

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

      {/* Card 1 */}
      <div className="events-card-container">
        <div className="events-card-text">
          <p>{typeof d1 === "string" ? d1 : ""}</p>
        </div>
        <div className="events-card events-card-1" />
      </div>

      {/* Card 2 */}
      <div className="events-card-container">
        <div className="events-card events-card-2" />
        <div className="events-card-text">
          <p>{typeof d2 === "string" ? d2 : ""}</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="events-card-container">
        <div className="events-card-text">
          <p>{typeof d3 === "string" ? d3 : ""}</p>
        </div>
        <div className="events-card events-card-3" />
      </div>

      {/* Card 4 */}
      <div className="events-card-container">
        <div className="events-card events-card-4" />
        <div className="events-card-text">
          <p>{typeof d4 === "string" ? d4 : ""}</p>
        </div>
      </div>

      {VIDEO_ENABLED && (
        <div
          className="events-card-container"
          onMouseEnter={() =>
            setControlsVisible((v) => (window.innerWidth >= 992 ? true : v))
          }
          onMouseLeave={() =>
            setControlsVisible((v) => (window.innerWidth >= 992 ? false : v))
          }>
          <div className="events-card-text">
            <p>{typeof dVideo === "string" ? dVideo : ""}</p>
          </div>

          <div
            className="events-card events-card-video"
            aria-label="Video card">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata">
              <source src={CardVideo} type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>

            {controlsVisible && (
              <div className="events-video-controls">
                <button
                  onClick={handleBackward}
                  aria-label="Indietro di 10 secondi">
                  <FaBackward />
                </button>
                <button
                  onClick={handlePlayPause}
                  aria-label={isPlaying ? "Pausa" : "Riproduci"}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button
                  onClick={handleForward}
                  aria-label="Avanti di 10 secondi">
                  <FaForward />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BREventsPage;
