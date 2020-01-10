var storage = window.localStorage;

if (undefined == storage.getItem("config")) {
  console.log("1111");
  storage.setItem("config", JSON.stringify({ "switch": "on" }));
}

var default_config = JSON.parse(storage.getItem("config"));
console.log(default_config.switch);
console.log(default_config);

var handler = {
  set: function(obj, prop, value) {
    obj[prop] = value;
    storage.setItem("config", JSON.stringify(obj));
    if ('switch' === prop) {
      console.log(obj);
      sendMessageToContentScript(JSON.stringify(obj));
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

function sendMessageToContentScript(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
}

(function() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request, sender, sendResponse);
    sendResponse(JSON.stringify(config));
  });
})();
