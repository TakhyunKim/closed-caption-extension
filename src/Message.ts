export type ChromeAPIRequest = {
  message: string;
  payload: string;
};

export type ChromeAPIResponse = {
  error?: string;
  data: string | null;
};

const Message = {
  async sendMessageToContentScript(
    tabId: number,
    message: string,
    data?: unknown
  ) {
    chrome.tabs.sendMessage(tabId, { message, data });
  },

  async sendMessageToBackground(message: string, payload: string) {
    const response = chrome.runtime.sendMessage<
      ChromeAPIRequest,
      ChromeAPIResponse
    >({ message, payload });

    return response;
  },
};

export default Message;
