import Component from "../Components/Component.js";
import { type GotCharacterData, type CharactersData } from "../types/types.js";

class Cards extends Component {
  populate(character: GotCharacterData, state: CharactersData) {
    this.element.innerHTML = `<div class="card character__card ${character.name}">
            <img src="images/${character.imageSource}" alt="${character.name} and ${character.family}" class="character__picture card-img-top ${character.name}" />
            <div class="card-body ${character.name}">
              <h2 class="character__name card-title h4 ${character.name}">${character.name} ${character.family}</h2>
              <div class="character__info ${character.name}">
                <ul class="list-unstyled ${character.name}">
                  <li>Age: ${character.age} yrs</li>
                  <li>
                    State: ${state.isAlive}
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
