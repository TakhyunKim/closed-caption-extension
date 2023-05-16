import { PopupStyleView } from "./PopupView";

import type { LanguageCode } from "../../common/language.types";

class LanguageSelectView extends PopupStyleView {
  protected readonly element: HTMLDivElement;

  constructor() {
    super();

    this.element = document.getElementById(
      "language-controller"
    ) as HTMLDivElement;
  }

  public getElement = () => {
    return this.element;
  };

  public updateElement = (language: LanguageCode) => {
    this.hiddenPrevSelectedElement();
    this.setElementStyle(language);
    this.toggleLanguageSelectorDisplay();
  };

  public toggleLanguageSelectorDisplay = () => {
    this.element.classList.toggle("hidden");
  };

  public setElementStyle = (language: LanguageCode) => {
    const targetLanguageElement = document.querySelector(
      `[data-lang="${language}"]`
    ) as HTMLDivElement;
    const targetLanguageSvgElement = targetLanguageElement
      .children[1] as SVGElement;

    targetLanguageSvgElement.classList.remove("hidden");
    targetLanguageSvgElement.classList.add("selected");
  };

  protected hiddenPrevSelectedElement = () => {
    const prevSelectedElement = this.element.querySelector(".selected");

    if (!prevSelectedElement) return;

    prevSelectedElement.classList.add("hidden");
    prevSelectedElement.classList.remove("selected");
  };
}

export default LanguageSelectView;
