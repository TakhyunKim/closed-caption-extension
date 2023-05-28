import Storage from "./Storage";

import { SWITCH_STORAGE_KEY, FONT_SIZE_STORAGE_KEY } from "../../common/const";

const getSwitchValueInStorage = async () => {
  const { isChecked } = await Storage.getStorageValue<boolean | unknown>(
    SWITCH_STORAGE_KEY
  );

  if (typeof isChecked !== "boolean") return;

  return isChecked;
};

const setSwitchValueInStorage = async (isChecked: boolean) => {
  await Storage.setStorageValue(SWITCH_STORAGE_KEY, isChecked);
};

const getFontSizeValueInStorage = async () => {
  const { fontSize } = await Storage.getStorageValue<number | unknown>(
    FONT_SIZE_STORAGE_KEY
  );

  if (typeof fontSize !== "number") return;

  return fontSize;
};

const setFontSizeValueInStorage = async (fontSize: number) => {
  await Storage.setStorageValue(FONT_SIZE_STORAGE_KEY, fontSize);
};

const getTranslatedTargetLanguageInStorage = async () => {
  const { language } = await Storage.getStorageValue<string | unknown>(
    "language"
  );

  if (typeof language !== "string") return;

  return language;
};

const setTranslatedTargetLanguageInStorage = async (language: string) => {
  await Storage.setStorageValue("language", language);
};

const getTextColorInStorage = async () => {
  const { textColor } = await Storage.getStorageValue<string | unknown>(
    "textColor"
  );

  if (typeof textColor !== "string") return;

  return textColor;
};

const setTextColorInStorage = async (textColor: string) => {
  await Storage.setStorageValue("textColor", textColor);
};

export {
  getSwitchValueInStorage,
  setSwitchValueInStorage,
  getFontSizeValueInStorage,
  setFontSizeValueInStorage,
  getTranslatedTargetLanguageInStorage,
  setTranslatedTargetLanguageInStorage,
  getTextColorInStorage,
  setTextColorInStorage,
};
