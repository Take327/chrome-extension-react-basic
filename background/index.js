chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("background")
        chrome.tabs.query({ active: true }, (tabs) => {
            console.log(tabs)
            chrome.tabs.sendMessage(tabs[0].id, { message: "hello" });
        });
    });