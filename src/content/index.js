import toc from 'markdown-toc'

const placeholder = '<!-- toc -->';
//content script
let clickedEl = null;
document.addEventListener("mousedown", function(event){
    //right click
    if(event.button == 2) {
        clickedEl = event.target;
    }
}, true);

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "mdTocHere") {
        mdTocHere();
    }
});

function mdTocHere(){
    if(clickedEl){
        let md = clickedEl.value;
        if(md.indexOf(placeholder) === -1){
            md = placeholder + md;
        }
        let result = toc.insert(md).replace(/\[(.*)\](\(#.*\))/g,'$1')
        clickedEl.value = result;
    }
}
