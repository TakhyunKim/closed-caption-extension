import type {
  ChromeTranslateAPIMessage,
  ChromeTranslateAPIResponse,
} from "./types";

class Model {
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

      callback(translatedText);
    });
  }
}

export default Model;
