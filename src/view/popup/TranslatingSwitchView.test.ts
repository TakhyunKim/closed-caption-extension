import TranslatingSwitchView from "./TranslatingSwitchView";

describe("Translating Switch View Test", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <label class="switch">
        <input id="translate" type="checkbox" />
        <span class="slider round"></span>
      </label>  `;
  });

  it("The translating switch view should be set to the translate id element", () => {
    const TranslatingSwitchViewInstance = new TranslatingSwitchView();
    const SwitchViewElement =
      TranslatingSwitchViewInstance.getTranslatingSwitchElement();
    const TranslatingElement = document.getElementById("translate");

    expect(SwitchViewElement).toBe(TranslatingElement);
  });

  it("The translating switch view default should be false", () => {
    const TranslatingSwitchViewInstance = new TranslatingSwitchView();
    const switchValue =
      TranslatingSwitchViewInstance.getTranslatingSwitchValue();

    expect(switchValue).toBe(false);
  });

  it("The translating switch view should be change true", () => {
    const TranslatingSwitchViewInstance = new TranslatingSwitchView();

    TranslatingSwitchViewInstance.setTranslatingSwitchValue(true);

    const switchValue =
      TranslatingSwitchViewInstance.getTranslatingSwitchValue();

    expect(switchValue).toBe(true);
  });
});
