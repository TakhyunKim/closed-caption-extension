class View {
  targetOfTranslatingElement: HTMLDivElement | null;

  constructor(targetOfTranslatingElement: HTMLDivElement | null) {
    this.targetOfTranslatingElement = targetOfTranslatingElement;
  }

  render(closedCaptionText: string) {
    if (!this.targetOfTranslatingElement) return;

    const closedCaptionParentElement = this.targetOfTranslatingElement
      .parentElement as HTMLDivElement;

    const newClosedCaptionWrapperElement =
      this.createClosedCaptionWrapperElement(this.targetOfTranslatingElement);

    const newClosedCaptionElement =
      this.createClosedCaptionTextElement(closedCaptionText);

    newClosedCaptionWrapperElement.appendChild(newClosedCaptionElement);
    closedCaptionParentElement.appendChild(newClosedCaptionWrapperElement);
  }

  getTextContent() {
    return this.targetOfTranslatingElement?.textContent ?? undefined;
  }

  createClosedCaptionWrapperElement(
    targetClosedCaptionElement: HTMLDivElement
  ): HTMLDivElement {
    const insetStyle = targetClosedCaptionElement.style.inset;

    const newClosedCaptionWrapperElement = document.createElement("div");

    newClosedCaptionWrapperElement.style.textAlign = "center";
    newClosedCaptionWrapperElement.style.position = "absolute";
    newClosedCaptionWrapperElement.style.width = "100%";
    newClosedCaptionWrapperElement.style.inset = `${
      Number(insetStyle.split(" ")[0].replace("px", "")) + 50
    }px 0 0`;

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
