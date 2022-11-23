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

  createClosedCaptionStyle(targetClosedCaptionElement: HTMLDivElement) {
    const elementPosition = targetClosedCaptionElement.getBoundingClientRect();
    const closedCaptionYPosition = elementPosition.bottom - 50;

    return { bottom: closedCaptionYPosition };
  }

  createClosedCaptionWrapperElement(
    targetClosedCaptionElement: HTMLDivElement
  ): HTMLDivElement {
    const closedCaptionStyle = this.createClosedCaptionStyle(
      targetClosedCaptionElement
    );

    const newClosedCaptionWrapperElement = document.createElement("div");

    newClosedCaptionWrapperElement.style.textAlign = "center";
    newClosedCaptionWrapperElement.style.position = "absolute";
    newClosedCaptionWrapperElement.style.width = "100%";
    newClosedCaptionWrapperElement.style.bottom =
      closedCaptionStyle.bottom.toString();
    newClosedCaptionWrapperElement.setAttribute("id", "text-track");

    return newClosedCaptionWrapperElement;
  }

  createClosedCaptionTextElement(text: string): HTMLDivElement {
    const newClosedCaptionElement = document.createElement("div");

    newClosedCaptionElement.textContent = text;
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
