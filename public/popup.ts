import {
  getSwitchValueInStorage,
  setSwitchValueInStorage,
  getFontSizeValueInStorage,
  setFontSizeValueInStorage,
} from "../src/api/storage";
import {
  sendMessageToContentRangeValue,
  sendMessageToContentIsActiveTranslation,
} from "../src/api/message";

import FontSlider from "../src/view/FontSlider";

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
