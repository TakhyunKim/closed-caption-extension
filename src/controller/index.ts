import View from "../view";
import Model from "../model";

import { sendMessageToBackgroundTranslatingText } from "../api/message";
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

    if (!textContent || isSameTargetElementAndText) return;

    const deletePrevElementEndRender = (translatedText: string) => {
      // delete prev closed caption element
      this._view.deleteClosedCaptionElement();
      this._model.setTargetOfTranslatingText(textContent);

      const fontSize = this._model.getFontSize();

      this._view.render.call(this._view, translatedText, fontSize);
    };

    sendMessageToBackgroundTranslatingText(
      textContent,
      deletePrevElementEndRender
    );
  }

  changeFontSizeRangeElement(value: number) {
    this._model.setFontSize(value);
    this._view.setClosedCaptionFontSize(value);
  }

  deleteTranslatedElement() {
    this._view.deleteClosedCaptionElement();
  }
}

export default Controller;
