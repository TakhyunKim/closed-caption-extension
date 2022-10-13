import type View from "../view";
import type Model from "../model";

class Controller {
  _view: View;
  _model: Model;

  constructor(view: View, model: Model) {
    this._view = view;
    this._model = model;
  }

  init() {
    const textContent = this._view.getTextContent();

    if (!textContent) return;

    this._model.getTranslatedText(
      textContent,
      this._view.render.bind(this._view)
    );
  }
}

export default Controller;
