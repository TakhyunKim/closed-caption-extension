class View {
  domAttr: string;
  targetOfTranslatingElement: HTMLDivElement | null;

  constructor(domAttr: string) {
    this.domAttr = domAttr;
    this.targetOfTranslatingElement = null;
  }

  render(closedCaptionText: string, fontSize: number) {
    this.domAttr === ".player-timedtext-text-container"
      ? this.renderToBody(closedCaptionText, fontSize)
      : this.renderToTargetOfTranslatingElement(closedCaptionText, fontSize);
  }

  renderToTargetOfTranslatingElement(
    closedCaptionText: string,
    fontSize: number
  ) {
    if (!this.targetOfTranslatingElement) return;

    this.setClosedCaptionStyle(this.targetOfTranslatingElement);

    const newClosedCaptionElement = this.createClosedCaptionTextElement(
      closedCaptionText,
      fontSize
    );

    this.targetOfTranslatingElement.appendChild(newClosedCaptionElement);
  }

  renderToBody(closedCaptionText: string, fontSize: number) {
    const targetOfTranslatingElement = document.querySelector(".watch-video");

    if (!this.targetOfTranslatingElement || !targetOfTranslatingElement) return;

    this.setClosedCaptionStyle(this.targetOfTranslatingElement);

    const { height, top } =
      this.targetOfTranslatingElement.getBoundingClientRect();

    const newClosedCaptionElement = this.createClosedCaptionTextElement(
      closedCaptionText,
      fontSize
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
    fontSize: number
  ): HTMLDivElement {
    const newClosedCaptionElement = document.createElement("div");

    newClosedCaptionElement.textContent = text;
    newClosedCaptionElement.setAttribute("id", "text-track");

    newClosedCaptionElement.style.marginTop = "10px";
    newClosedCaptionElement.style.fontSize = `${fontSize}px`;
    newClosedCaptionElement.style.color = "rgb(255, 255, 255)";
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
