import View from "./view";
import Model from "./model";
import Controller from "./controller";

import Storage from "./Storage";

import { TRANSLATE_CALL_MESSAGE, SWITCH_STORAGE_KEY } from "./const";

const renderTranslatedAndRender = () => {
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);

  controller.translatedAndRender();
};

const observer = new MutationObserver(renderTranslatedAndRender);

const connectObserver = (element: Element) => {
  const observerOptions: MutationObserverInit = {
    childList: true,
    attributes: true,
    characterData: true,
  };

  observer.observe(element, observerOptions);
};

const disconnectClosedCaptionObserver = () => {
  observer.disconnect();
};

const connectClosedCaptionWrapperObserver = () => {
  const closedCaptionWrapperElement = document.querySelector(
    ".vjs-text-track-display"
  ) as HTMLDivElement | null;

  if (!closedCaptionWrapperElement) return;

  // connect closed caption wrapper element observer
  connectObserver(closedCaptionWrapperElement);
};

const initialSetRenderClosedCaption = async () => {
  const { isChecked } = await Storage.getStorageValue(SWITCH_STORAGE_KEY);

  if (typeof isChecked === "boolean" && isChecked) {
    connectClosedCaptionWrapperObserver();
  }
};

chrome.runtime.onMessage.addListener(
  (request: { message: string; data: boolean }) => {
    if (request.message === TRANSLATE_CALL_MESSAGE) {
      request.data
        ? connectClosedCaptionWrapperObserver()
        : disconnectClosedCaptionObserver();
    }
  }
);

initialSetRenderClosedCaption();
