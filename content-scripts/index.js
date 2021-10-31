alert("test")

console.log("test")
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("content"); // hello

});