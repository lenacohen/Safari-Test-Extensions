browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello")
        return Promise.resolve({ farewell: "goodbye" });
});


console.log("Adding session rules...");
let updateRules = await chrome.declarativeNetRequest.updateSessionRules({addRules: [
    {
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
      }
]});
console.log("Added session rules");