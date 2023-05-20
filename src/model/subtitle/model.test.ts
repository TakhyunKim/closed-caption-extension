import Model from ".";

const ModelInstance = new Model();

describe("Model", () => {
  test("The default font size should be set to 25", () => {
    const fontSize = ModelInstance.getFontSize();

    expect(fontSize).toBe(25);
  });

  test("The default target of translating text should be empty string", () => {
    const targetOfTranslatingText = ModelInstance.getTargetOfTranslatingText();

    expect(targetOfTranslatingText).toBe("");
  });

  test("The font size should be set to 30", () => {
    ModelInstance.setFontSize(30);

    const fontSize = ModelInstance.getFontSize();

    expect(fontSize).toBe(30);
  });

  test("The target of translating text should be set to 'Hello'", () => {
    ModelInstance.setTargetOfTranslatingText("Hello");

    const targetOfTranslatingText = ModelInstance.getTargetOfTranslatingText();

    expect(targetOfTranslatingText).toBe("Hello");
  });
});
