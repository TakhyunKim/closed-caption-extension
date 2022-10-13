import View from "./view";
import Model from "./model";
import Controller from "./controller";

const init = () => {
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);

  controller.init();
};

const trackAndRenderClosedCaptionElementChange = () => {
  const closedCaptionWrapperElement = document.querySelector(
    ".vjs-text-track-display"
  ) as HTMLDivElement | null;

  if (!closedCaptionWrapperElement) return;

  const observer = new MutationObserver(init);
  const observerOptions: MutationObserverInit = {
    childList: true,
    attributes: true,
    characterData: true,
  };

  observer.observe(closedCaptionWrapperElement, observerOptions);
};

chrome.runtime.onMessage.addListener((request) => {
  if (request.message === "render") {
    trackAndRenderClosedCaptionElementChange();
  }
});
