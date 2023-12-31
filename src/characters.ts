import { King } from "./King/King.js";
import { Fighter } from "./Fighter/Fighter.js";
import { Advisor } from "./Advisor/Advisor.js";
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

const daenerysCharacterData = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
};

const tyrionCharacterData = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "tyrion.jpg",
};

const bronnCharacterData = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
};

export const joffrey = new King(joffreyCharacterData, 2);
export const jaime = new Fighter(jaimeCharacterData, "sword", 7);
export const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);
const tyrion = new Advisor(tyrionCharacterData, daenerys);
const bronn = new Squire(bronnCharacterData, 0, jaime);

console.log(joffrey);
console.log(tyrion);
console.log(bronn);
