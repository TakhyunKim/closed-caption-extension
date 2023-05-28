import { PopupView } from "./PopupView";

class TextColorPickerView extends PopupView {
  protected readonly element: HTMLInputElement;

  constructor() {
    super();

    this.element = document.getElementById(
      "text-color-picker"
    ) as HTMLInputElement;
  }

  public getElement = () => {
    return this.element;
  };

  public getValue = () => {
    return this.element.value;
  };

  public setValue = (value: string) => {
    this.element.value = value;
  };
}

export default TextColorPickerView;
