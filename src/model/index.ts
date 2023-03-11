import type { LanguageCode } from "../common/language.types";

class Model {
  fontSize: number;
  languageCode: LanguageCode;
  targetOfTranslatingText: string;

  constructor() {
    this.fontSize = 25;
    this.languageCode = "ko";
    this.targetOfTranslatingText = "";
  }

  getTargetOfTranslatingText() {
    return this.targetOfTranslatingText;
  }

  setTargetOfTranslatingText(targetOfTranslatingText: string) {
    this.targetOfTranslatingText = targetOfTranslatingText;
  }

  setFontSize(fontSize: number) {
    this.fontSize = fontSize;
  }

  getFontSize() {
    return this.fontSize;
  }

  setLanguageCode(languageCode: LanguageCode) {
    this.languageCode = languageCode;
  }

  getLanguageCode() {
    return this.languageCode;
  }
}

export default Model;
