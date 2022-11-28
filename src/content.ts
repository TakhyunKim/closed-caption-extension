import View from "./view";
import Model from "./model";
import Controller from "./controller";

import Dom from "./Dom";
import Storage from "./Storage";

import { TRANSLATE_CALL_MESSAGE, SWITCH_STORAGE_KEY } from "./const";

const hostName = window.location.hostname.split(".");
const hostUrl = hostName[hostName.length - 2];

const view = new View(Dom[hostUrl].domAttrs);
const model = new Model();
const controller = new Controller(view, model);

const renderTranslatedElement = () => {
  controller.translatedAndRender();
};

const deleteTranslatedElement = () => {
  controller.deleteTranslatedElement();
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

const disconnectObserver = () => {
  observer.disconnect();
};

const connectClosedCaptionObserver = () => {
  const closedCaptionWrapperElement = document.querySelector(
    Dom[hostUrl].domWrapperAttrs
  ) as HTMLDivElement | null;

  if (!closedCaptionWrapperElement) return;

  // render initial translated Element
  renderTranslatedElement();

  // connect closed caption wrapper element observer
  connectObserver(closedCaptionWrapperElement);
};

const disconnectClosedCaptionObserver = () => {
  // delete translated Element
  deleteTranslatedElement();

  // disconnect closed caption wrapper element observer
  disconnectObserver();
};

const initialSetRenderClosedCaption = async () => {
  const { isChecked } = await Storage.getStorageValue<boolean>(
    SWITCH_STORAGE_KEY
  );

  if (isChecked) connectClosedCaptionObserver();
};

chrome.runtime.onMessage.addListener(
  (request: { message: string; data: boolean }) => {
    if (request.message === TRANSLATE_CALL_MESSAGE) {
      request.data
        ? connectClosedCaptionObserver()
        : disconnectClosedCaptionObserver();
    }
  }
);

initialSetRenderClosedCaption();
