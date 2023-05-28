import type { LanguageCode } from "../../common/language.types";

class Model {
  fontSize: number;
  textColor: string;
  languageCode: LanguageCode;
  targetOfTranslatingText: string;

  constructor() {
    this.fontSize = 25;
    this.textColor = "#111111";
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

  setTextColor(textColor: string) {
    this.textColor = textColor;
  }

  getTextColor() {
    return this.textColor;
  }

  setLanguageCode(languageCode: LanguageCode) {
    this.languageCode = languageCode;
  }

  getLanguageCode() {
    return this.languageCode;
  }
}

export default Model;
