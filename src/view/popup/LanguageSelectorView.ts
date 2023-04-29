import type { LanguageCode } from "../../common/language.types";

class LanguageSelectView {
  private readonly languageSelector: HTMLDivElement;

  constructor() {
    this.languageSelector = document.getElementById(
      "language-controller"
    ) as HTMLDivElement;
  }

  private hiddenPrevSelectedElement = () => {
    const prevSelectedElement =
      this.languageSelector.querySelector(".selected");

    if (!prevSelectedElement) return;

    prevSelectedElement.classList.add("hidden");
    prevSelectedElement.classList.remove("selected");
  };

  public getLanguageSelector = () => {
    return this.languageSelector;
  };

  public toggleLanguageSelectorDisplay = () => {
    this.languageSelector.classList.toggle("hidden");
  };

  public setSelectedElementStyle = (language: LanguageCode) => {
    const targetLanguageElement = document.querySelector(
      `[data-lang="${language}"]`
    ) as HTMLDivElement;
    const targetLanguageSvgElement = targetLanguageElement
      .children[1] as SVGElement;

    targetLanguageSvgElement.classList.remove("hidden");
    targetLanguageSvgElement.classList.add("selected");
  };

  public updateLanguage = (language: LanguageCode) => {
    this.hiddenPrevSelectedElement();
    this.setSelectedElementStyle(language);
    this.toggleLanguageSelectorDisplay();
  };
}

export default LanguageSelectView;
