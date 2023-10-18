import { type GotCharacterData, type CharactersData } from "../types/types";

abstract class Component {
  element: Element;
  parentElement: Element;

  constructor(HTMLtag: string, parentElement: Element) {
    this.element = document.createElement(HTMLtag);
    this.parentElement = parentElement;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }

  abstract populate(): void;
}

export default Component;
