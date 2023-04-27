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
      LanguageSelectorButtonViewInstance.getLanguageSelectorButtonElement();

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
      LanguageSelectorButtonViewInstance.getLanguageSelectorButtonText();

    expect(languageSelectorButtonValue).toBe("Korean");
  });

  it("The language selector button should be another language when button text changed", () => {
    const LanguageSelectorButtonViewInstance = new LanguageSelectorButtonView();

    const LANGUAGES: LanguageCode[] = ["de", "en", "es", "ja", "ko", "zh"];
    const LANGUAGES_MAP: Map<LanguageCode, string> = new Map([
      ["de", "German"],
      ["ko", "Korean"],
      ["en", "English"],
      ["zh", "Chinese"],
      ["es", "Spanish"],
      ["de", "German"],
      ["ja", "Japanese"],
    ]);

    LANGUAGES.forEach((language) => {
      LanguageSelectorButtonViewInstance.setLanguageSelectorButtonText(
        language
      );

      const currentLanguageSelectorButtonValue =
        LanguageSelectorButtonViewInstance.getLanguageSelectorButtonText();
      const currentFullNameLanguage = LANGUAGES_MAP.get(language);

      expect(currentLanguageSelectorButtonValue).toBe(currentFullNameLanguage);
    });
  });
});
