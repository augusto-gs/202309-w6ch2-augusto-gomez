import { Character } from "./Characters/Characters.js";
import { King } from "./King/King.js";
import { Fighter } from "./Fighter/Fighter.js";
import { Squire } from "./Squire/Squire.js";
import { Advisor } from "./Advisor/Advisor.js";
import Cards from "./Cards/Cards.js";
import { joffrey, jaime, daenerys } from "./characters.js";
import App from "./App/App.js";

const joffreyCharacterData = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "joffrey.jpg",
};

const jaimeCharacterData = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "jaime.jpg",
};

const daenerysCharacterData = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
};

const body = document.querySelector("body")!;

const container = new App("div", body, "ul");
container.render();
container.populate();

const joffreyCard = new Cards(
  container.childElement,
  joffreyCharacterData,
  joffrey,
);
joffreyCard.populate();
joffreyCard.render();

const jaimeCard = new Cards(container.childElement, jaimeCharacterData, jaime);
jaimeCard.populate();
jaimeCard.render();

const daenerysCard = new Cards(
  container.childElement,
  daenerysCharacterData,
  daenerys,
);
daenerysCard.populate();
daenerysCard.render();
