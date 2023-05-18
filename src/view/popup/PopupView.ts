export abstract class PopupView {
  /** Assign a target DOM Element */
  protected abstract readonly element: HTMLElement;

  /** Get the value to use for the current DOM Element */
  abstract getValue(): unknown;
  /** Assign a value to use for the current DOM Element */
  abstract setValue(value: unknown): void;
  /** Get the DOM element currently in use */
  abstract getElement(): HTMLElement;
}

export abstract class PopupStyleView {
  /** Assign a target DOM Element */
  protected abstract readonly element: HTMLElement;

  /** Get the DOM element currently in use */
  abstract getElement(): HTMLElement;
  /** style, and include the necessary logic on update */
  abstract updateElement(value: unknown): void;

  /** Configure the styling logic */
  protected abstract setElementStyle(value: unknown): void;
}
