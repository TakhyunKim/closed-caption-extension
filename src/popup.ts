import "./popup.css";

import Storage from "./Storage";
import Message from "./message";

import FontSlider from "./popupView/FontSlider";

import {
  SWITCH_STORAGE_KEY,
  FONT_SIZE_STORAGE_KEY,
  TRANSLATE_CALL_MESSAGE,
  FONT_SIZE_RANGE_MESSAGE,
} from "./const";

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

const sendToMessageIsActiveTranslation = async (
  isActiveTranslation: boolean
) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabId = tab.id;

  if (!tabId) return;

  await Message.sendMessageToContentScript(
    tabId,
    TRANSLATE_CALL_MESSAGE,
    isActiveTranslation
  );
};

const sendToMessageRangeValue = async (rangeValue: number) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabId = tab.id;

  if (!tabId) return;

  await Message.sendMessageToContentScript(
    tabId,
    FONT_SIZE_RANGE_MESSAGE,
    rangeValue
  );
};

const setInitialSwitchState = async () => {
  const { isChecked } = await Storage.getStorageValue<boolean | unknown>(
    SWITCH_STORAGE_KEY
  );

  if (typeof isChecked !== "boolean") return;

  translationElement.checked = isChecked;
};

const setInitialFontRangeSlider = async () => {
  const { fontSize } = await Storage.getStorageValue<number | unknown>(
    FONT_SIZE_STORAGE_KEY
  );

  if (typeof fontSize !== "number") return;

  FontSliderInstance.setRangeValue(String(fontSize));
  FontSliderInstance.setFontRangeStyle(fontSize);
};

const setFontRangeStyleAndStorageValue = async (rangeValue: number) => {
  await Storage.setStorageValue(FONT_SIZE_STORAGE_KEY, rangeValue);

  FontSliderInstance.setFontRangeStyle(rangeValue);
};

translationElement.addEventListener("click", async () => {
  const isChecked = translationElement.checked;

  await Storage.setStorageValue(SWITCH_STORAGE_KEY, isChecked);
  await sendToMessageIsActiveTranslation(isChecked);
});

rangeInputElement.addEventListener("input", async () => {
  const rangeValue = Number(FontSliderInstance.getRangeValue());

  await setFontRangeStyleAndStorageValue(rangeValue);
  await sendToMessageRangeValue(rangeValue);
});

// when popup open set default switch state
setInitialSwitchState();
setInitialFontRangeSlider();
