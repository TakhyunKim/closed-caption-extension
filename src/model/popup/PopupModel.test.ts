import PopupModel from "./PopupModel";

const PopupModelInstance = new PopupModel();

describe("Model", () => {
  test("The default font size should be set 25", async () => {
    const fontSize = await PopupModelInstance.getFontSize();

    expect(fontSize).toBe(25);
  });

  test("The font size should be set 30", async () => {
    await PopupModelInstance.setFontSize(30);

    const fontSize = await PopupModelInstance.getFontSize();

    expect(fontSize).toBe(30);
  });

  test("The default switch value should be set false", async () => {
    const switchValue = await PopupModelInstance.getSwitchValue();

    expect(switchValue).toBe(false);
  });

  test("The default switch value should be set true", async () => {
    await PopupModelInstance.setSwitchValue(true);

    const switchValue = await PopupModelInstance.getSwitchValue();

    expect(switchValue).toBe(true);
  });

  test("The default language code value should be set ko", async () => {
    const languageCode = await PopupModelInstance.getLanguageCode();

    expect(languageCode).toBe("ko");
  });

  test("The language code value should be set en", async () => {
    await PopupModelInstance.setLanguageCode("en");

    const languageCode = await PopupModelInstance.getLanguageCode();

    expect(languageCode).toBe("en");
  });
});
