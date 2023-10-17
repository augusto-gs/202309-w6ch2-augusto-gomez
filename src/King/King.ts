import { Character } from "../Characters/Characters.js";
import type { GotCharacterData } from "../types/types.js";

export class King extends Character {
  yearsOfReign: number;

  constructor(characterData: GotCharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
