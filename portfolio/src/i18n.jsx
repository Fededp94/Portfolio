import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      profileTitle: "Full Stack Developer with a great passion for Frontend",
      beerGenerator: "Beer Recipe Generator",
      speasy: "Speasy",
      card3: "Quiz",
      descriptionCard1: "A quick example text for card 1.",
      descriptionCard2: "A quick example text for card 2.",
      descriptionCard3: "A quick example text for card 3.",
      italian: "Italian",
      english: "English",
      h4MyProject: "My Projects",
      DescrizioneBrG:
        "Beer Recipe Generator is a fun and interactive web app designed to bring beer lovers and curious minds closer to the world of homebrewing. Structured like a mini-game, it lets you create real craft beer recipes using authentic parameters. As you build your recipe, you can see the beer’s color, alcohol content, and the ideal amount of malts and hops in real time, with detailed descriptions of each ingredient. The app also includes a login feature so you can save and revisit your recipes anytime. Once your recipe is complete, you can download it as a PDF with all the instructions to brew your beer at home. Beer Recipe Generator isn’t just a practical tool, it’s an educational experience that lets you explore the art of craft beer making! 🍻",
    },
  },
  it: {
    translation: {
      profileTitle:
        "Sviluppatore Full Stack con una grande passione per il Frontend",
      beerGenerator: "Beer Recipe Generator",
      speasy: "Speasy",
      card3: "Quiz",
      descriptionCard1: "Un testo di esempio rapido per la carta 1.",
      descriptionCard2: "Un testo di esempio rapido per la carta 2.",
      descriptionCard3: "Un testo di esempio rapido per la carta 3.",
      italian: "Italiano",
      english: "Inglese",
      h4MyProject: "I Miei Progetti",
      DescrizioneBrG: `Beer Recipe Generator è un'app web pensata per avvicinare appassionati
e curiosi al mondo dell'homebrewing in modo divertente e interattivo.
Strutturata come un mini-gioco, consente di creare vere ricette di
birra artigianale utilizzando parametri reali. Durante la creazione,
l'utente può scoprire in tempo reale il colore della birra, il grado
alcolico e la quantità ideale di malti e luppoli, con descrizioni
dettagliate di ogni ingrediente. L'app offre anche la funzionalità di
login per salvare e consultare le proprie ricette in qualsiasi
momento. Una volta completata la ricetta, sarà possibile scaricarla in
formato pdf con tutte le istruzioni per realizzare la birra
direttamente a casa. Beer Recipe Generator non è solo uno strumento
pratico, ma anche un’esperienza educativa per esplorare l'arte della
birra fai-da-te! 🍻`,
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
