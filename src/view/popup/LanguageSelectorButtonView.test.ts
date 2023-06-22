import LanguageSelectorButtonView from "./LanguageSelectorButtonView";

import type { LanguageCode } from "../../common/language.types";

describe("Language Selector Button View Test", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="language-select-button" class="language_button">Korean</button>
    `;
  });

  it("The language selector button should be set the language-selector-button id attribute", () => {
    const LanguageSelectorButtonViewInstance = new LanguageSelectorButtonView();
    const LanguageSelectorButtonViewElement =
      LanguageSelectorButtonViewInstance.getElement();

    const LanguageSelectorButtonElement = document.getElementById(
      "language-select-button"
    ) as HTMLButtonElement;

    expect(LanguageSelectorButtonViewElement).toBe(
      LanguageSelectorButtonElement
    );
  });

  it('The language selector button default value should be "Korean"', () => {
    const LanguageSelectorButtonViewInstance = new LanguageSelectorButtonView();
    const languageSelectorButtonValue =
      LanguageSelectorButtonViewInstance.getValue();

    expect(languageSelectorButtonValue).toBe("Korean");
  });

  it("The language selector button should be another language when button text changed", () => {
    const LanguageSelectorButtonViewInstance = new LanguageSelectorButtonView();

    const LANGUAGES: LanguageCode[] = [
      "de",
      "en",
      "es",
      "ja",
      "ko",
      "zh",
      "ar",
      "be",
      "ca",
      "bg",
      "hr",
      "cs",
      "da",
      "nl",
      "fil",
      "fi",
      "fr",
      "el",
      "th",
      "uk",
      "vi",
      "tr",
    ];
    const LANGUAGES_MAP: Map<LanguageCode, string> = new Map([
      ["de", "German"],
      ["ko", "Korean"],
      ["en", "English"],
      ["zh", "Chinese"],
      ["es", "Spanish"],
      ["de", "German"],
      ["ja", "Japanese"],
      ["ja", "Japanese"],
      ["ar", "Arabic"],
      ["be", "Belarusian"],
      ["ca", "Catalan"],
      ["bg", "Bulgarian"],
      ["hr", "Croatian"],
      ["cs", "Czech"],
      ["da", "Danish"],
      ["nl", "Dutch"],
      ["fil", "Filipino"],
      ["fi", "Finnish"],
      ["fr", "French"],
      ["el", "Greek"],
      ["th", "Thai"],
      ["uk", "Ukrainian"],
      ["vi", "Vietnamese"],
      ["tr", "Turkish"],
    ]);

    LANGUAGES.forEach((language) => {
      LanguageSelectorButtonViewInstance.setValue(language);

      const currentLanguageSelectorButtonValue =
        LanguageSelectorButtonViewInstance.getValue();
      const currentFullNameLanguage = LANGUAGES_MAP.get(language);

      expect(currentLanguageSelectorButtonValue).toBe(currentFullNameLanguage);
    });
  });
});
