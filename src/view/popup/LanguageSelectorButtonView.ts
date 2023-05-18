import { PopupView } from "./PopupView";
import type { LanguageCode } from "../../common/language.types";

class LanguageSelectorButtonView extends PopupView {
  protected readonly element: HTMLButtonElement;

  constructor() {
    super();

    this.element = document.getElementById(
      "language-select-button"
    ) as HTMLButtonElement;
  }

  public getElement = () => {
    return this.element;
  };

  public getValue = () => {
    return this.element.textContent;
  };

  public setValue = (language: LanguageCode) => {
    switch (language) {
      case "ko": {
        this.element.textContent = "Korean";
        break;
      }
      case "en": {
        this.element.textContent = "English";
        break;
      }
      case "zh": {
        this.element.textContent = "Chinese";
        break;
      }
      case "es": {
        this.element.textContent = "Spanish";
        break;
      }
      case "de": {
        this.element.textContent = "German";
        break;
      }
      case "ja": {
        this.element.textContent = "Japanese";
        break;
      }
      case "ar": {
        this.element.textContent = "Arabic";
        break;
      }
      case "be": {
        this.element.textContent = "Belarusian";
        break;
      }
      case "ca": {
        this.element.textContent = "Catalan";
        break;
      }
      case "bg": {
        this.element.textContent = "Bulgarian";
        break;
      }
      case "hr": {
        this.element.textContent = "Croatian";
        break;
      }
      case "cs": {
        this.element.textContent = "Czech";
        break;
      }
      case "da": {
        this.element.textContent = "Danish";
        break;
      }
      case "nl": {
        this.element.textContent = "Dutch";
        break;
      }
      case "fil": {
        this.element.textContent = "Filipino";
        break;
      }
      case "fi": {
        this.element.textContent = "Finnish";
        break;
      }
      case "fr": {
        this.element.textContent = "French";
        break;
      }
      case "el": {
        this.element.textContent = "Greek";
        break;
      }
      case "th": {
        this.element.textContent = "Thai";
        break;
      }
      case "uk": {
        this.element.textContent = "Ukrainian";
        break;
      }
      case "vi": {
        this.element.textContent = "Vietnamese";
        break;
      }
    }
  };
}

export default LanguageSelectorButtonView;
