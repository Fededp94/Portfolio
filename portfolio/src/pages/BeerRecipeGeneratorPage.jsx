import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/BeerRecipeGeneratorPage.css";

const BeerRecipeGeneratorPage = () => {
  const { t } = useTranslation();

  return (
    <div className="beer-recipe-container">
      <div className="title">
        <h1>BEER RECIPE GENERATOR</h1>
        <p>{t("DescrizioneBrG")}</p>
      </div>
      <div className="beer-card beer-card-1">
        <div className="beer-card-body">
          <h5 className="beer-card-title">Card Title 1</h5>
          <p className="beer-card-text">Description for card 1</p>
        </div>
      </div>

      <div className="beer-card beer-card-2">
        <div className="beer-card-body">
          <h5 className="beer-card-title">Card Title 2</h5>
          <p className="beer-card-text">Description for card 2</p>
        </div>
      </div>

      <div className="beer-card beer-card-3">
        <div className="beer-card-body">
          <h5 className="beer-card-title">Card Title 3</h5>
          <p className="beer-card-text">Description for card 3</p>
        </div>
      </div>

      <div className="beer-card beer-card-4">
        <div className="beer-card-body">
          <h5 className="beer-card-title">Card Title 4</h5>
          <p className="beer-card-text">Description for card 4</p>
        </div>
      </div>

      <div className="beer-card beer-card-video">
        <div className="beer-card-video-content">
          <video autoPlay muted loop>
            <source src="path/to/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="beer-card-body">
          <h5 className="beer-card-title">Card Title 5</h5>
          <p className="beer-card-text">Description for card 5</p>
        </div>
      </div>

      <div className="beer-card beer-card-5">
        <div className="beer-card-body">
          <h5 className="beer-card-title">Card Title 6</h5>
          <p className="beer-card-text">Description for card 6</p>
        </div>
      </div>

      <div className="beer-card beer-card-6">
        <div className="beer-card-body">
          <h5 className="beer-card-title">Card Title 7</h5>
          <p className="beer-card-text">Description for card 7</p>
        </div>
      </div>

      <div className="beer-card beer-card-video">
        <div className="beer-card-video-content">
          <video autoPlay muted loop>
            <source src="path/to/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="beer-card-body">
          <h5 className="beer-card-title">Card Title 8</h5>
          <p className="beer-card-text">Description for card 8</p>
        </div>
      </div>
    </div>
  );
};

export default BeerRecipeGeneratorPage;
