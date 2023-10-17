import { Character } from "./Characters/Characters.js";
import { King } from "./King/King.js";
import { Fighter } from "./Fighter/Fighter.js";
import { Squire } from "./Squire/Squire.js";

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

const jaime = new Fighter(jaimeCharacterData, "sword", 7);

console.log(new Character(joffreyCharacterData));
console.log(new King(joffreyCharacterData, 4));
console.log(new Fighter(joffreyCharacterData, "blade", 2));
console.log(new Squire(joffreyCharacterData, 9, jaime));
