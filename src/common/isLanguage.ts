import type { LanguageCode } from "./language.types";

export const isLanguage = (language: string): language is LanguageCode => {
  return ["en", "ko", "zh", "es", "ja", "de"].includes(language);
};
