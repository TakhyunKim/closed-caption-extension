import View from "../../view/subtitle";
import Model from "../../model/subtitle";
import Controller from ".";

const ViewInstance = new View("#target");
const ModelInstance = new Model();
const ControllerInstance = new Controller(ViewInstance, ModelInstance);

describe("Controller", () => {
  beforeEach(() => {
    // Clear the DOM
    document.body.innerHTML = "";

    ViewInstance.setTargetOfTranslatingElement();
  });

  test("The Comparison text function should be return false when first render", () => {
    const isComparisonText =
      ControllerInstance.compareIsSameTargetOfTranslatingText();

    expect(isComparisonText).toBe(false);
  });

  test("The Comparison text and checking translated element function should be return null when first render", () => {
    const isComparisonText =
      ControllerInstance.checkIsSameTargetElementAndText();

    expect(isComparisonText).toBe(null);
  });

  test("The font size should be 25 after changing font size controller method running", () => {
    document.body.innerHTML = `<div id="target">Hello world!</div>`;

    const FONT_SIZE = 25;
    const TEXT_COLOR = "#111111";

    ViewInstance.setTargetOfTranslatingElement();
    // Set Mock View render method
    ViewInstance.render("Hello world!", FONT_SIZE, TEXT_COLOR);
    ControllerInstance.changeFontSizeRangeElement(FONT_SIZE);

    const fontSize = ModelInstance.getFontSize();
    const closedCaptionElement =
      ViewInstance.getTranslatedElement() as HTMLDivElement;
    const closedCaptionElementFontSize = closedCaptionElement.style.fontSize;

    expect(fontSize).toBe(FONT_SIZE);
    expect(closedCaptionElementFontSize).toBe(`${FONT_SIZE}px`);
  });

  test("The Closed Caption element should be null after deleteTranslatedElement method running", () => {
    document.body.innerHTML = `<div id="target">Hello world!</div>`;

    const FONT_SIZE = 25;
    const TEXT_COLOR = "#111111";

    ViewInstance.setTargetOfTranslatingElement();
    // Set Mock View render method
    ViewInstance.render("Hello world!", FONT_SIZE, TEXT_COLOR);
    ControllerInstance.deleteTranslatedElement();

    const closedCaptionElement = ViewInstance.getTranslatedElement();

    expect(closedCaptionElement).toBe(null);
  });
});
