import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/BeerRecipeGeneratorPage.css";

const BeerRecipeGeneratorPage = () => {
  const { t } = useTranslation();
  const technologies = t("DescrizioneBrG.technologies", {
    returnObjects: true,
  });

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
      <div className="beer-card-container">
        <div className="beer-card beer-card-video">
          <video autoPlay muted loop>
            <source src="path/to/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="beer-card-text">
          <p>{t("cardDescrizioneVideo")}</p>
        </div>
      </div>
    </div>
  );
};

export default BeerRecipeGeneratorPage;
