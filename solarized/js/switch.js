var bg = chrome.extension.getBackgroundPage();

$(".switch-wrap").click(function(){
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    bg.setConfig({'result': 'off'});
  }else{
    $(this).addClass("active");
    bg.setConfig({'result': 'on'});
  }
})
