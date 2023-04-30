import FontSliderView from "../../view/popup/FontSliderView";
import LanguageSelectorView from "../../view/popup/LanguageSelectorView";
import TranslatingSwitchView from "../../view/popup/TranslatingSwitchView";
import LanguageSelectorButtonView from "../../view/popup/LanguageSelectorButtonView";

import PopupModel from "../../model/popup/PopupModel";

import {
  sendMessageToContentRangeValue,
  sendMessageToContentChangedLanguage,
  sendMessageToContentIsActiveTranslation,
} from "../../api/message";
import { isLanguage } from "../../common/isLanguage";

class PopupController {
  fontSliderView: FontSliderView;
  languageSelectorView: LanguageSelectorView;
  translatingSwitchView: TranslatingSwitchView;
  languageSelectorButtonView: LanguageSelectorButtonView;
  popupModel: PopupModel;

  constructor(
    _fontSliderView: FontSliderView,
    _languageSelectorView: LanguageSelectorView,
    _translatingSwitchView: TranslatingSwitchView,
    _languageSelectorButtonView: LanguageSelectorButtonView,
    _popupModel: PopupModel
  ) {
    this.fontSliderView = _fontSliderView;
    this.languageSelectorView = _languageSelectorView;
    this.translatingSwitchView = _translatingSwitchView;
    this.languageSelectorButtonView = _languageSelectorButtonView;
    this.popupModel = _popupModel;

    this.fontSliderView
      .getFontSliderElement()
      .addEventListener("input", this.updateFontSliderAndSendMessage);

    this.translatingSwitchView
      .getTranslatingSwitchElement()
      .addEventListener("click", this.updateTranslateAndSendMessage);

    this.languageSelectorButtonView
      .getLanguageSelectorButtonElement()
      .addEventListener(
        "click",
        this.languageSelectorView.toggleLanguageSelectorDisplay
      );

    this.languageSelectorView
      .getLanguageSelector()
      .addEventListener("click", this.updateSelectedLanguageAndSendMessage);
  }

  private updateFontSliderAndSendMessage = async () => {
    const rangeValue = Number(this.fontSliderView.getFontSliderValue());

    this.fontSliderView.updateFontSlider(rangeValue);

    await this.popupModel.setFontSize(rangeValue);

    await sendMessageToContentRangeValue(rangeValue);
  };

  private updateTranslateAndSendMessage = async () => {
    const isChecked = this.translatingSwitchView.getTranslatingSwitchValue();

    await this.popupModel.setSwitchValue(isChecked);

    await sendMessageToContentIsActiveTranslation(isChecked);
  };

  private updateSelectedLanguageAndSendMessage = async (event: MouseEvent) => {
    const target = event.target as HTMLDivElement;
    const selectedLanguage = target.dataset.lang;

    if (!selectedLanguage || !isLanguage(selectedLanguage)) return;

    this.languageSelectorButtonView.setLanguageSelectorButtonText(
      selectedLanguage
    );
    this.languageSelectorView.updateLanguage(selectedLanguage);

    await this.popupModel.setLanguageCode(selectedLanguage);

    await sendMessageToContentChangedLanguage(selectedLanguage);
  };

  public setInitialSwitchState = async () => {
    const isChecked = await this.popupModel.getSwitchValue();
    this.translatingSwitchView.setTranslatingSwitchValue(isChecked);

    await sendMessageToContentIsActiveTranslation(isChecked);
  };

  public setInitialFontRangeSlider = async () => {
    const fontSize = await this.popupModel.getFontSize();

    this.fontSliderView.updateFontSlider(fontSize);

    await sendMessageToContentRangeValue(fontSize);
  };

  public setInitialLanguageSelectorAndButton = async () => {
    const languageCode = await this.popupModel.getLanguageCode();

    this.languageSelectorView.setSelectedElementStyle(languageCode);
    this.languageSelectorButtonView.setLanguageSelectorButtonText(languageCode);

    await sendMessageToContentChangedLanguage(languageCode);
  };
}

export default PopupController;
