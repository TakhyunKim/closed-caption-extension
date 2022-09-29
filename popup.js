const translationElement = document.getElementById("translate");

const getClosedCaptionTextInfo = () => {
  const closedCaptionElement = document.querySelector(
    ".vjs-text-track-display"
  );

  const textContent = closedCaptionElement.textContent;
  const position = closedCaptionElement.getBoundingClientRect();
};

translationElement.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getClosedCaptionTextInfo,
  });
});
