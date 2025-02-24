browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello")
        return Promise.resolve({ farewell: "goodbye" });
});

console.log("Removing dynamic rules from previous installation...")
let removeRuleIds = await chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: [1, 2]})
console.log("Updating dynamic rules...");
let updateRules = await chrome.declarativeNetRequest.updateDynamicRules({addRules: [
    {
        id: 1, 
        condition: {urlFilter: "||www.google-analytics.com/ga.js", resourceTypes: ["script"], domainType: "thirdParty"}, 
        priority: 100, 
        action: {type: "redirect", redirect: {url: "http://washingtonpost.com"}}
    },
    {
        id: 2, 
        condition: {urlFilter: "||www.google-analytics.com/ga.js", domainType: "thirdParty"}, 
        priority: 1, 
        action: {type: "block"}
    }
]});
console.log("Updated dynamic rules");