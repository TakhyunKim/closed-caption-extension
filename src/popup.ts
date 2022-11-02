import "./popup.css";

import Storage from "./Storage";
import Message from "./message";

import { TRANSLATE_CALL_MESSAGE, SWITCH_STORAGE_KEY } from "./const";

const translationElement = document.getElementById(
  "translate"
) as HTMLInputElement;

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

const setSwitchState = async () => {
  const { isChecked } = await Storage.getStorageValue<boolean | unknown>(
    SWITCH_STORAGE_KEY
  );

  if (typeof isChecked !== "boolean") return;

  translationElement.checked = isChecked;
};

translationElement.addEventListener("click", async () => {
  const isChecked = translationElement.checked;

  await Storage.setStorageValue(SWITCH_STORAGE_KEY, isChecked);
  await sendToMessageIsActiveTranslation(isChecked);
});

// when popup open set default switch state
setSwitchState();
