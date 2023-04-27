class TranslatingSwitchView {
  private readonly translatingSwitchElement: HTMLInputElement;

  constructor() {
    this.translatingSwitchElement = document.getElementById(
      "translate"
    ) as HTMLInputElement;
  }

  public getTranslatingSwitchElement = () => {
    return this.translatingSwitchElement;
  };

  public getTranslatingSwitchValue = () => {
    return this.translatingSwitchElement.checked;
  };

  public setTranslatingSwitchValue = (value: boolean) => {
    this.translatingSwitchElement.checked = value;
  };
}

export default TranslatingSwitchView;
