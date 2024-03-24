// @ts-ignore
// Opera 8.0+
const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// @ts-ignore
// Firefox 1.0+
const isFirefox = typeof InstallTrigger !== 'undefined';
// @ts-ignore
// Safari 3.0+ "[object HTMLElementConstructor]" 
const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
// @ts-ignore
// Internet Explorer 6-11
const isIE = /*@cc_on!@*/false || !!document.documentMode;
// @ts-ignore
// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;
// @ts-ignore
// Chrome 1 - 79
const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
const isBlink = (isChrome || isOpera) && !!window.CSS;

export default function GetBrowser() {
    if (isOpera) {
        return "Opera";
    } else if (isFirefox) {
        return "Firefox";
    } else if (isSafari) {
        return "Safari";
    } else if (isIE) {
        return "Internet Explorer";
    } else if (isEdge) {
        return "Edge";
    } if (isEdgeChromium) {
        return "Edge Chromium";
    } else if (isChrome) {
        return "Chrome";
    } else if (isBlink) {
        return "Blink";
    } else {
        return "Unknown";
    }
}