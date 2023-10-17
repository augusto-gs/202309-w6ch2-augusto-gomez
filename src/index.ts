import { Character } from "./Characters/Characters.js";
import { King } from "./King/King.js";
import { Fighter } from "./Fighter/Fighter.js";
import { Squire } from "./Squire/Squire.js";
import { Advisor } from "./Advisor/Advisor.js";
import Cards from "./Cards/Cards.js";
import { joffrey, jaime, daenerys } from "./characters.js";

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

console.log(new Character(joffreyCharacterData));
console.log(new King(joffreyCharacterData, 4));
console.log(new Fighter(joffreyCharacterData, "blade", 2));
console.log(new Squire(joffreyCharacterData, 9, jaime));
console.log(new Advisor(joffreyCharacterData, jaime));

const body = document.querySelector("body")!;
const joffreyCard = new Cards("li", body);
joffreyCard.populate(joffreyCharacterData, joffrey);
joffreyCard.render();

const jaimeCard = new Cards("li", body);
jaimeCard.populate(jaimeCharacterData, jaime);
jaimeCard.render();

const daenerysCard = new Cards("li", body);
daenerysCard.populate(daenerysCharacterData, daenerys);
daenerysCard.render();

console.log(joffreyCard);
