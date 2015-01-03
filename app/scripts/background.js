'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

// var i = 0;
// window.setInterval(function() {
//   chrome.browserAction.setBadgeText({text:String(i)});
//   i++;
// }, 1000);