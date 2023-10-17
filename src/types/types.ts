export interface GotCharacterData {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface FighterData {
  weapon: string;
  dexterity: number;
  characterData: GotCharacterData;
}
