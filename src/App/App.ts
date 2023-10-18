import Component from "../Components/Component.js";
class App extends Component {
  childElement: Element;
  constructor(HTMLtag: string, parentElement: Element, childElement: string) {
    super(HTMLtag, parentElement);
    this.childElement = document.createElement(childElement);
  }

  populate(): void {
    this.childElement.className = "characters-list row list-unstyled";
    this.element.className = "container";
    this.element.appendChild(this.childElement);
  }
}

export default App;
