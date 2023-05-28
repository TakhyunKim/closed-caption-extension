import View from "../../view/subtitle";
import Model from "../../model/subtitle";

import { sendMessageToBackgroundTranslatingText } from "../../api/message";

import type { LanguageCode } from "../../common/language.types";

class Controller {
  _view: View;
  _model: Model;

  constructor(view: View, model: Model) {
    this._view = view;
    this._model = model;
  }

  compareIsSameTargetOfTranslatingText() {
    const textContent = this._view.getTextContent();
    const prevTargetOfTranslatingText =
      this._model.getTargetOfTranslatingText();

    return textContent === prevTargetOfTranslatingText;
  }

  checkIsSameTargetElementAndText() {
    const translatedElement = this._view.getTranslatedElement();
    const isSameTargetOfTranslatingText =
      this.compareIsSameTargetOfTranslatingText();

    return translatedElement && isSameTargetOfTranslatingText;
  }

  async translatedAndRender() {
    this._view.setTargetOfTranslatingElement();

    const isSameTargetElementAndText = this.checkIsSameTargetElementAndText();

    const textContent = this._view.getTextContent();
    const translatedLanguageCode = this._model.getLanguageCode();
    const translatedWrapperElement = this._view.getTranslatedWrapperElement();

    if (translatedWrapperElement && !textContent) {
      this._view.deleteClosedCaptionElement();
      return;
    }

    if (!textContent || isSameTargetElementAndText) return;

    const deletePrevElementEndRender = (translatedText: string) => {
      // delete prev closed caption element
      this._view.deleteClosedCaptionElement();
      this._model.setTargetOfTranslatingText(textContent);

      const fontSize = this._model.getFontSize();
      const textColor = this._model.getTextColor();

      this._view.render.call(this._view, translatedText, fontSize, textColor);
    };

    await sendMessageToBackgroundTranslatingText(
      textContent,
      translatedLanguageCode,
      deletePrevElementEndRender
    );
  }

  changeFontSizeRangeElement(value: number) {
    this._model.setFontSize(value);
    this._view.setClosedCaptionFontSize(value);
  }

  changeTextColorElement(textColor: string) {
    this._model.setTextColor(textColor);
    this._view.setClosedCaptionTextColor(textColor);
  }

  changeLanguageCodeElement(languageCode: LanguageCode) {
    const translatedLanguageCode = this._model.getLanguageCode();

    if (translatedLanguageCode === languageCode) return;

    this._model.setLanguageCode(languageCode);
    this._view.deleteClosedCaptionElement();
    this.translatedAndRender();
  }

  deleteTranslatedElement() {
    this._view.deleteClosedCaptionElement();
  }
}

export default Controller;
