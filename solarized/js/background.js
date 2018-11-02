var config = {'result': 'on'};

function setConfig(cfg) {
  console.log(cfg);
  config.result = cfg.result;
}

function getConfig() {
  return config;
}

function sendMessageToContentScript(message, callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}

Object.defineProperty(config, 'result', {
  get: function() { },
  set: function(value) {
    result = value;
    sendMessageToContentScript(JSON.stringify(config), function(response){});
  },
  // writable:true,
  enumerable:true,
  Configurable:true
});

(function(){
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request, sender, sendResponse);
    sendResponse(JSON.stringify(config));
  });
})();
