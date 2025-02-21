import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      profileTitle: "Full Stack Developer with a great passion for Frontend",
      beerGenerator: "Beer Recipe Generator",
      speasy: "Speasy",
      card3: "Quiz",
      italian: "Italian",
      english: "English",
      h4MyProject: "My Projects",

      DescrizioneBrG: {
        description:
          "Beer Recipe Generator is a fun and interactive web app designed to bring beer lovers and curious minds closer to the world of homebrewing. Structured like a mini-game, it lets you create real craft beer recipes using authentic parameters. As you build your recipe, you can see the beer's color, alcohol content, and the ideal amount of malts and hops in real time, with detailed descriptions of each ingredient. The app also includes a login feature so you can save and revisit your recipes anytime. Once your recipe is complete, you can download it as a PDF with all the instructions to brew your beer at home. Beer Recipe Generator isn't just a practical tool, it's an educational experience that lets you explore the art of craft beer making! 🍻\n\nLanguages and Frameworks used:",
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
        "The first page features several buttons Login, which grants access if the user is already registered; Signup, which allows the user to register; and the let's Start Button, which opens a brand new registration form." +
        " Once the registration is complete and the user confirms they are at least 18+, they can proceed.",
      cardDescrizione2: "User login tab",
      cardDescrizione3:
        "This is the recipe creation page with buttons to choose malts, hops, and yeasts. The beer pint on the right changes color based on selected malts. You can name your beer at the top left and access a help banner at the" +
        "top right. The Generate button creates an editable recipe draft.",
      cardDescrizione4:
        "On this page, users see a summary of their recipe and can adjust malt amounts for 25 liters of beer. The game shows the beer's alcohol content in real-time. After making" +
        "adjustments, users can save the recipe, skip saving and view saved recipes, or start over and return to the homepage.",
      cardDescrizione5:
        "On this final page, the user will find their saved recipes. When a recipe is selected, a detailed summary will pop up, along with a button to download a PDF of the full " +
        "brewing process for that recipe. There's also a button at the bottom left to return to the home page.",
      cardDescrizioneVideo:
        "Here’s a short video showing how this game works! Cheers!",
    },
  },
  it: {
    translation: {
      profileTitle:
        "Sviluppatore Full Stack con una grande passione per il Frontend",
      beerGenerator: "Beer Recipe Generator",
      speasy: "Speasy",
      card3: "Quiz",
      italian: "Italiano",
      english: "Inglese",
      h4MyProject: "I Miei Progetti",
      DescrizioneBrG: {
        description:
          "Beer Recipe Generator è un'app web pensata per avvicinare appassionati " +
          "e curiosi al mondo dell'homebrewing in modo divertente e interattivo. " +
          "Strutturata come un mini-gioco, consente di creare vere ricette di " +
          "birra artigianale utilizzando parametri reali. Durante la creazione, " +
          "l'utente può scoprire in tempo reale il colore della birra, il grado " +
          "alcolico e la quantità ideale di malti e luppoli, con descrizioni " +
          "dettagliate di ogni ingrediente. L'app offre anche la funzionalità di " +
          "login per salvare e consultare le proprie ricette in qualsiasi " +
          "momento. Una volta completata la ricetta, sarà possibile scaricarla in " +
          "formato pdf con tutte le istruzioni per realizzare la birra " +
          "direttamente a casa. Beer Recipe Generator non è solo uno strumento " +
          "pratico, ma anche un'esperienza educativa per esplorare l'arte della " +
          "birra fai-da-te! 🍻 Linguaggi e Frameworks utilizzati:",
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
        "La prima pagina si presenta con vari pulsanti: Login, permette l'accesso all'utente se precedentemente iscritto, Singup, permette la registrazione all'utente" +
        " e il tasto Iniziamo che apre una scheda di registrazione ex novo. Una volta fatta la registrazione e confermato di avere almeno 18+, l'utente potrà procedere",
      cardDescrizione2: "Tab di Login per l'utente",
      cardDescrizione3:
        "Questa è la pagina di creazione ricette con pulsanti per scegliere malti, luppoli e lieviti. La pinta a destra cambia colore in base ai malti selezionati." +
        "Puoi dare un nome alla birra in alto a sinistra e accedere a un banner informativo in alto a destra. Il pulsante Genera crea una bozza modificabile della ricetta.",
      cardDescrizione4:
        "In questa pagina, l’utente vede un riepilogo della ricetta e può modificare la quantità di malto per 25 litri di birra. Il gioco mostra in tempo reale il contenuto" +
        "alcolico della birra. Dopo le modifiche, può salvare la ricetta, saltare il salvataggio per vedere le ricette salvate o ricominciare tornando alla home.",
      cardDescrizione5:
        "In questa ultima pagina, l'utente, si troverà tra le sue ricette salvate. Se una ricetta viene selezionata, si aprirà una scheda con un ulteriore riepilogo e con un pulsante " +
        "che permetterà di scaricare il pdf con l'intero procedimento sviluppato per la ricetta selezionata. Con il pulsante in basso a sinistra si torna alla home page",
      cardDescrizioneVideo:
        "Ecco un breve video sul funzionamento di questo gioco! Cheers!",
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
