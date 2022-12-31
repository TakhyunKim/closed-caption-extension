import View from "./view";
import Model from "./model";
import Controller from "./controller";

import Dom from "./Dom";
import {
  getSwitchValueInStorage,
  getFontSizeValueInStorage,
} from "./api/storage";

import {
  TRANSLATE_CALL_MESSAGE,
  FONT_SIZE_RANGE_MESSAGE,
} from "./common/const";

const hostName = window.location.hostname.split(".");
const hostUrl = hostName[hostName.length - 2];

const view = new View(Dom[hostUrl].domAttrs);
const model = new Model();
const controller = new Controller(view, model);

const changeFontSizeRangeElement = (value: number) => {
  controller.changeFontSizeRangeElement(value);
};

const renderTranslatedElement = () => {
  controller.translatedAndRender();
};

const deleteTranslatedElement = () => {
  controller.deleteTranslatedElement();
};

const renderTranslatedElementAndSetObserver = () => {
  connectClosedCaptionObserver();

  controller.translatedAndRender();
};

const observer = new MutationObserver(renderTranslatedElementAndSetObserver);

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
  const closedCaptionElement = document.querySelector(Dom[hostUrl].domAttrs);

  if (!closedCaptionElement) return;

  connectObserver(closedCaptionElement);
};

const connectClosedCaptionWrapperObserver = () => {
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
  const isChecked = await getSwitchValueInStorage();
  const fontSize = await getFontSizeValueInStorage();

  if (fontSize && typeof fontSize === "number")
    changeFontSizeRangeElement(fontSize);

  if (isChecked) connectClosedCaptionWrapperObserver();
};

chrome.runtime.onMessage.addListener(
  (request: { message: string; data: unknown }) => {
    if (request.message === TRANSLATE_CALL_MESSAGE) {
      request.data
        ? connectClosedCaptionWrapperObserver()
        : disconnectClosedCaptionObserver();
    }

    if (request.message === FONT_SIZE_RANGE_MESSAGE) {
      changeFontSizeRangeElement(request.data as number);
    }
  }
);

initialSetRenderClosedCaption();
