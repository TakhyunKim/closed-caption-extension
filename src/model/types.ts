export interface TranslatedResult {
  message: {
    "@types": string;
    "@service": string;
    "@version": string;
    result: {
      srcLangType: string;
      tarLangType: string;
      translatedText: string;
    };
  };
}

export type ChromeTranslateAPIMessage = {
  name: string;
  payload: string;
};

export type ChromeTranslateAPIResponse = {
  error?: string;
  data: TranslatedResult | null;
};
