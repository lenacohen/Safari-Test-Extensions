chrome.webNavigation.onBeforeNavigate.addListener((details) => console.log("Navigating to", details.url));
console.log("Removing dynamic rules from previous installation...");
await chrome.declarativeNetRequest.updateSessionRules({removeRuleIds: [1]});
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
await chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: [2]});
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
