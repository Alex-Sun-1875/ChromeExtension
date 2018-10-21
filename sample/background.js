chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details);
    //拦截到执行资源后，为资源进行重定向
    //也就是是只要请求的资源匹配拦截规则，就转而执行returnjs.js
    return {redirectUrl: chrome.extension.getURL("withdraw.js")};
  },
  {
    //配置拦截匹配的url，数组里域名下的资源都将被拦截
    urls: [
        "https://img.bafang.com/*/okex/okex2.0/js/page/account/withdraw.js",
        "*://*.elongstatic.com/*"
    ],
    //拦截的资源类型，在这里只拦截script脚本，也可以拦截image等其他静态资源
    types: ["script"]
  },
  //要执行的操作，这里配置为阻断
  ["blocking"]
);