(function() {
  let menu_id;

  function createContextMenu(type, title, contexts, callback, parentId) {
    return chrome.contextMenus.create({
      type: type,
      title: title,
      contexts: contexts,
      onclick: callback,
      parentId: parentId
    });
  }

  function updateContextMenu(id, obj) {
    chrome.contextMenus.update(id, obj);
  }

  function toggleState() {
    chrome.storage.local.get(['enable'], res => {
      chrome.storage.local.set({
        enable: !res.enable
      });
    });
  }

  chrome.storage.onChanged.addListener((changes, area_name) => {
    if (area_name == 'local' && changes.enable) {
      updateContextMenu(menu_id, { title: changes.enable.newValue ? '关闭' : '开启' });
    }
  });

  chrome.storage.local.get(['enable'], res => {
    menu_id = createContextMenu('normal', res.enable ? "关闭" : "开启", ['all'], toggleState);
  });
})();