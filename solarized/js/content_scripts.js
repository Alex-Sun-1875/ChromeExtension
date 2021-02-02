(function() {
  // TODO: Add white list feature(use localstorage)
  var white_list = new RegExp();

  function dynamicLoadCustomCss(path) {
    console.log("load css from: " + path);
    var node = document.createElement("link");
    node.id = "ext_style";
    node.rel = "stylesheet";
    node.disabled = false;
    node.type = "text/css";
    node.href = chrome.extension.getURL(path);
    if ("../css/chromium.css" == path) {
      var heads = document.getElementsByTagName("head");
    } else {
      var heads = document.getElementsByTagName("html");
    }
    if (heads.length > 0) {
      heads[0].appendChild(node);
    } else {
      // no head yet, stick it whereever
      document.documentElement.appendChild(node);
    }
  }

  function dynamicRemoveCustomCss() {
    console.log("remove ext_style");
    $("#ext_style").attr("disabled", true);
    $("#ext_style").remove();
  }

  function dynamicSelectCustomCss() {
    var expr = new RegExp("/*:\/\/cs\.chromium\.org\/*");
    if (new RegExp("/*:\/\/source\.chromium\.org\/*").test(document.location.href))
      dynamicLoadCustomCss("../css/chromium_v2.css");
    /*
    if (expr.test(document.location.href)) {
      dynamicLoadCustomCss("../css/chromium.css");
    } else if (new RegExp("/*:\/\/source\.chromium\.org\/*").test(document.location.href)) {
      dynamicLoadCustomCss("../css/chromium_v2.css");
    } else if ((new RegExp("https?:\/\/leetcode*")).test(document.location.href)) {
      // dynamicLoadCustomCss("../css/leetcode.css");
    } else if ((new RegExp("https?:\/\/docs.google.com/*")).test(document.location.href)) {
      dynamicLoadCustomCss("../css/google_docs.css");
    } else if ((new RegExp("https?:\/\/*")).test(document.location.href)) {
      dynamicLoadCustomCss("../css/content_css_scripts.css");
      // dynamicLoadCustomCss("../css/dark_mode.css");
    }
    */
  }

  chrome.storage.onChanged.addListener((changes, area_name) => {
    if (area_name == 'local' && changes.enable) {
      if (changes.enable.newValue) {
        dynamicSelectCustomCss();
      } else {
        dynamicRemoveCustomCss();
      }
    }
  });

  chrome.storage.local.get(['enable'], res => {
    if (res.enable) {
      dynamicSelectCustomCss();
    }
  });
})();
