interface DOM_ATTRS {
  // Parent element of the DOM to be translated attribute (ex: class, id ...)
  domWrapperAttrs: string;
  // The DOM to be translated attribute (ex: class, id ...)
  domAttrs: string;
  domAttrsSub?: string;
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
    domAttrsSub: ".curriculum-item-view--content--3ABmp",
  },
  youtube: {
    domWrapperAttrs: ".ytp-caption-window-container",
    domAttrs: ".captions-text",
  },
  epicreact: {
    domWrapperAttrs: ".bmpui-ui-subtitle-overlay",
    domAttrs: ".bmpui-ui-subtitle-label",
  },
  ted: {
    domWrapperAttrs: "#ted-player",
    domAttrs: ".css-16n0hsa",
    domAttrsSub: ".css-82uonn",
  },
  netflix: {
    domWrapperAttrs: ".player-timedtext",
    domAttrs: ".player-timedtext-text-container",
  },
  "threejs-journey": {
    domWrapperAttrs: ".js-tracks",
    domAttrs: ".js-tracks-text",
  },
  start: {
    domWrapperAttrs: "#controls",
    domAttrs: ".StartPlayer_subtitles__nrh_r ",
  },
};

export default Dom;
