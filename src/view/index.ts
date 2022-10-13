class View {
  render(closedCaptionText: string) {
    const closedCaptionElement = document.querySelector(
      ".vjs-text-track-cue"
    ) as HTMLDivElement;

    if (!closedCaptionElement) return;

    const closedCaptionParentElement =
      closedCaptionElement.parentElement as HTMLDivElement;

    const newClosedCaptionWrapperElement =
      this.createClosedCaptionWrapperElement();

    const newClosedCaptionElement =
      this.createClosedCaptionElement(closedCaptionText);

    newClosedCaptionWrapperElement.appendChild(newClosedCaptionElement);
    closedCaptionParentElement.appendChild(newClosedCaptionWrapperElement);
  }

  getClosedCaptionElement() {
    const closedCaptionElement = document.querySelector(
      ".vjs-text-track-cue"
    ) as HTMLDivElement | null;

    return closedCaptionElement;
  }

  getTextContent() {
    const closedCaptionElement = document.querySelector(
      ".vjs-text-track-cue"
    ) as HTMLDivElement | null;

    return closedCaptionElement?.textContent ?? undefined;
  }

  createClosedCaptionWrapperElement(): HTMLDivElement {
    const closedCaptionElement = document.querySelector(
      ".vjs-text-track-cue"
    ) as HTMLDivElement;

    const insetStyle = closedCaptionElement.style.inset;

    const newClosedCaptionWrapperElement = document.createElement("div");

    newClosedCaptionWrapperElement.style.textAlign = "center";
    newClosedCaptionWrapperElement.style.position = "absolute";
    newClosedCaptionWrapperElement.style.width = "100%";
    newClosedCaptionWrapperElement.style.inset = `${
      Number(insetStyle.split(" ")[0].replace("px", "")) + 50
    }px 0 0`;
    newClosedCaptionWrapperElement.classList.add("vjs-text-track-cue");

    return newClosedCaptionWrapperElement;
  }

  createClosedCaptionElement(text: string): HTMLDivElement {
    const newClosedCaptionElement = document.createElement("div");

    newClosedCaptionElement.textContent = text;
    newClosedCaptionElement.style.color = "rgb(255, 255, 255)";
    newClosedCaptionElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

    return newClosedCaptionElement;
  }
}

export default View;
