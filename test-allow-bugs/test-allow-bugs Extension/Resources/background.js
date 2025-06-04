// Test on https://techcrunch.com/2025/02/25/y-combinator-deletes-posts-after-a-startups-demo-goes-viral/
// Tweet is blocked on Safari Test Preview 220 and renders successfully on 18.5
// The allowAllRequests rule on techcrunch.com should override the block rules for third-party twitter requests

console.log("Removing dynamic rules from previous installation...");
await chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: [1, 2, 3]});
console.log("Adding dynamic rules...");
chrome.declarativeNetRequest.updateDynamicRules({addRules: [
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
            urlFilter: "||techcrunch.com^",
            resourceTypes: ["main_frame"]
        }
      }
]});

