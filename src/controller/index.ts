import View from "../view";
import Model from "../model";

class Controller {
  _view: View;
  _model: Model;

  constructor(view: View, model: Model) {
    this._view = view;
    this._model = model;
  }

  translatedAndRender() {
    this._view.setTargetOfTranslatingElement();

    const textContent = this._view.getTextContent();

    if (!textContent) return;

    this._model.getTranslatedText(
      textContent,
      this._view.render.bind(this._view)
    );
  }

  deleteTranslatedElement() {
    this._view.deleteClosedCaptionElement();
  }
}

export default Controller;
