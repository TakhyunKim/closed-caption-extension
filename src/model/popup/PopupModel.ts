import {
  setSwitchValueInStorage,
  getSwitchValueInStorage,
  setFontSizeValueInStorage,
  getFontSizeValueInStorage,
  setTranslatedTargetLanguageInStorage,
  getTranslatedTargetLanguageInStorage,
} from "../../api/storage";
import { isLanguage } from "../../common/isLanguage";

import type { LanguageCode } from "../../common/language.types";

class PopupModel {
  public setFontSize = async (fontSize: number) => {
    await setFontSizeValueInStorage(fontSize);
  };

  public getFontSize = async () => {
    const fontSize = (await getFontSizeValueInStorage()) ?? 25;

    return fontSize;
  };

  public setSwitchValue = async (value: boolean) => {
    await setSwitchValueInStorage(value);
  };

  public getSwitchValue = async () => {
    const isChecked = (await getSwitchValueInStorage()) ?? false;

    return isChecked;
  };

  public setLanguageCode = async (languageCode: LanguageCode) => {
    await setTranslatedTargetLanguageInStorage(languageCode);
  };

  public getLanguageCode = async () => {
    const language = (await getTranslatedTargetLanguageInStorage()) ?? "ko";
    const languageCode = isLanguage(language) ? language : "ko";

    return languageCode;
  };
}

export default PopupModel;
