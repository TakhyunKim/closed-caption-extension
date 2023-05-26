import Message from "./Message";

import {
  TEXT_COLOR_MESSAGE,
  TRANSLATE_CALL_MESSAGE,
  FONT_SIZE_RANGE_MESSAGE,
  CHANGE_LANGUAGE_MESSAGE,
} from "../../common/const";

import type { LanguageCode } from "../../common/language.types";
import type { ChromeAPIRequest, ChromeAPIResponse } from "./Message";

const sendMessageToBackgroundTranslatingText = async (
  translateTargetText: string,
  languageCode: LanguageCode,
  callback: (text: string) => void
) => {
  await Message.sendMessageToBackground(
    "translate",
    { translateTargetText, languageCode },
    (response) => {
      const translatedText = response.data;

      if (!translatedText || response.error) return;

      callback(translatedText);
    }
  );
};

const sendMessageToContentIsActiveTranslation = async (
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

const sendMessageToContentRangeValue = async (rangeValue: number) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabId = tab.id;

  if (!tabId) return;

  await Message.sendMessageToContentScript(
    tabId,
    FONT_SIZE_RANGE_MESSAGE,
    rangeValue
  );
};

const sendMessageToContentChangedLanguage = async (language: LanguageCode) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabId = tab.id;

  if (!tabId) return;

  await Message.sendMessageToContentScript(
    tabId,
    CHANGE_LANGUAGE_MESSAGE,
    language
  );
};

const sendMessageToContentTextColor = async (textColor: string) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabId = tab.id;

  if (!tabId) return;

  await Message.sendMessageToContentScript(
    tabId,
    TEXT_COLOR_MESSAGE,
    textColor
  );
};

export {
  sendMessageToBackgroundTranslatingText,
  sendMessageToContentIsActiveTranslation,
  sendMessageToContentRangeValue,
  sendMessageToContentChangedLanguage,
  sendMessageToContentTextColor,
};

export type { ChromeAPIRequest, ChromeAPIResponse };

export default Message;
