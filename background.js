chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Send to Online Clipboard",
    contexts: ["selection"],
    id: "send-to-clipboard",
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "send-to-clipboard") {
      const selectedText = encodeURIComponent(info.selectionText);
      const url = `https://goonlinetools.com/online-clipboard/?data=${selectedText}`;
      chrome.tabs.create({ url: url });
    }
  });
});
