import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      profileTitle: "Full Stack Developer with a great passion for Frontend",
      beerGenerator: "Beer Recipe Generator",
      brEvents: "BR Events",
      card3: "Work in progress...",
      italian: "Italian",
      english: "English",
      h4MyProject: "My Projects",

      // =======================
      // BEER RECIPE GENERATOR
      // =======================
      DescrizioneBrG: {
        description:
          "Beer Recipe Generator is a playful web app for beer enthusiasts to create real craft recipes with live color, alcohol, and ingredient details. Users can log in, save recipes, and download full brewing instructions as a PDF. It’s both practical and educational. 🍻",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.js",
          "Java",
          "SpringBoot",
        ],
      },
      cardDescrizione1:
        "The first page has Login, Signup, and Let’s Start buttons. After registering and confirming they’re 18+, users can continue.",
      cardDescrizione2: "User login tab",
      cardDescrizione3:
        "The recipe page lets you pick malts, hops, and yeasts. The pint changes color with malts. You can name the beer, access help, and generate an editable draft.",
      cardDescrizione4:
        "This page shows the recipe summary, lets users adjust malts for 25 L, displays real-time alcohol content, and offers options to save, view saved recipes, or restart.",
      cardDescrizione5:
        "This page lists saved recipes. Selecting one shows details and a button to download its brewing PDF. A button at the bottom left returns to the homepage.",
      cardDescrizioneVideo:
        "Here’s a short video showing how this game works! Cheers!",

      // =======================
      // BR EVENTS
      // =======================
      DescrizioneBrE: {
        description:
          "BR Events is a platform to create, publish, and manage events with email signups and automatic reminders. Technologies:",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.js",
          "Java",
          "PostegreSQL",
          "SpringBoot",
        ],
      },
      BrE_cardDescrizione1:
        "Public homepage: filter events by location/month and subscribe to the newsletter.",
      BrE_cardDescrizione2:
        "Admin panel: create, edit, delete events and manage images.",
      BrE_cardDescrizione3:
        "JWT authentication: admin-only access with backend security.",
      BrE_cardDescrizione4:
        "HTML email reminders: automatic send two days before events.",
      BrE_cardDescrizione5:
        "Cloudinary integration and deploy: media handling and publishing.",
      BrE_cardDescrizioneVideo:
        "Quick demo of the flow: create event, preview, and reminders.",
    },
  },

  it: {
    translation: {
      profileTitle:
        "Sviluppatore Full Stack con una grande passione per il Frontend",
      beerGenerator: "Beer Recipe Generator",
      brEvents: "BR Events",
      card3: "Work in progress...",
      italian: "Italiano",
      english: "Inglese",
      h4MyProject: "I Miei Progetti",

      // =======================
      // BEER RECIPE GENERATOR
      // =======================
      DescrizioneBrG: {
        description:
          "Beer Recipe Generator è un’app web interattiva per creare vere ricette di birra artigianale con colore, alcol e ingredienti in tempo reale. Permette di accedere, salvare le ricette e scaricare il PDF con le istruzioni. È pratica ed educativa. 🍻",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.js",
          "Java",
          "SpringBoot",
        ],
      },
      cardDescrizione1:
        "La prima pagina offre Login, Signup e Let’s Start. Dopo la registrazione e la conferma di avere 18+, l’utente può procedere.",
      cardDescrizione2: "Tab di Login per l'utente",
      cardDescrizione3:
        "La pagina ricetta consente di scegliere malti, luppoli e lieviti. La pinta cambia colore in base ai malti. Puoi dare un nome alla birra, accedere all’aiuto e generare una bozza modificabile.",
      cardDescrizione4:
        "Questa pagina mostra il riepilogo della ricetta, consente di regolare i malti per 25 L, visualizza l’alcol in tempo reale e permette di salvare, vedere le ricette salvate o ricominciare.",
      cardDescrizione5:
        "Questa pagina elenca le ricette salvate. Selezionandone una, appare il riepilogo con un pulsante per scaricare il PDF del processo. Un pulsante in basso a sinistra riporta alla homepage.",
      cardDescrizioneVideo:
        "Ecco un breve video sul funzionamento di questo gioco! Cheers!",

      // =======================
      // BR EVENTS
      // =======================
      DescrizioneBrE: {
        description:
          "BR Events è la piattaforma per creare, pubblicare e gestire eventi con iscrizioni email e reminder automatici. Tecnologie:",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.Js",
          "Java",
          "PostgreSQL",
          "SpringBoot",
        ],
      },
      BrE_cardDescrizione1:
        "Homepage pubblica: filtra gli eventi per luogo/mese e iscriviti alla newsletter.",
      BrE_cardDescrizione2:
        "Pannello Admin: crea, modifica, elimina eventi e gestisci le immagini.",
      BrE_cardDescrizione3:
        "Autenticazione JWT: accesso riservato per l’admin, sicurezza lato backend.",
      BrE_cardDescrizione4:
        "Reminder email HTML: invio automatico due giorni prima dell’evento.",
      BrE_cardDescrizione5:
        "Integrazione Cloudinary e deploy: gestione media e pubblicazione online.",
      BrE_cardDescrizioneVideo:
        "Demo rapida del flusso: creazione evento, anteprima e reminder.",
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
