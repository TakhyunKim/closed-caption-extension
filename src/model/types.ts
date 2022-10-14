export type ChromeTranslateAPIMessage = {
  name: string;
  payload: string;
};

export type ChromeTranslateAPIResponse = {
  error?: string;
  data: string | null;
};
