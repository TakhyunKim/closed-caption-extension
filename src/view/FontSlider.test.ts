import FontSlider from "./FontSlider";

const DEFAULT_RANGE_VALUE = "20";
const DEFAULT_RANGE_MIN = "10";
const DEFAULT_RANGE_MAX = "30";

document.body.innerHTML = `
  <input type="range" id="font-range" min=${DEFAULT_RANGE_MIN} max=${DEFAULT_RANGE_MAX} value=${DEFAULT_RANGE_VALUE} />
`;

const FontRangeElement = document.getElementById(
  "font-range"
) as HTMLInputElement;

const FontSliderInstance = new FontSlider(FontRangeElement);

describe("Font Slider", () => {
  beforeEach(() => {
    // Set Default Font Range Element
    document.body.innerHTML = `
      <input type="range" id="font-range" min=${DEFAULT_RANGE_MIN} max=${DEFAULT_RANGE_MAX} value=${DEFAULT_RANGE_VALUE} />
    `;

    const FontRangeElement = document.getElementById(
      "font-range"
    ) as HTMLInputElement;

    FontSliderInstance.setRangeElement(FontRangeElement);
  });

  describe("Test Range Value", () => {
    test("The font slider element should be set to the target of translating element", () => {
      const CHANGED_RANGE_VALUE = "15";

      document.body.innerHTML = `
        <input type="range" id="font-range" min=${DEFAULT_RANGE_MIN} max=${DEFAULT_RANGE_MAX} value=${CHANGED_RANGE_VALUE} />
      `;

      const FontRangeElement = document.getElementById(
        "font-range"
      ) as HTMLInputElement;

      FontSliderInstance.setRangeElement(FontRangeElement);

      const changedFontRangeElement = FontSliderInstance.getRangeElement();

      expect(changedFontRangeElement).toBe(FontRangeElement);
      expect(FontSliderInstance.getRangeValue()).toBe(CHANGED_RANGE_VALUE);
    });

    test('The font slider element value should be "20"', () => {
      expect(FontSliderInstance.getRangeValue()).toBe(DEFAULT_RANGE_VALUE);
    });

    test('The font slider element max value should be "30"', () => {
      expect(FontSliderInstance.getRangeElement().max).toBe(DEFAULT_RANGE_MAX);
    });

    test('The font slider element min value should be "10"', () => {
      expect(FontSliderInstance.getRangeElement().min).toBe(DEFAULT_RANGE_MIN);
    });

    test("The font slider element style should be set to the target of translating element", () => {
      const FONT_SIZE = "30";
      const fontSize = FontSliderInstance.getRangeValue();

      expect(fontSize).toBe(DEFAULT_RANGE_VALUE);

      FontSliderInstance.setRangeValue(FONT_SIZE);

      const changedFontSize = FontSliderInstance.getRangeValue();

      expect(changedFontSize).toBe(FONT_SIZE);
    });
  });

  describe("Test Font slider style", () => {
    test("The font slider element style should be set default value to the target of translating element", () => {
      FontSliderInstance.setFontRangeStyle(Number(DEFAULT_RANGE_VALUE));

      const FontSliderElement = FontSliderInstance.getRangeElement();

      expect(FontSliderElement.style.backgroundSize).toBe("50% 100%");
    });

    test("The font slider element style should be set 25 value to the target of translating element", () => {
      const CHANGED_RANGE_VALUE = "25";

      FontSliderInstance.setFontRangeStyle(Number(DEFAULT_RANGE_VALUE));

      const FontSliderElement = FontSliderInstance.getRangeElement();

      expect(FontSliderElement.style.backgroundSize).toBe("50% 100%");

      FontSliderInstance.setFontRangeStyle(Number(CHANGED_RANGE_VALUE));

      expect(FontSliderElement.style.backgroundSize).toBe("75% 100%");
    });
  });
});
