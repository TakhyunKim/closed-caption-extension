import FontSliderView from "../src/view/popup/FontSliderView";
import LanguageSelectView from "../src/view/popup/LanguageSelectorView";
import TranslatingSwitchView from "../src/view/popup/TranslatingSwitchView";
import LanguageSelectorButtonView from "../src/view/popup/LanguageSelectorButtonView";

import PopupModel from "../src/model/popup/PopupModel";

import PopupController from "../src/controller/popup/PopupController";

const fontSliderView = new FontSliderView();
const languageSelectorView = new LanguageSelectView();
const translatingSwitchView = new TranslatingSwitchView();
const languageSelectorButtonView = new LanguageSelectorButtonView();

const popupModel = new PopupModel();

const popupController = new PopupController(
  fontSliderView,
  languageSelectorView,
  translatingSwitchView,
  languageSelectorButtonView,
  popupModel
);

popupController.setInitialSwitchState();
popupController.setInitialFontRangeSlider();
popupController.setInitialLanguageSelectorAndButton();
