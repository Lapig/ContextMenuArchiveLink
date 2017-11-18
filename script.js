//@author pig
//not fda approved


// Archive context callback
function genericOnClick(info, tab) {
  window.open("http://archive.is/?url="+info.linkUrl,"self")
  //console.log("info: " + JSON.stringify(info));
  //console.log("tab: " + JSON.stringify(tab));
  /*chrome.tabs.create({  
    url: "http://www.google.com/search?q=" + info.selectionText,
  }); */
}

// Create one test item for each context type.
var title = "Archive link";
chrome.contextMenus.create({
  "title": title, "contexts":["link"],
  "onclick": genericOnClick});