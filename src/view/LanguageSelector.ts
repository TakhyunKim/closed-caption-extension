import type { LanguageCode } from "../common/language.types";

class LanguageSelector {
  languageSelectorWrapper: HTMLDivElement;

  constructor() {
    this.languageSelectorWrapper = document.getElementById(
      "language-controller"
    ) as HTMLDivElement;
  }

  getSelectedLanguage = () => {
    const selectedLanguage = this.languageSelectorWrapper.querySelector(
      ".selected"
    ) as HTMLDivElement;

    return selectedLanguage;
  };

  getLanguageSelectorWrapperElement = () => {
    return this.languageSelectorWrapper;
  };

  toggleLanguageSelectorDisplay = () => {
    this.languageSelectorWrapper.classList.toggle("hidden");
  };

  toggleCheckLanguage = (targetLanguage: LanguageCode) => {
    const targetLanguageElement = document.querySelector(
      `[data-lang="${targetLanguage}"]`
    ) as HTMLDivElement | null;

    if (!targetLanguageElement) return;

    targetLanguageElement.children[1].classList.toggle("hidden");
    targetLanguageElement.children[1].classList.toggle("selected");
  };
}

export default LanguageSelector;
