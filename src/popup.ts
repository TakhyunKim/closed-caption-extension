import "./popup.css";

const translationElement = document.getElementById(
  "translate"
) as HTMLInputElement;

const sendToMessageIsActiveTranslation = async (
  isActiveTranslation: boolean
) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabId = tab.id;

  if (!tabId) return;

  chrome.tabs.sendMessage(tabId, {
    message: "render",
    isActiveTranslation: isActiveTranslation,
  });
};

const getIsChecked = async (): Promise<boolean> => {
  const { isChecked } = await chrome.storage.sync.get("isChecked");

  return Boolean(isChecked);
};

const setIsChecked = async (isChecked: boolean) => {
  await chrome.storage.sync.set({ isChecked });
};

const setSwitchState = async () => {
  const isChecked = await getIsChecked();

  translationElement.checked = isChecked;
};

translationElement.addEventListener("click", async () => {
  const isChecked = translationElement.checked;

  await setIsChecked(isChecked);
  await sendToMessageIsActiveTranslation(isChecked);
});

setSwitchState();
