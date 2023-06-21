import type { LanguageCode } from "./language.types";

export const isLanguage = (language: string): language is LanguageCode => {
  return [
    "en",
    "ko",
    "zh",
    "es",
    "ja",
    "de",
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
  ].includes(language);
};
