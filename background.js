var toggle = false;

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      // execute some codes here
      if(toggle){
      chrome.tabs.executeScript(tab.id, {file:"content.js"});
      chrome.tabs.insertCSS(tab.id, {file:"styles.css"});
      }
    }
  })


chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "on.png"}); //tabID:tab.id
    chrome.tabs.executeScript(tab.id, {file:"content.js"});
    chrome.tabs.insertCSS(tab.id, {file:"styles.css"});
  }
  else{
    chrome.browserAction.setIcon({path: "off.png"});
    chrome.tabs.executeScript(tab.id, {code:"window.location.reload();"});
  }
});
