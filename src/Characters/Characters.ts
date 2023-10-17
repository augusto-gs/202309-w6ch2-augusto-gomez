import type { GotCharacterData } from "../types/types.js";

export class Character {
  isAlive = true;
  series = "Game of Thrones";
  characterData;

  constructor(characterData: GotCharacterData) {
    this.characterData = characterData;
  }

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die(): void {
    this.isAlive = false;
  }
}
