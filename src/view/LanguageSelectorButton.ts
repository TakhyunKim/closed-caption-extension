import type { LanguageCode } from "../common/language.types";

class LanguageSelectorButton {
  private readonly languageSelectorButton: HTMLButtonElement;

  constructor() {
    this.languageSelectorButton = document.getElementById(
      "language-select-button"
    ) as HTMLButtonElement;
  }

  getLanguageSelectorButtonElement = () => {
    return this.languageSelectorButton;
  };

  getLanguageSelectorButtonText = () => {
    return this.languageSelectorButton.textContent;
  };

  setLanguageSelectorButtonText = (language: LanguageCode) => {
    switch (language) {
      case "ko": {
        this.languageSelectorButton.textContent = "Korean";
        break;
      }
      case "en": {
        this.languageSelectorButton.textContent = "English";
        break;
      }
      case "zh": {
        this.languageSelectorButton.textContent = "Chinese";
        break;
      }
      case "es": {
        this.languageSelectorButton.textContent = "Spanish";
        break;
      }
      case "de": {
        this.languageSelectorButton.textContent = "German";
        break;
      }
      case "ja": {
        this.languageSelectorButton.textContent = "Japanese";
        break;
      }

      default: {
        this.languageSelectorButton.textContent = "Korean";
        break;
      }
    }
  };
}

export default LanguageSelectorButton;
