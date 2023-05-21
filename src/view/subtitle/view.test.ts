import View from ".";

const ViewInstance = new View("#target");

describe("View", () => {
  beforeEach(() => {
    // Clear the DOM
    document.body.innerHTML = "";

    ViewInstance.setTargetOfTranslatingElement();
  });

  describe("Test translating target element", () => {
    test("The default target of translating element should be null", () => {
      const targetOfTranslatingElement =
        ViewInstance.getTargetOfTranslatingElement();

      expect(targetOfTranslatingElement).toBe(null);
    });

    test("The target of translating element should be set to HTMLDivElement", () => {
      document.body.innerHTML = `<div id="target"></div>`;

      ViewInstance.setTargetOfTranslatingElement();

      const targetOfTranslatingElement =
        ViewInstance.getTargetOfTranslatingElement();

      expect(targetOfTranslatingElement).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe("Test text content of translating element", () => {
    test("The text content should be undefined when target translating element is null", () => {
      const textContent = ViewInstance.getTextContent();

      expect(textContent).toBe(undefined);
    });

    test("The text content should be set to the target of translating element", () => {
      document.body.innerHTML = `<div id="target">Hello world!</div>`;

      ViewInstance.setTargetOfTranslatingElement();

      const textContent = ViewInstance.getTextContent();

      expect(textContent).toBe("Hello world!");
    });

    test("The text content return only one when translating element dom only one", () => {
      document.body.innerHTML = `
        <div id="target">
          <span>Hello world!</span>
        </div>
      `;

      ViewInstance.setTargetOfTranslatingElement();

      const textContent = ViewInstance.getTextContent();

      expect(textContent).toBe("Hello world!");
    });

    test("The a lot of text content should be set to the target of translating element", () => {
      document.body.innerHTML = `
        <div id="target">
          <div>Hello</div>
          <div>takhyun</div>
          <div>have a good day</div>
        </div>
      `;

      ViewInstance.setTargetOfTranslatingElement();

      const textContent = ViewInstance.getTextContent();

      expect(textContent).toBe("Hello takhyun have a good day");
    });

    test("The text content should be return without text-track element text", () => {
      document.body.innerHTML = `
        <div id="target">
          <div>Hello</div>
          <div>takhyun</div>
          <div id="text-track">have a good day</div>
        </div>
      `;

      ViewInstance.setTargetOfTranslatingElement();

      const textContent = ViewInstance.getTextContent();

      expect(textContent).toBe("Hello takhyun");
    });
  });

  describe("Test closed caption element rendering", () => {
    test("The closed caption translate render null when the target of translating element is null", () => {
      ViewInstance.render("Hello world!", 20);

      const closedCaptionElement = ViewInstance.getTranslatedElement();

      expect(closedCaptionElement).toBe(null);
    });

    test("The closed caption translate render should be set to the target of translating element", () => {
      document.body.innerHTML = `<div id="target"></div>`;

      ViewInstance.setTargetOfTranslatingElement();

      ViewInstance.render("Hello world!", 20);

      const closedCaptionElement = ViewInstance.getTranslatedElement();

      expect(closedCaptionElement).toBeInstanceOf(HTMLDivElement);
    });

    test("The closed caption remove method should be early return when the target of translating element is null", () => {
      const closedCaptionElement = ViewInstance.getTranslatedElement();

      expect(closedCaptionElement).toBe(null);

      ViewInstance.deleteClosedCaptionElement();

      expect(closedCaptionElement).toBe(null);
    });

    test("The closed caption render should be remove from the target of translating element", () => {
      document.body.innerHTML = `<div id="target"></div>`;

      ViewInstance.setTargetOfTranslatingElement();
      ViewInstance.render("Hello world!", 20);
      ViewInstance.deleteClosedCaptionElement();

      const closedCaptionElement = ViewInstance.getTranslatedElement();

      expect(closedCaptionElement).toBe(null);
    });

    test("The closed caption font size method early return when the target of translating element is null", () => {
      ViewInstance.setClosedCaptionFontSize(20);

      const closedCaptionElement = ViewInstance.getTranslatedElement();

      expect(closedCaptionElement).toBe(null);
    });
  });

  describe("Test closed caption element style", () => {
    test("The closed caption style should be set to the target of translating element", () => {
      document.body.innerHTML = `<div id="target"></div>`;

      const FONT_SIZE = 20;

      ViewInstance.setTargetOfTranslatingElement();
      ViewInstance.render("Hello world!", FONT_SIZE);

      const closedCaptionElement =
        ViewInstance.getTranslatedElement() as HTMLDivElement;

      expect(closedCaptionElement.style.marginTop).toBe("10px");
      expect(closedCaptionElement.style.fontSize).toBe(`${FONT_SIZE}px`);
      expect(closedCaptionElement.style.color).toBe("rgb(255, 255, 255)");
      expect(closedCaptionElement.style.backgroundColor).toBe(
        "rgba(0, 0, 0, 0.8)"
      );
    });

    test("The closed caption font size should be set to the target of translating element", () => {
      document.body.innerHTML = `<div id="target"></div>`;

      const FONT_SIZE = 20;

      ViewInstance.setTargetOfTranslatingElement();
      ViewInstance.render("Hello world!", FONT_SIZE);
      ViewInstance.setClosedCaptionFontSize(FONT_SIZE);

      const closedCaptionElement =
        ViewInstance.getTranslatedElement() as HTMLDivElement;

      expect(closedCaptionElement.style.fontSize).toBe(`${FONT_SIZE}px`);

      ViewInstance.setClosedCaptionFontSize(FONT_SIZE * 2);

      expect(closedCaptionElement.style.fontSize).toBe(`${FONT_SIZE * 2}px`);
    });
  });
});
