import FontSliderView from "./FontSliderView";

const DEFAULT_RANGE_VALUE = "20";
const DEFAULT_RANGE_MIN = "10";
const DEFAULT_RANGE_MAX = "30";

describe("Font Slider View Test", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input type="range" id="font-size-range" min=${DEFAULT_RANGE_MIN} max=${DEFAULT_RANGE_MAX} value=${DEFAULT_RANGE_VALUE} />
    `;
  });

  it("The font slider view should be set to the target of translating element", () => {
    const FontSliderViewInstance = new FontSliderView();
    const currentFontSliderValue = FontSliderViewInstance.getFontSliderValue();
    const FontSliderViewElement = FontSliderViewInstance.getFontSliderElement();

    const FontRangeElement = document.getElementById(
      "font-size-range"
    ) as HTMLInputElement;

    expect(FontRangeElement).toBe(FontSliderViewElement);
    expect(currentFontSliderValue).toBe(DEFAULT_RANGE_VALUE);
  });

  it('The font slider element value should be "20"', () => {
    const FontSliderViewInstance = new FontSliderView();
    const FontSliderElement = FontSliderViewInstance.getFontSliderElement();

    expect(FontSliderElement.value).toBe(DEFAULT_RANGE_VALUE);
  });

  it('The font slider element max value should be "30"', () => {
    const FontSliderViewInstance = new FontSliderView();
    const FontSliderElement = FontSliderViewInstance.getFontSliderElement();

    expect(FontSliderElement.max).toBe(DEFAULT_RANGE_MAX);
  });

  it('The font slider element min value should be "10"', () => {
    const FontSliderViewInstance = new FontSliderView();
    const FontSliderElement = FontSliderViewInstance.getFontSliderElement();

    expect(FontSliderElement.min).toBe(DEFAULT_RANGE_MIN);
  });

  it("The font slider element style and value should be set default value to the target of translating element", () => {
    const FontSliderViewInstance = new FontSliderView();

    FontSliderViewInstance.updateFontSlider(Number(DEFAULT_RANGE_VALUE));

    const FontSliderValue = FontSliderViewInstance.getFontSliderValue();
    const FontSliderElement = FontSliderViewInstance.getFontSliderElement();

    expect(FontSliderValue).toBe(DEFAULT_RANGE_VALUE);
    expect(FontSliderElement.style.backgroundSize).toBe("50% 100%");
  });

  it("The font slider element style and value should be set 25 value to the target of translating element", () => {
    const CHANGED_RANGE_VALUE = "25";

    const FontSliderViewInstance = new FontSliderView();

    FontSliderViewInstance.updateFontSlider(Number(CHANGED_RANGE_VALUE));

    const FontSliderValue = FontSliderViewInstance.getFontSliderValue();
    const FontSliderElement = FontSliderViewInstance.getFontSliderElement();

    expect(FontSliderValue).toBe(CHANGED_RANGE_VALUE);
    expect(FontSliderElement.style.backgroundSize).toBe("75% 100%");
  });
});
