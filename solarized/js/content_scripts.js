function dynamicLoadCustomCss(path) {
  console.log("load css from: " + path);
  var node = document.createElement("link");
  node.id = "ext_style";
  node.rel = "stylesheet";
  node.disabled = false;
  node.type = "text/css";
  node.href = chrome.extension.getURL(path);
  var heads = document.getElementsByTagName("head");
  if (heads.length > 0) {
    heads[0].appendChild(node);
  } else {
    // no head yet, stick it whereever
    document.documentElement.appendChild(node);
  }
}

function dynamicRemoveCustomCss() {
  console.log("remove ext_style");
  $("document").href = null;
}

dynamicRemoveCustomCss();

(function() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
  {
    // location.reload();
    var config = JSON.parse(request);
    if ("on" == config.switch) {
      dynamicLoadCustomCss("../css/chromium.css");
    }
  });

  chrome.runtime.sendMessage({command: 'getSwitch'}, function(response) {
    console.log(response);
    var config = JSON.parse(response);
    if ("on" == config.switch) {
      dynamicLoadCustomCss("../css/chromium.css");
    } else if ("off" == config.switch) {
      dynamicRemoveCustomCss();
    }
  });
})();
