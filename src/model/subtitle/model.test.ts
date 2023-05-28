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

  test("The default text color should be #111111", async () => {
    const textColor = ModelInstance.getTextColor();

    expect(textColor).toBe("#111111");
  });

  test("The text color value should be set #000000", async () => {
    ModelInstance.setTextColor("#000000");

    const textColor = ModelInstance.getTextColor();

    expect(textColor).toBe("#000000");
  });

  test("The default language code value should be set ko", async () => {
    const languageCode = ModelInstance.getLanguageCode();

    expect(languageCode).toBe("ko");
  });

  test("The language code value should be set en", async () => {
    ModelInstance.setLanguageCode("en");

    const languageCode = ModelInstance.getLanguageCode();

    expect(languageCode).toBe("en");
  });
});
