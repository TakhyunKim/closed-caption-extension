import FontSliderView from "../src/view/popup/FontSliderView";
import TextColorPickerView from "../src/view/popup/TextColorPickerView";
import LanguageSelectView from "../src/view/popup/LanguageSelectorView";
import TranslatingSwitchView from "../src/view/popup/TranslatingSwitchView";
import LanguageSelectorButtonView from "../src/view/popup/LanguageSelectorButtonView";

import PopupModel from "../src/model/popup/PopupModel";

import PopupController from "../src/controller/popup/PopupController";

import {
  sendMessageToContentTextColor,
  sendMessageToContentRangeValue,
  sendMessageToContentChangedLanguage,
  sendMessageToContentIsActiveTranslation,
} from "../src/api/message";

const fontSliderView = new FontSliderView();
const textColorPickerView = new TextColorPickerView();
const languageSelectorView = new LanguageSelectView();
const translatingSwitchView = new TranslatingSwitchView();
const languageSelectorButtonView = new LanguageSelectorButtonView();

const popupModel = new PopupModel();

const popupController = new PopupController(
  fontSliderView,
  textColorPickerView,
  languageSelectorView,
  translatingSwitchView,
  languageSelectorButtonView,
  popupModel,
  sendMessageToContentIsActiveTranslation,
  sendMessageToContentTextColor,
  sendMessageToContentRangeValue,
  sendMessageToContentChangedLanguage
);

popupController.setInitialTextColor();
popupController.setInitialFontRangeSlider();
popupController.setInitialSwitchState();
popupController.setInitialLanguageSelectorAndButton();
