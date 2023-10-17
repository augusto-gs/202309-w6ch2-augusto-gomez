import { Character } from "../Characters/Characters.js";
import { type GotCharacterData, type CharactersData } from "../types/types.js";

export class Advisor extends Character {
  advises: CharactersData;

  constructor(characterData: GotCharacterData, advises: CharactersData) {
    super(characterData);

    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate() {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
