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
  private fontSize: number;
  private switchValue: boolean;
  private languageCode: LanguageCode;

  constructor() {
    this.fontSize = 25;
    this.switchValue = false;
    this.languageCode = "ko";
  }

  public setFontSize = async (fontSize: number) => {
    this.fontSize = fontSize;

    await setFontSizeValueInStorage(fontSize);
  };

  public getFontSize = async () => {
    const fontSize = (await getFontSizeValueInStorage()) ?? this.fontSize;

    return fontSize;
  };

  public setSwitchValue = async (value: boolean) => {
    this.switchValue = value;

    await setSwitchValueInStorage(value);
  };

  public getSwitchValue = async () => {
    const isChecked = (await getSwitchValueInStorage()) ?? this.switchValue;

    return isChecked;
  };

  public setLanguageCode = async (languageCode: LanguageCode) => {
    this.languageCode = languageCode;

    await setTranslatedTargetLanguageInStorage(languageCode);
  };

  public getLanguageCode = async () => {
    const language =
      (await getTranslatedTargetLanguageInStorage()) ?? this.languageCode;
    const languageCode = isLanguage(language) ? language : "ko";

    return languageCode;
  };
}

export default PopupModel;
