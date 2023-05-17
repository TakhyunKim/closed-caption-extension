import { PopupView } from "./PopupView";

class TranslatingSwitchView extends PopupView {
  protected readonly element: HTMLInputElement;

  constructor() {
    super();

    this.element = document.getElementById("translate") as HTMLInputElement;
  }

  public getElement = () => {
    return this.element;
  };

  public getValue = () => {
    return this.element.checked;
  };

  public setValue = (value: boolean) => {
    this.element.checked = value;
  };
}

export default TranslatingSwitchView;
