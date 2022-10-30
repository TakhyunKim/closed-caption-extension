import View from "./view";
import Model from "./model";
import Controller from "./controller";

const init = () => {
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);

  controller.translatedAndRender();
};

const observer = new MutationObserver(init);

const observerOptions: MutationObserverInit = {
  childList: true,
  attributes: true,
  characterData: true,
};

const trackAndRenderClosedCaptionElementChange = () => {
  const closedCaptionWrapperElement = document.querySelector(
    ".vjs-text-track-display"
  ) as HTMLDivElement | null;

  if (!closedCaptionWrapperElement) return;

  observer.observe(closedCaptionWrapperElement, observerOptions);
};

const closeTrackAndClosedCaptionElement = () => {
  observer.disconnect();
};

chrome.runtime.onMessage.addListener(
  (request: { message: string; isActiveTranslation: boolean }) => {
    if (request.message === "render") {
      request.isActiveTranslation
        ? trackAndRenderClosedCaptionElementChange()
        : closeTrackAndClosedCaptionElement();
    }
  }
);
