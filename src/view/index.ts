class View {
  domAttr: string;
  targetOfTranslatingElement: HTMLDivElement | null;

  constructor(domAttr: string) {
    this.domAttr = domAttr;
    this.targetOfTranslatingElement = null;
  }

  render(closedCaptionText: string) {
    if (!this.targetOfTranslatingElement) return;

    this.setClosedCaptionStyle(this.targetOfTranslatingElement);

    const newClosedCaptionElement =
      this.createClosedCaptionTextElement(closedCaptionText);

    this.targetOfTranslatingElement.appendChild(newClosedCaptionElement);
  }

  setTargetOfTranslatingElement() {
    const targetOfTranslatingElement = document.querySelector(
      this.domAttr
    ) as HTMLDivElement | null;

    this.targetOfTranslatingElement = targetOfTranslatingElement;
  }

  getTextContent() {
    return (
      this.targetOfTranslatingElement?.firstChild?.textContent ?? undefined
    );
  }

  setClosedCaptionStyle(closedCaptionElement: HTMLDivElement) {
    closedCaptionElement.style.display = "flex";
    closedCaptionElement.style.flexDirection = "column";
    closedCaptionElement.style.justifyContent = "center";
    closedCaptionElement.style.alignItems = "center";
  }

  createClosedCaptionTextElement(text: string): HTMLDivElement {
    const newClosedCaptionElement = document.createElement("div");

    newClosedCaptionElement.textContent = text;
    newClosedCaptionElement.setAttribute("id", "text-track");

    newClosedCaptionElement.style.color = "rgb(255, 255, 255)";
    newClosedCaptionElement.style.marginTop = "10px";
    newClosedCaptionElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

    return newClosedCaptionElement;
  }

  getTranslatedElement() {
    const translatedElement = document.getElementById(
      "text-track"
    ) as HTMLDivElement | null;

    return translatedElement;
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
