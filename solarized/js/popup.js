(function() {
  function updateIcon(enable) {
    $('#switch').attr('active', enable);
  }

  $('#switch').click(() => {
    chrome.storage.local.get(['enable'], (res) => {
      chrome.storage.local.set({
        enable: !res.enable
      });
    });
  });

  chrome.storage.onChanged.addListener((changes, area_name) => {
    if (area_name == 'local' && changes.enable) {
      updateIcon(changes.enable.newValue);
    }
  });

  chrome.storage.local.get(['enable'], (res) => {
    updateIcon(res.enable);
  });

})();