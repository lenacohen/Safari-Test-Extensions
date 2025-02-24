browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello")
        return Promise.resolve({ farewell: "goodbye" });
});

console.log("Adding session rules...");
chrome.declarativeNetRequest.updateSessionRules({addRules: [
    {
        id: 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            extensionPath: "/web_accessible_resources/test_redirect.html"
          }
        },
        condition: {
            urlFilter: "||eff.org^",
            resourceTypes: [
                "main_frame"
            ]
        }
      }
]});
console.log("Removing dynamic rules from previous installation...");
let removeRuleIds = await chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: [2]});
console.log("Adding dynamic rules...");
chrome.declarativeNetRequest.updateDynamicRules({addRules: [
    {
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            extensionPath: "/web_accessible_resources/test_redirect.html"
          }
        },
        condition: {
            urlFilter: "||washingtonpost.com^",
            resourceTypes: [
                "main_frame"
            ]
        }
      }
]});