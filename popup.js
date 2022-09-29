const translationElement = document.getElementById("translate");

const getClosedCaptionInfo = () => {
  const closedCaptionElement = document.querySelector(".vjs-text-track-cue");
  const closedCaptionWrapperElement = closedCaptionElement.parentElement;

  const insetStyle = closedCaptionElement.style.inset;
  const textContent = closedCaptionElement.textContent;

  const newClosedCaptionWrapperElement = document.createElement("div");

  newClosedCaptionWrapperElement.style.textAlign = "center";
  newClosedCaptionWrapperElement.style.position = "absolute";
  newClosedCaptionWrapperElement.style.inset = `${
    Number(insetStyle.split(" ")[0].replace("px", "")) + 50
  }px`;
  newClosedCaptionWrapperElement.classList.add("vjs-text-track-cue");

  const newClosedCaptionElement = document.createElement("div");

  newClosedCaptionElement.textContent = "안녕";
  newClosedCaptionElement.style.color = "rgb(255, 255, 255)";
  newClosedCaptionElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

  newClosedCaptionWrapperElement.appendChild(newClosedCaptionElement);
  closedCaptionWrapperElement.appendChild(newClosedCaptionWrapperElement);
};

translationElement.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getClosedCaptionInfo,
  });
});
