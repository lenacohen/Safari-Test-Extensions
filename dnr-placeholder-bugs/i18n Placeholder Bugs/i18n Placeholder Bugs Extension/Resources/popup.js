document.addEventListener('DOMContentLoaded', () => {
  const msg = chrome.i18n.getMessage("popup_instructions_original", [
    5,
    "<a target='_blank' title='What is a third-party tracker?' href='https://privacybadger.org/#What-is-a-third-party-tracker'>",
    "</a>"
  ]);
  document.getElementById('placeholder-test-original').innerHTML = msg;
    
    const msg2 = chrome.i18n.getMessage("popup_instructions_fixed", [
      "5", // must be cast as string to to appear
      "<a target='_blank' title='What is a third-party tracker?' href='https://privacybadger.org/#What-is-a-third-party-tracker'>",
      "</a>"
    ]);
    document.getElementById('placeholder-test-fixed').innerHTML = msg2;
    document.getElementById('non-html-placeholder-test').innerHTML = chrome.i18n.getMessage("non_html_placeholder_test", ["pl", "holders"])
    document.getElementById('non-html-placeholder-test-workaround').innerHTML = chrome.i18n.getMessage("non_html_placeholder_test_workaround", ["pl", "holders"])
});
