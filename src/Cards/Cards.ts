import Component from "../Components/Component.js";
import { type GotCharacterData, type CharactersData } from "../types/types.js";

class Cards extends Component {
  constructor(
    parentElement: Element,
    private character: GotCharacterData,
    private state: CharactersData,
  ) {
    super("li", parentElement);
    this.element.className = "col";
  }

  populate() {
    this.element.innerHTML = ` <article class="character">
    <div class="card character__card ${this.character.name}">
            <img src="images/${this.character.imageSource}" alt="${
              this.character.name
            } and ${
              this.character.family
            }" class="character__picture card-img-top ${this.character.name}" />
            <div class="card-body ${this.character.name}">
              <h2 class="character__name card-title h4 ${
                this.character.name
              }">${this.character.name} ${this.character.family}</h2>
              <div class="character__info ${this.character.name}">
                <ul class="list-unstyled ${this.character.name}">
                  <li>Age: ${this.character.age} yrs</li>
                  <li>
                    State: ${this.state.isAlive ? "👍" : "👎"}
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>`;
  }
}

export default Cards;
