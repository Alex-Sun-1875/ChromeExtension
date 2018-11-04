(function() {
  var bg = chrome.extension.getBackgroundPage();

  $(".switch-wrap").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      bg.setConfig({'switch': 'off'});
    }else{
      $(this).addClass("active");
      bg.setConfig({'switch': 'on'});
    }
  });

  if (bg.default_config.switch === 'on') {
    $(".switch-wrap").addClass("active");
  } else {
    $(".switch-wrap").removeClass("active");
  }
})();
