chrome.runtime.onMessage.addListener((message, _, response) => {
  if (message.name === "fetchTranslate") {
    const apiUrl = "https://openapi.naver.com/v1/papago/n2mt";
    const clientId = "client_id";
    const clientSecretKey = "client_secret_key";

    const options = {
      method: "POST",
      body: new URLSearchParams({
        source: "en",
        target: "ko",
        text: message.content,
      }),
      headers: {
        "X-Naver-Client-Id": clientId,
        "X-Naver-Client-Secret": clientSecretKey,
      },
    };

    fetch(apiUrl, options)
      .then((res) => {
        if (res.status !== 200) {
          response({ status: "Error", data: "error!" });
          return;
        }

        res.json().then((data) => {
          response({ status: "성공", data });
        });
      })
      .catch(() => {
        response({ status: "Error", data: "api 호출 중 에러" });
      });
  }

  return true;
});
