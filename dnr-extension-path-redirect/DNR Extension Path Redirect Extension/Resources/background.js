chrome.webNavigation.onBeforeNavigate.addListener((details) => console.log("Navigating to", details.url));
console.log("Adding dynamic redirect rule...")
chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: [1]}).then(() => chrome.declarativeNetRequest.updateDynamicRules({addRules: [{
        id: 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            extensionPath: "/pages/test_redirect.html"
          }
        },
        condition: {
            urlFilter: "||washingtonpost.com^",
            resourceTypes: [
                "main_frame"
            ]
        }
}]})).catch((err) => {
    console.error(err);
});
console.log("Adding session redirect rule...")
chrome.declarativeNetRequest.updateSessionRules({removeRuleIds: [2]}).then(() => chrome.declarativeNetRequest.updateSessionRules({addRules: [{
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            extensionPath: "/pages/test_redirect.html"
          }
        },
        condition: {
            urlFilter: "||eff.org^",
            resourceTypes: [
                "main_frame"
            ]
        }
}]})).catch((err) => {
    console.error(err);
});
