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
      const translatedText = response.data?.message.result.translatedText;

      if (!translatedText) return;
      console.log("model 은 실행");
      callback(translatedText);
    });
  }
}

export default Model;
