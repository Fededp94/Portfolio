import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBackward, FaPause, FaPlay, FaForward } from "react-icons/fa";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Video from "../images/BrgImages/BrFunctions.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/BeerRecipeGeneratorPage.css";

const BeerRecipeGeneratorPage = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);

  const technologies = t("DescrizioneBrG.technologies", {
    returnObjects: true,
  });

  // Funzione per Play/Pausa
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Avanzare di 7 secondi
  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 7;
    }
  };

  // Tornare indietro di 7 secondi
  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 7;
    }
  };

  return (
    <div className="beer-recipe-container">
      <div className="title">
        <h1>BEER RECIPE GENERATOR</h1>

        <p>
          {t("DescrizioneBrG.description")}{" "}
          {technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              <span className={`tech-${index}`}>{tech}</span>
              {index < technologies.length - 1 && ", "}
            </React.Fragment>
          ))}
        </p>
      </div>

      {/* Card 1: Testo a sinistra */}
      <div className="beer-card-container">
        <div className="beer-card-text">
          <p>{t("cardDescrizione1")}</p>
        </div>
        <div className="beer-card beer-card-1"></div>
      </div>

      {/* Card 2: Testo a destra */}
      <div className="beer-card-container">
        <div className="beer-card beer-card-2"></div>
        <div className="beer-card-text">
          <p>{t("cardDescrizione2")}</p>
        </div>
      </div>

      {/* Card 3: Testo a sinistra */}
      <div className="beer-card-container">
        <div className="beer-card-text">
          <p>{t("cardDescrizione3")}</p>
        </div>
        <div className="beer-card beer-card-3"></div>
      </div>

      {/* Card 4: Testo a destra */}
      <div className="beer-card-container">
        <div className="beer-card beer-card-4"></div>
        <div className="beer-card-text">
          <p>{t("cardDescrizione4")}</p>
        </div>
      </div>

      {/* Card 5: Testo a sinistra */}
      <div className="beer-card-container">
        <div className="beer-card-text">
          <p>{t("cardDescrizione5")}</p>
        </div>
        <div className="beer-card beer-card-5"></div>
      </div>

      {/* Video Card */}
      <div
        className="beer-card-container"
        onMouseEnter={() => setControlsVisible(true)}
        onMouseLeave={() => setControlsVisible(false)}>
        <div className="beer-card beer-card-video">
          <video ref={videoRef} autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>

          {controlsVisible && (
            <div className="video-controls">
              <button onClick={handleBackward}>
                <FaBackward />
              </button>
              <button onClick={handlePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={handleForward}>
                <FaForward />
              </button>
            </div>
          )}
        </div>

        <div className="beer-card-text">
          <p>{t("cardDescrizioneVideo")}</p>
        </div>
      </div>
    </div>
  );
};

export default BeerRecipeGeneratorPage;
