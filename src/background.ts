const replaceNewLineSequenceToSpace = (text: string) => {
  return text.replace(/\r?\n/g, " ");
};

chrome.runtime.onMessage.addListener(({ message, payload }, _, response) => {
  if (message === "translate") {
    const translateTargetText = encodeURIComponent(
      replaceNewLineSequenceToSpace(payload)
    );
    const apiURL = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=${translateTargetText}`;

    fetch(apiURL)
      .then((res) => {
        if (res.status !== 200) {
          response({ status: "Error", data: "error!" });
          return;
        }

        res.json().then((data) => {
          response({ status: "성공", data: data[0][0][0] });
        });
      })
      .catch(() => {
        response({ status: "Error", data: "api 호출 중 에러" });
      });
  }

  return true;
});
