chrome.runtime.sendMessage(null, { op: "clear-title" }, null, function () { });


chrome.runtime.sendMessage(null, { op: "load" }, null, function (state) {
  var done = 0;
function walk(node) {
  // I stole this function from someone who stole it from:
  // http://is.gd/mwZp7E

  var child, next;
  switch (node.nodeType) {
    case 1:
    case 9:
    case 11:
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3:
      handleText(node);
      break;
  }
}

function handleText(textNode) {

  var n=textNode.nodeValue;

  n=n.replace("points", "test");
  textNode.nodeValue=n;
}
if(!done)
{
  done=1;
  walk(document.body);
} 
});