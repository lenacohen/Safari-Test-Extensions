// Test on https://fmarier.github.io/brave-testing/social-widgets.html
// The "Embedded tweet" is blocked on Safari Test Preview 220 but renders successfully on Safari 18.5, Chrome, and Firefox
// The allowAllRequests rule for fmarier.github.io should override the block rules for third-party twitter requests

chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: [1, 2, 3]}).then(() => chrome.declarativeNetRequest.updateDynamicRules({addRules: [
    {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
            urlFilter: "||twitter.com^",
            domainType: "thirdParty"
        }
      },
    {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: {
            urlFilter: "||platform.twitter.com^",
            domainType: "thirdParty"
        }
      },
    {
        id: 3,
        priority: 100,
        action: { type: "allowAllRequests" },
        condition: {
            urlFilter: "||fmarier.github.io^",
            resourceTypes: ["main_frame"]
        }
      }
]}));
