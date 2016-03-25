const menu = chrome.contextMenus.create({
    title: 'Update TOC',
    contexts: ['editable'],
    onclick: mdTocHere
});

function mdTocHere(info, tab){
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "mdTocHere"
        });
    });
}
