const translationElement = document.getElementById(
  "translate"
) as HTMLDivElement;

translationElement.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabId = tab.id;

  if (!tabId) return;

  chrome.tabs.sendMessage(tabId, { message: "render" });
});
