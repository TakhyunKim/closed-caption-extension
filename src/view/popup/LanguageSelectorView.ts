import type { LanguageCode } from "../../common/language.types";

class LanguageSelectView {
  private readonly languageSelector: HTMLDivElement;

  constructor() {
    this.languageSelector = document.getElementById(
      "language-controller"
    ) as HTMLDivElement;
  }

  private updateSelectedLanguageStyle = (selectedElement: SVGElement) => {
    selectedElement.classList.toggle("hidden");
    selectedElement.classList.toggle("selected");
  };

  public getLanguageSelector = () => {
    return this.languageSelector;
  };

  public toggleLanguageSelectorDisplay = () => {
    this.languageSelector.classList.toggle("hidden");
  };

  public toggleCheckLanguage = (language: LanguageCode) => {
    const targetLanguageElement = document.querySelector(
      `[data-lang="${language}"]`
    ) as HTMLDivElement;
    const targetLanguageSvgElement = targetLanguageElement
      .children[1] as SVGElement;

    this.updateSelectedLanguageStyle(targetLanguageSvgElement);
  };

  public updateLanguage = (language: LanguageCode) => {
    this.toggleCheckLanguage(language);
    this.toggleLanguageSelectorDisplay();
  };
}

export default LanguageSelectView;
