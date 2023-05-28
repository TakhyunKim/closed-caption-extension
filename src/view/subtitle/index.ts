class View {
  domAttr: string;
  targetOfTranslatingElement: HTMLDivElement | null;

  constructor(domAttr: string) {
    this.domAttr = domAttr;
    this.targetOfTranslatingElement = null;
  }

  render(closedCaptionText: string, fontSize: number, color: string) {
    this.domAttr === ".player-timedtext-text-container"
      ? this.renderToBody(closedCaptionText, fontSize, color)
      : this.renderToTargetOfTranslatingElement(
          closedCaptionText,
          fontSize,
          color
        );
  }

  renderToTargetOfTranslatingElement(
    closedCaptionText: string,
    fontSize: number,
    color: string
  ) {
    if (!this.targetOfTranslatingElement) return;

    this.setClosedCaptionStyle(this.targetOfTranslatingElement);

    const newClosedCaptionElement = this.createClosedCaptionTextElement(
      closedCaptionText,
      fontSize,
      color
    );

    this.targetOfTranslatingElement.appendChild(newClosedCaptionElement);
  }

  renderToBody(closedCaptionText: string, fontSize: number, color: string) {
    const targetOfTranslatingElement = document.querySelector(".watch-video");

    if (!this.targetOfTranslatingElement || !targetOfTranslatingElement) return;

    this.setClosedCaptionStyle(this.targetOfTranslatingElement);

    const { height, top } =
      this.targetOfTranslatingElement.getBoundingClientRect();

    const newClosedCaptionElement = this.createClosedCaptionTextElement(
      closedCaptionText,
      fontSize,
      color
    );

    const newClosedCaptionElementWrapper =
      this.createClosedCaptionTextElementWrapper(height + top);

    newClosedCaptionElementWrapper.appendChild(newClosedCaptionElement);

    targetOfTranslatingElement.appendChild(newClosedCaptionElementWrapper);
  }

  setTargetOfTranslatingElement() {
    const targetOfTranslatingElement = document.querySelector(
      this.domAttr
    ) as HTMLDivElement | null;

    this.targetOfTranslatingElement = targetOfTranslatingElement;
  }

  getTargetOfTranslatingElement() {
    return this.targetOfTranslatingElement;
  }

  getTextContent() {
    if (!this.targetOfTranslatingElement) return;

    const list = Array.from(this.targetOfTranslatingElement.children);
    let textContent = "";

    if (list.length === 0) {
      return this.targetOfTranslatingElement.textContent;
    }

    list.forEach((element) => {
      // Translated subtitles are not included in the textContent.
      if (element.id === "text-track") return;

      textContent += `${element.textContent} `;
    });

    textContent = textContent.trim();

    return textContent;
  }

  setClosedCaptionStyle(closedCaptionElement: HTMLDivElement) {
    closedCaptionElement.style.display = "flex";
    closedCaptionElement.style.flexDirection = "column";
    closedCaptionElement.style.justifyContent = "center";
    closedCaptionElement.style.alignItems = "center";
  }

  createClosedCaptionTextElement(
    text: string,
    fontSize: number,
    color: string
  ): HTMLDivElement {
    const newClosedCaptionElement = document.createElement("div");

    newClosedCaptionElement.textContent = text;
    newClosedCaptionElement.setAttribute("id", "text-track");

    newClosedCaptionElement.style.marginTop = "10px";
    newClosedCaptionElement.style.fontSize = `${fontSize}px`;
    newClosedCaptionElement.style.color = color;
    newClosedCaptionElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

    return newClosedCaptionElement;
  }

  createClosedCaptionTextElementWrapper(position: number) {
    const newClosedCaptionElementWrapper = document.createElement("div");

    newClosedCaptionElementWrapper.setAttribute("id", "text-track-wrapper");

    newClosedCaptionElementWrapper.style.display = "flex";
    newClosedCaptionElementWrapper.style.justifyContent = "center";
    newClosedCaptionElementWrapper.style.alignItems = "center";
    newClosedCaptionElementWrapper.style.position = "absolute";
    newClosedCaptionElementWrapper.style.top = `${position}px`;
    newClosedCaptionElementWrapper.style.width = "100%";
    newClosedCaptionElementWrapper.style.height = "auto";

    return newClosedCaptionElementWrapper;
  }

  setClosedCaptionFontSize(fontSize: number) {
    const targetClosedCaptionElement = document.getElementById(
      "text-track"
    ) as HTMLDivElement | null;

    if (!targetClosedCaptionElement) return;

    targetClosedCaptionElement.style.fontSize = `${fontSize}px`;
  }

  setClosedCaptionTextColor(textColor: string) {
    const targetClosedCaptionElement = document.getElementById(
      "text-track"
    ) as HTMLDivElement | null;

    if (!targetClosedCaptionElement) return;

    targetClosedCaptionElement.style.color = textColor;
  }

  getTranslatedElement() {
    const translatedElement = document.getElementById(
      "text-track"
    ) as HTMLDivElement | null;

    return translatedElement;
  }

  getTranslatedWrapperElement() {
    const translatedElement = document.getElementById(
      "text-track-wrapper"
    ) as HTMLDivElement | null;

    return translatedElement;
  }

  deleteClosedCaptionElement() {
    const targetClosedCaptionElement = document.getElementById(
      "text-track"
    ) as HTMLDivElement | null;

    const targetClosedCaptionWrapperElement = document.getElementById(
      "text-track-wrapper"
    ) as HTMLDivElement | null;

    if (targetClosedCaptionElement) {
      targetClosedCaptionElement.remove();
    }

    if (targetClosedCaptionWrapperElement) {
      targetClosedCaptionWrapperElement.remove();
    }
  }
}

export default View;
