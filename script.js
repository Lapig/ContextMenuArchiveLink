//@author pig
//not fda approved


// Archive context callback
function genericOnClick(info, tab) {
  window.open("http://archive.is/?url="+info.linkUrl,"self")
}

// Create context menu entry
var title = "Archive link";
chrome.contextMenus.create({
  "title": title, "contexts":["link"],
  "onclick": genericOnClick});