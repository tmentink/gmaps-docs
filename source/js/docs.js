var BP={min_sm:window.matchMedia("(min-width: 576px)"),min_md:window.matchMedia("(min-width: 768px)"),min_lg:window.matchMedia("(min-width: 992px)"),min_xl:window.matchMedia("(min-width: 1200px)"),max_xs:window.matchMedia("(max-width: 575px)"),max_sm:window.matchMedia("(max-width: 767px)"),max_md:window.matchMedia("(max-width: 991px)"),max_lg:window.matchMedia("(max-width: 1199px)"),only_xs:window.matchMedia("(max-width: 575px)"),only_sm:window.matchMedia("(min-width: 576px) and (max-width: 767px)"),only_md:window.matchMedia("(min-width: 768px) and (max-width: 991px)"),only_lg:window.matchMedia("(min-width: 992px) and (max-width: 1199px)"),only_xl:window.matchMedia("(min-width: 1200px)"),max_sm_portrait:window.matchMedia("(max-width: 767px) and (orientation: portrait)"),max_md_portrait:window.matchMedia("(max-width: 991px) and (orientation: portrait)")};!function(){"use strict";var e={};window.$cache=function(t,n,i){"boolean"==typeof n&&(i=n,n=!1);var a=n?n.selector+" "+t:t;return(void 0===e[a]||i)&&(e[a]=n?n.find(t):jQuery(t)),e[a]}}();var JSS=function(e){"use strict";function t(e,t){var n=i(e),a=n.length;return e.insertRule?e.insertRule(t+" { }",a):e.addRule(t,null,a),{sheet:e,index:a,style:n[a].style}}function n(e,t){for(var n=[],a=i(e),r=0,o=a.length;r<o;r++){var d=a[r].selectorText;d&&t===d&&n.push({sheet:e,index:r,style:a[r].style})}return n}function i(e){return e.cssRules||e.rules||[]}function a(e){for(var t=document.styleSheets,n=0,i=t.length;n<i;n++){var a=t[n].href;if(a&&-1!==a.indexOf(e))return t[n]}}function r(e,t){for(var n in t){var i=t[n],a=i.indexOf(" !important");a>0?e.style.setProperty(n,i.substr(0,a),"important"):e.style.setProperty(n,i)}}return e.set=function(e){var i=a(e.styleSheet),o=n(i,e.selector);0===o.length&&o.push(t(i,e.selector));for(var d=0,c=o.length;d<c;d++)r(o[d],e.style)},e}(JSS||(JSS={})),Header=function(e){"use strict";var t={HEADER:"#header"};return e.getOuterHeight=function(){return $cache(t.HEADER).outerHeight()},e}(Header||(Header={})),MainContent=function(e){"use strict";var t={PUSHED:"mainContent--pushed"},n={CODE_SEGMENT:".code.segment",COPY_BUTTON:".label",MAIN_CONTENT:"#mainContent"};return e.removePushed=function(){$cache(n.MAIN_CONTENT).removeClass(t.PUSHED)},e.setPushedStyles=function(){JSS.set({styleSheet:"docs.css",selector:"."+t.PUSHED,style:{top:Header.getOuterHeight()+Sidemenu.getOuterHeight()+"px"}})},e.togglePushed=function(){return $cache(n.MAIN_CONTENT).toggleClass(t.PUSHED)},e.init=function(){e.setPushedStyles(),BP.min_lg.addListener(function(t){t.matches&&e.removePushed()}),$cache(n.CODE_SEGMENT).on("click",n.COPY_BUTTON,function(){window.getSelection().selectAllChildren($(this).next("pre")[0]),document.execCommand("copy")})},MainContent}(MainContent||(MainContent={})),Search=function(e){"use strict";var t={TXT_SEARCH:"#txtSearch"};return e.init=function(){docsearch({apiKey:"447aa2ad1b1bbd7bbd7a7bdb8e374c0a",indexName:"gmapsjs",inputSelector:t.TXT_SEARCH,debug:!0})},e}(Search||(Search={})),Sidemenu=function(e){"use strict";var t={SIDE_MENU:"#sidemenu",TOGGLE_BUTTON:"#btnSidemenu"};return e.getOuterHeight=function(){return $cache(t.SIDE_MENU).outerHeight()},e.init=function(){$cache(t.TOGGLE_BUTTON).on("click",function(){MainContent.togglePushed()})},e}(Sidemenu||(Sidemenu={}));!function(){"use strict";$(document).ready(function(){$cache(".version").html("v"+gmap.version),MainContent.init(),Search.init(),Sidemenu.init()})}();