import FontSliderView from "../../view/popup/FontSliderView";
import LanguageSelectorView from "../../view/popup/LanguageSelectorView";
import TranslatingSwitchView from "../../view/popup/TranslatingSwitchView";
import LanguageSelectorButtonView from "../../view/popup/LanguageSelectorButtonView";

import PopupModel from "../../model/popup/PopupModel";

import type { LanguageCode } from "../../common/language.types";

class PopupController {
  fontSliderView: FontSliderView;
  languageSelectorView: LanguageSelectorView;
  translatingSwitchView: TranslatingSwitchView;
  languageSelectorButtonView: LanguageSelectorButtonView;
  popupModel: PopupModel;

  switchCallback: (isChecked: boolean) => Promise<void>;
  fontSliderCallback: (fontSize: number) => Promise<void>;
  languageSelectorCallback: (languageCode: LanguageCode) => Promise<void>;

  constructor(
    _fontSliderView: FontSliderView,
    _languageSelectorView: LanguageSelectorView,
    _translatingSwitchView: TranslatingSwitchView,
    _languageSelectorButtonView: LanguageSelectorButtonView,
    _popupModel: PopupModel,

    _switchCallback: (isChecked: boolean) => Promise<void>,
    _fontSliderCallback: (fontSize: number) => Promise<void>,
    _languageSelectorCallback: (languageCode: LanguageCode) => Promise<void>
  ) {
    this.fontSliderView = _fontSliderView;
    this.languageSelectorView = _languageSelectorView;
    this.translatingSwitchView = _translatingSwitchView;
    this.languageSelectorButtonView = _languageSelectorButtonView;
    this.popupModel = _popupModel;

    this.switchCallback = _switchCallback;
    this.fontSliderCallback = _fontSliderCallback;
    this.languageSelectorCallback = _languageSelectorCallback;

    this.fontSliderView
      .getElement()
      .addEventListener("input", () =>
        this.updateFontSlider(this.fontSliderCallback)
      );

    this.translatingSwitchView
      .getElement()
      .addEventListener("click", () =>
        this.updateTranslate(this.switchCallback)
      );

    this.languageSelectorButtonView
      .getElement()
      .addEventListener(
        "click",
        this.languageSelectorView.toggleLanguageSelectorDisplay
      );

    this.languageSelectorView
      .getElement()
      .addEventListener("click", (event) =>
        this.updateSelectedLanguage(event, this.languageSelectorCallback)
      );
  }

  private updateFontSlider = async (
    callback: (fontSize: number) => Promise<void>
  ) => {
    const rangeValue = Number(this.fontSliderView.getValue());
    this.fontSliderView.updateElement(rangeValue);
    await this.popupModel.setFontSize(rangeValue);

    await callback(rangeValue);
  };

  private updateTranslate = async (
    callback: (isChecked: boolean) => Promise<void>
  ) => {
    const isChecked = this.translatingSwitchView.getValue();
    await this.popupModel.setSwitchValue(isChecked);

    await callback(isChecked);
  };

  private updateSelectedLanguage = async (
    event: MouseEvent,
    callback: (languageCode: LanguageCode) => Promise<void>
  ) => {
    const target = event.target as HTMLDivElement;
    const selectedLanguage = target.dataset.lang as LanguageCode;

    this.languageSelectorButtonView.setValue(selectedLanguage);
    this.languageSelectorView.updateElement(selectedLanguage);
    await this.popupModel.setLanguageCode(selectedLanguage);

    await callback(selectedLanguage);
  };

  public setInitialSwitchState = async () => {
    const isChecked = await this.popupModel.getSwitchValue();
    this.translatingSwitchView.setValue(isChecked);

    await this.switchCallback(isChecked);
  };

  public setInitialFontRangeSlider = async () => {
    const fontSize = await this.popupModel.getFontSize();
    this.fontSliderView.updateElement(fontSize);

    await this.fontSliderCallback(fontSize);
  };

  public setInitialLanguageSelectorAndButton = async () => {
    const languageCode = await this.popupModel.getLanguageCode();

    this.languageSelectorView.setElementStyle(languageCode);
    this.languageSelectorButtonView.setValue(languageCode);

    await this.languageSelectorCallback(languageCode);
  };
}

export default PopupController;
