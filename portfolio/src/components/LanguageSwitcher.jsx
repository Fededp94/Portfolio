import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button
        className="language-button"
        onClick={() => handleLanguageChange("en")}>
        EN
      </button>
      <button
        className="language-button"
        onClick={() => handleLanguageChange("it")}>
        IT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
