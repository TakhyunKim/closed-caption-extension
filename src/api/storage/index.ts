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

export {
  getSwitchValueInStorage,
  setSwitchValueInStorage,
  getFontSizeValueInStorage,
  setFontSizeValueInStorage,
};
