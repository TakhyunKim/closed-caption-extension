import LanguageSelectView from "./LanguageSelectorView";

describe("Language Selector View Test", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="language-controller" class="language_controller hidden">
        <div data-lang="en" class="language_wrapper">
          <p>English</p>
          <svg
            class="hidden"
            fill="#ffffff"
            height="15"
            viewBox="0 0 24 24"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
              fill="#ffffff"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div data-lang="ko" class="language_wrapper">
          <p>Korean</p>
          <svg
            class="hidden"
            height="15"
            viewBox="0 0 24 24"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
              fill="#ffffff"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div data-lang="ja" class="language_wrapper">
          <p>Japanese</p>
          <svg
            class="hidden"
            height="15"
            viewBox="0 0 24 24"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
              fill="#ffffff"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div data-lang="zh" class="language_wrapper">
          <p>Chinese</p>
          <svg
            class="hidden"
            height="15"
            viewBox="0 0 24 24"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
              fill="#ffffff"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div data-lang="de" class="language_wrapper">
          <p>German</p>
          <svg
            class="hidden"
            height="15"
            viewBox="0 0 24 24"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
              fill="#ffffff"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div data-lang="es" class="language_wrapper">
          <p>Spanish</p>
          <svg
            class="hidden"
            height="15"
            viewBox="0 0 24 24"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
              fill="#ffffff"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    `;
  });

  it("The language selector should be set hidden element and language controller element", () => {
    const LanguageSelectorViewInstance = new LanguageSelectView();

    const languageSelectorElement = document.getElementById(
      "language-controller"
    ) as HTMLDivElement;
    const selectedLanguageElement = document.querySelector(".selected");
    const languageSelectorElementOfInstance =
      LanguageSelectorViewInstance.getLanguageSelector();

    /** The default state is No Element selected */
    expect(selectedLanguageElement).toBeNull();
    expect(languageSelectorElement).toBe(languageSelectorElementOfInstance);
  });

  it("The target language should have been checked when you first updated", () => {
    const DEFAULT_LANGUAGE = "ko";

    const LanguageSelectorViewInstance = new LanguageSelectView();

    LanguageSelectorViewInstance.updateLanguage(DEFAULT_LANGUAGE);

    const selectedLanguageElement = document.querySelector(".selected");
    const targetLanguageElement = document.querySelector(
      `[data-lang="${DEFAULT_LANGUAGE}"]`
    ) as HTMLDivElement;
    const targetLanguageSvgElement = targetLanguageElement.children[1];

    expect(selectedLanguageElement).toBe(targetLanguageSvgElement);
  });

  it("Checking when to change from the default KO language to the EN language and DE", () => {
    const DEFAULT_LANGUAGE = "ko";
    const EN_LANGUAGE = "en";
    const DE_LANGUAGE = "de";

    const LanguageSelectorViewInstance = new LanguageSelectView();

    /** Check value for initial KO */
    LanguageSelectorViewInstance.updateLanguage(DEFAULT_LANGUAGE);

    const defaultSelectedLanguageElement = document.querySelector(".selected");
    const defaultTargetLanguageElement = document.querySelector(
      `[data-lang="${DEFAULT_LANGUAGE}"]`
    ) as HTMLDivElement;
    const defaultTargetLanguageSvgElement =
      defaultTargetLanguageElement.children[1];

    expect(defaultTargetLanguageSvgElement).toBe(
      defaultSelectedLanguageElement
    );

    /** Check value for changed EN */
    LanguageSelectorViewInstance.updateLanguage(EN_LANGUAGE);

    const selectedLanguageElementOfChangedEnValue =
      document.querySelector(".selected");
    const changedTargetEnLanguageElement = document.querySelector(
      `[data-lang="${EN_LANGUAGE}"]`
    ) as HTMLDivElement;
    const changedTargetEnLanguageSvgElement =
      changedTargetEnLanguageElement.children[1];

    expect(changedTargetEnLanguageSvgElement).toBe(
      selectedLanguageElementOfChangedEnValue
    );

    LanguageSelectorViewInstance.updateLanguage(DE_LANGUAGE);

    const selectedLanguageElements = document.querySelectorAll(".selected");
    const selectedLanguageElementOfChangedDeValue =
      document.querySelector(".selected");
    const changedTargetDeLanguageElement = document.querySelector(
      `[data-lang="${DE_LANGUAGE}"]`
    ) as HTMLDivElement;
    const changedTargetDeLanguageSvgElement =
      changedTargetDeLanguageElement.children[1];

    expect(selectedLanguageElements.length).toBe(1);
    expect(changedTargetDeLanguageSvgElement).toBe(
      selectedLanguageElementOfChangedDeValue
    );
  });
});
