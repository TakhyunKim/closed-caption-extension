import "./popup.css";

const translationElement = document.getElementById(
  "translate"
) as HTMLInputElement;

translationElement.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabId = tab.id;

  const isChecked = translationElement.checked;

  if (!tabId) return;

  chrome.tabs.sendMessage(tabId, {
    message: "render",
    isActiveTranslation: isChecked,
  });
});
