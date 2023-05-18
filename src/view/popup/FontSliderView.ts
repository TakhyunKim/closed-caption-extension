import { PopupStyleView } from "./PopupView";

class FontSliderView extends PopupStyleView {
  protected readonly element: HTMLInputElement;

  constructor() {
    super();

    this.element = document.getElementById(
      "font-size-range"
    ) as HTMLInputElement;
  }

  public getElement = () => {
    return this.element;
  };

  public getValue = () => {
    return this.element.value;
  };

  public updateElement = (value: number) => {
    this.setElementStyle(value);
    this.setValue(value.toString());
  };

  private setValue = (value: string) => {
    this.element.value = value;
  };

  protected setElementStyle = (value: number) => {
    const min = Number(this.element.min);
    const max = Number(this.element.max);

    this.element.style.backgroundSize =
      ((value - min) * 100) / (max - min) + "% 100%";
  };
}

export default FontSliderView;
