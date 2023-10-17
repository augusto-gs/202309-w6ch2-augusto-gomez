abstract class Component {
  element: Element;
  parentElement: Element;

  constructor(HTMLtag: string, parentElement: Element) {
    this.element = document.createElement(HTMLtag);
    this.parentElement = parentElement;
  }

  render(): void {
    this.element.appendChild(this.parentElement);

    this.populate();
  }

  abstract populate(): void;
}

export default Component;
