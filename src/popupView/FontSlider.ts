class FontSlider {
  sliderElement: HTMLInputElement;

  constructor(sliderElement: HTMLInputElement) {
    this.sliderElement = sliderElement;
  }

  setRangeElement(element: HTMLInputElement) {
    this.sliderElement = element;
  }

  getRangeElement() {
    return this.sliderElement;
  }

  getRangeValue() {
    return this.sliderElement.value;
  }

  setRangeValue(value: string) {
    this.sliderElement.value = value;
  }

  setFontRangeStyle() {
    const min = Number(this.sliderElement.min);
    const max = Number(this.sliderElement.max);
    const rangeValue = Number(this.sliderElement.value);

    this.sliderElement.style.backgroundSize =
      ((rangeValue - min) * 100) / (max - min) + "% 100%";
  }
}

export default FontSlider;
