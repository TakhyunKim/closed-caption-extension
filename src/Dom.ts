interface DOM_ATTRS {
  // Parent element of the DOM to be translated attribute (ex: class, id ...)
  domWrapperAttrs: string;
  // The DOM to be translated attribute (ex: class, id ...)
  domAttrs: string;
}

interface TRANSLATING_DOM_INFO {
  [url: string]: DOM_ATTRS;
}

/**
 * The key of the DOM object is host name.
 * For example: https://(this url is key>).com or https://(this url is key>).something
 */
const Dom: TRANSLATING_DOM_INFO = {
  frontendmasters: {
    domWrapperAttrs: ".vjs-text-track-display",
    domAttrs: ".vjs-text-track-cue",
  },
  udemy: {
    domWrapperAttrs: ".captions-display--captions-container--1-aQJ",
    domAttrs: ".captions-display--captions-cue-text--ECkJu",
  },
  youtube: {
    domWrapperAttrs: ".ytp-caption-window-container",
    domAttrs: ".captions-text",
  },
  epicreact: {
    domWrapperAttrs: ".bmpui-ui-subtitle-overlay",
    domAttrs: ".bmpui-ui-subtitle-label",
  },
};

export default Dom;
