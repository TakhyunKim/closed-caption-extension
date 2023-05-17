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
    const SwitchViewElement = TranslatingSwitchViewInstance.getElement();
    const TranslatingElement = document.getElementById("translate");

    expect(SwitchViewElement).toBe(TranslatingElement);
  });

  it("The translating switch view default should be false", () => {
    const TranslatingSwitchViewInstance = new TranslatingSwitchView();
    const switchValue = TranslatingSwitchViewInstance.getValue();

    expect(switchValue).toBe(false);
  });

  it("The translating switch view should be change true", () => {
    const TranslatingSwitchViewInstance = new TranslatingSwitchView();

    TranslatingSwitchViewInstance.setValue(true);

    const switchValue = TranslatingSwitchViewInstance.getValue();

    expect(switchValue).toBe(true);
  });
});
