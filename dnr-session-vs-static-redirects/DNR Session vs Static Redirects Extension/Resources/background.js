console.log("Adding session redirect rule...")
chrome.declarativeNetRequest.updateSessionRules({removeRuleIds: [2]}).then(() => chrome.declarativeNetRequest.updateSessionRules({addRules: [{
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            url: "http://newyorktimes.com/"
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
