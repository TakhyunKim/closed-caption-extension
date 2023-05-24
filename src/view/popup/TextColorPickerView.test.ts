import TextColorPickerView from "./TextColorPickerView";

describe("Text Color Picker View Test", () => {
  beforeEach(() => {
    document.body.innerHTML = `<input id="text-color-picker" type="color" />`;
  });

  it("The text color picker view should be set to the text-color-picker id element", () => {
    const TextColorPickerViewInstance = new TextColorPickerView();
    const TextColorPickerElement = TextColorPickerViewInstance.getElement();
    const TranslatingElement = document.getElementById("text-color-picker");

    expect(TextColorPickerElement).toBe(TranslatingElement);
  });

  it("The text color picker view default should be #000000", () => {
    const TextColorPickerViewInstance = new TextColorPickerView();
    const textColor = TextColorPickerViewInstance.getValue();

    expect(textColor).toBe("#000000");
  });

  it("The text color picker view should be change #111111", () => {
    const TextColorPickerViewInstance = new TextColorPickerView();

    TextColorPickerViewInstance.setValue("#111111");

    const textColor = TextColorPickerViewInstance.getValue();

    expect(textColor).toBe("#111111");
  });
});
