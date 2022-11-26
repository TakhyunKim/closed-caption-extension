import type {
  ChromeTranslateAPIMessage,
  ChromeTranslateAPIResponse,
} from "./types";

class Model {
  targetOfTranslatingText: string;

  constructor() {
    this.targetOfTranslatingText = "";
  }

  getTargetOfTranslatingText() {
    return this.targetOfTranslatingText;
  }

  setTargetOfTranslatingText(targetOfTranslatingText: string) {
    this.targetOfTranslatingText = targetOfTranslatingText;
  }

  getTranslatedText(
    translateTargetText: string,
    callback: (translatedText: string) => void
  ) {
    chrome.runtime.sendMessage<
      ChromeTranslateAPIMessage,
      ChromeTranslateAPIResponse
    >({ name: "translate", payload: translateTargetText }, (response) => {
      const translatedText = response.data;

      if (!translatedText || response.error) return;

      this.setTargetOfTranslatingText(translateTargetText);

      callback(translatedText);
    });
  }
}

export default Model;
