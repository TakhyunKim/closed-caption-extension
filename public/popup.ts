import {
  getSwitchValueInStorage,
  setSwitchValueInStorage,
  getFontSizeValueInStorage,
  setFontSizeValueInStorage,
  getTranslatedTargetLanguageInStorage,
  setTranslatedTargetLanguageInStorage,
} from "../src/api/storage";
import {
  sendMessageToContentRangeValue,
  sendMessageToContentChangedLanguage,
  sendMessageToContentIsActiveTranslation,
} from "../src/api/message";

import FontSlider from "../src/view/FontSlider";
import LanguageSelector from "../src/view/LanguageSelector";
import LanguageSelectorButton from "../src/view/LanguageSelectorButton";

import { isLanguage } from "../src/common/isLanguage";

import type { LanguageCode } from "../src/common/language.types";

const translationElement = document.getElementById(
  "translate"
) as HTMLInputElement;

const rangeElement = document.getElementById(
  "font-size-range"
) as HTMLInputElement;

const rangeInputElement = document.querySelector(
  'input[type="range"]'
) as HTMLInputElement;

const FontSliderInstance = new FontSlider(rangeElement);
const LanguageSelectorInstance = new LanguageSelector();
const LanguageSelectorButtonInstance = new LanguageSelectorButton();

const languageSelectorWrapperElement =
  LanguageSelectorInstance.getLanguageSelectorWrapperElement();
const languageSelectorButtonElement =
  LanguageSelectorButtonInstance.getLanguageSelectorButtonElement();

const setInitialSwitchState = async () => {
  const isChecked = await getSwitchValueInStorage();

  if (typeof isChecked !== "boolean") return;

  translationElement.checked = isChecked;
};

const setInitialFontRangeSlider = async () => {
  const fontSize = await getFontSizeValueInStorage();

  if (typeof fontSize !== "number") return;

  FontSliderInstance.setRangeValue(String(fontSize));
  FontSliderInstance.setFontRangeStyle(fontSize);
};

const setFontRangeStyleAndStorageValue = async (rangeValue: number) => {
  await setFontSizeValueInStorage(rangeValue);

  FontSliderInstance.setFontRangeStyle(rangeValue);
};

const setInitialLanguageSelectorValue = async () => {
  const language = (await getTranslatedTargetLanguageInStorage()) ?? "ko";
  const languageCode = isLanguage(language) ? language : "ko";

  LanguageSelectorInstance.toggleCheckLanguage(languageCode);
};

const setInitialLanguageSelectorText = async () => {
  const language = (await getTranslatedTargetLanguageInStorage()) ?? "ko";
  const languageCode = isLanguage(language) ? language : "ko";

  LanguageSelectorButtonInstance.setLanguageSelectorButtonText(languageCode);
};

languageSelectorWrapperElement.addEventListener("click", async (event) => {
  const target = event.target as HTMLDivElement;
  const selectedLangDataAttribute = target.dataset.lang;
  const prevLanguageCode =
    (await getTranslatedTargetLanguageInStorage()) ?? "ko";

  if (selectedLangDataAttribute === prevLanguageCode) return;

  if (prevLanguageCode) {
    const validatedPrevLanguageCode: LanguageCode = isLanguage(prevLanguageCode)
      ? prevLanguageCode
      : "ko";

    LanguageSelectorInstance.toggleCheckLanguage(validatedPrevLanguageCode);
  }

  if (selectedLangDataAttribute) {
    const languageCode: LanguageCode = isLanguage(selectedLangDataAttribute)
      ? selectedLangDataAttribute
      : "ko";

    LanguageSelectorInstance.toggleCheckLanguage(languageCode);

    await setTranslatedTargetLanguageInStorage(languageCode);

    LanguageSelectorButtonInstance.setLanguageSelectorButtonText(languageCode);

    await sendMessageToContentChangedLanguage(languageCode);
  }

  LanguageSelectorInstance.toggleLanguageSelectorDisplay();
});

languageSelectorButtonElement.addEventListener(
  "click",
  LanguageSelectorInstance.toggleLanguageSelectorDisplay
);

translationElement.addEventListener("click", async () => {
  const isChecked = translationElement.checked;

  await setSwitchValueInStorage(isChecked);
  await sendMessageToContentIsActiveTranslation(isChecked);
});

rangeInputElement.addEventListener("input", async () => {
  const rangeValue = Number(FontSliderInstance.getRangeValue());

  await setFontRangeStyleAndStorageValue(rangeValue);
  await sendMessageToContentRangeValue(rangeValue);
});

chrome.runtime.onMessage.addListener(async (request: { message: string }) => {
  if (request.message === "toggle-translate") {
    const isChecked = translationElement.checked;

    translationElement.checked = !isChecked;

    await setSwitchValueInStorage(!isChecked);
    await sendMessageToContentIsActiveTranslation(!isChecked);
  }
});

// when popup open set default switch state
setInitialSwitchState();
setInitialFontRangeSlider();
setInitialLanguageSelectorText();
setInitialLanguageSelectorValue();
