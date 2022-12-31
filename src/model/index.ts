class Model {
  fontSize: number;
  targetOfTranslatingText: string;

  constructor() {
    this.fontSize = 25;
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
}

export default Model;
