var default_config = {'switch': 'off'};

var handler = {
  set: function(obj, prop, value) {
    obj[prop] = value;
    if ('switch' === prop) {
      console.log(obj);
      sendMessageToContentScript(JSON.stringify(obj), function(response) { });
    }
    return true;
  }
};

var config = new Proxy(default_config, handler);

function setConfig(cfg) {
  config.switch = cfg.switch;
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

(function(){
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request, sender, sendResponse);
    sendResponse(JSON.stringify(config));
  });
})();
