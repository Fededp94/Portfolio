import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      profileTitle: "Full Stack Developer with a great passion for Frontend",
      beerGenerator: "Beer Recipe Generator",
      speasy: "Speasy",
      card3: "Card Title 3",
      descriptionCard1: "A quick example text for card 1.",
      descriptionCard2: "A quick example text for card 2.",
      descriptionCard3: "A quick example text for card 3.",
      italian: "Italian",
      english: "English",
      h4MyProject: "My Projects",
    },
  },
  it: {
    translation: {
      profileTitle:
        "Sviluppatore Full Stack con una grande passione per il Frontend",
      beerGenerator: "Beer Recipe Generator",
      speasy: "Speasy",
      card3: "Titolo carta 3",
      descriptionCard1: "Un testo di esempio rapido per la carta 1.",
      descriptionCard2: "Un testo di esempio rapido per la carta 2.",
      descriptionCard3: "Un testo di esempio rapido per la carta 3.",
      italian: "Italiano",
      english: "Inglese",
      h4MyProject: "I Miei Progetti",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
