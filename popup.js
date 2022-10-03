const translationElement = document.getElementById("translate");

const startApplyClosedCaption = () => {
  const getClosedCaptionInfo = async () => {
    const closedCaptionElement = document.querySelector(".vjs-text-track-cue");
    const closedCaptionWrapperElement = closedCaptionElement.parentElement;

    if (!closedCaptionElement) return;

    const insetStyle = closedCaptionElement.style.inset;
    const textContent = closedCaptionElement.textContent;

    chrome.runtime.sendMessage(
      { name: "fetchTranslate", content: textContent },
      (response) => {
        if (response.data.message.result.translatedText) {
          const newClosedCaptionWrapperElement = document.createElement("div");

          newClosedCaptionWrapperElement.style.textAlign = "center";
          newClosedCaptionWrapperElement.style.position = "absolute";
          newClosedCaptionWrapperElement.style.width = "100%";
          newClosedCaptionWrapperElement.style.inset = `${
            Number(insetStyle.split(" ")[0].replace("px", "")) + 50
          }px 0 0`;
          newClosedCaptionWrapperElement.classList.add("vjs-text-track-cue");

          const newClosedCaptionElement = document.createElement("div");

          newClosedCaptionElement.textContent =
            response.data.message.result.translatedText;
          newClosedCaptionElement.style.color = "rgb(255, 255, 255)";
          newClosedCaptionElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

          newClosedCaptionWrapperElement.appendChild(newClosedCaptionElement);
          closedCaptionWrapperElement.appendChild(
            newClosedCaptionWrapperElement
          );
        }
      }
    );
  };

  const closedCaptionElement = document.querySelector(
    ".vjs-text-track-display"
  );

  const observer = new MutationObserver(getClosedCaptionInfo);

  const config = {
    attributes: true,
    childList: true,
    characterData: true,
  };

  observer.observe(closedCaptionElement, config);
};

translationElement.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: startApplyClosedCaption,
  });
});
