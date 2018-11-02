(function() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
  {
    // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
    // if(request.cmd == 'test') alert(request.value);
    // console.log('我收到了你的消息');
    // location.reload();
    console.log(request);
    // chrome.management.setEnabled(cbkellfehgnpaeeliacgeoaobljdofee, false);
  });

  chrome.runtime.sendMessage({command: 'getSwitch'}, function(response) {
    console.log(response);
  });
})();
