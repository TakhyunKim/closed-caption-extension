class FontSliderView {
  private readonly sliderElement: HTMLInputElement;

  constructor() {
    this.sliderElement = document.getElementById(
      "font-range"
    ) as HTMLInputElement;
  }

  private setFontSliderValue = (value: string) => {
    this.sliderElement.value = value;
  };

  private setFontSliderStyle = (value: number) => {
    const min = Number(this.sliderElement.min);
    const max = Number(this.sliderElement.max);

    this.sliderElement.style.backgroundSize =
      ((value - min) * 100) / (max - min) + "% 100%";
  };

  public getFontSliderElement = () => {
    return this.sliderElement;
  };

  public getFontSliderValue = () => {
    return this.sliderElement.value;
  };

  public updateFontSlider = (value: number) => {
    this.setFontSliderStyle(value);
    this.setFontSliderValue(value.toString());
  };
}

export default FontSliderView;
