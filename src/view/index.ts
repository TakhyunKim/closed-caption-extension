class View {
  domAttr: string;
  targetOfTranslatingElement: HTMLDivElement | null;

  constructor(domAttr: string) {
    this.domAttr = domAttr;
    this.targetOfTranslatingElement = null;
  }

  render(closedCaptionText: string) {
    if (!this.targetOfTranslatingElement) return;

    const closedCaptionParentElement = this.targetOfTranslatingElement
      .parentElement as HTMLDivElement;

    const newClosedCaptionElement =
      this.createClosedCaptionTextElement(closedCaptionText);

    closedCaptionParentElement.appendChild(newClosedCaptionElement);
  }

  setTargetOfTranslatingElement() {
    const targetOfTranslatingElement = document.querySelector(
      this.domAttr
    ) as HTMLDivElement | null;

    this.targetOfTranslatingElement = targetOfTranslatingElement;
  }

  getTextContent() {
    return this.targetOfTranslatingElement?.textContent ?? undefined;
  }

  createClosedCaptionTextElement(text: string): HTMLDivElement {
    const newClosedCaptionElement = document.createElement("div");

    newClosedCaptionElement.textContent = text;
    newClosedCaptionElement.setAttribute("id", "text-track");

    newClosedCaptionElement.style.color = "rgb(255, 255, 255)";
    newClosedCaptionElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

    return newClosedCaptionElement;
  }

  deleteClosedCaptionElement() {
    const targetClosedCaptionElement = document.getElementById(
      "text-track"
    ) as HTMLDivElement | null;

    if (!targetClosedCaptionElement) return;

    targetClosedCaptionElement.remove();
  }
}

export default View;
