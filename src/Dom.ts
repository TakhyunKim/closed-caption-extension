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
 * For example: https://(this url is key>).com
 */
const Dom: TRANSLATING_DOM_INFO = {
  frontendmasters: {
    domWrapperAttrs: ".vjs-text-track-display",
    domAttrs: ".vjs-text-track-cue",
  },
};

export default Dom;
