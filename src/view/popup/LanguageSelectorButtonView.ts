import type { LanguageCode } from "../../common/language.types";

class LanguageSelectorButtonView {
  private readonly languageSelectorButton: HTMLButtonElement;

  constructor() {
    this.languageSelectorButton = document.getElementById(
      "language-select-button"
    ) as HTMLButtonElement;
  }

  public getLanguageSelectorButtonElement = () => {
    return this.languageSelectorButton;
  };

  public getLanguageSelectorButtonText = () => {
    return this.languageSelectorButton.textContent;
  };

  public setLanguageSelectorButtonText = (language: LanguageCode) => {
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
      case "ar": {
        this.languageSelectorButton.textContent = "Arabic";
        break;
      }
      case "be": {
        this.languageSelectorButton.textContent = "Belarusian";
        break;
      }
      case "ca": {
        this.languageSelectorButton.textContent = "Catalan";
        break;
      }
      case "bg": {
        this.languageSelectorButton.textContent = "Bulgarian";
        break;
      }
      case "hr": {
        this.languageSelectorButton.textContent = "Croatian";
        break;
      }
      case "cs": {
        this.languageSelectorButton.textContent = "Czech";
        break;
      }
      case "da": {
        this.languageSelectorButton.textContent = "Danish";
        break;
      }
      case "nl": {
        this.languageSelectorButton.textContent = "Dutch";
        break;
      }
      case "fil": {
        this.languageSelectorButton.textContent = "Filipino";
        break;
      }
      case "fi": {
        this.languageSelectorButton.textContent = "Finnish";
        break;
      }
      case "fr": {
        this.languageSelectorButton.textContent = "French";
        break;
      }
      case "el": {
        this.languageSelectorButton.textContent = "Greek";
        break;
      }
      case "th": {
        this.languageSelectorButton.textContent = "Thai";
        break;
      }
      case "uk": {
        this.languageSelectorButton.textContent = "Ukrainian";
        break;
      }
      case "vi": {
        this.languageSelectorButton.textContent = "Vietnamese";
        break;
      }
    }
  };
}

export default LanguageSelectorButtonView;
