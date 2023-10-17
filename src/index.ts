import { Character } from "./Characters/Characters.js";
import { King } from "./King/King.js";
import { Fighter } from "./Fighter/Fighter.js";

const joffreyCharacterData = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "joffrey.jpg",
};

console.log(new Character(joffreyCharacterData));
console.log(new King(joffreyCharacterData, 4));
console.log(new Fighter(joffreyCharacterData, "blade", 2));
