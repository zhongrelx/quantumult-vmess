(window["webpackJsonpquantumult-vmess"]=window["webpackJsonpquantumult-vmess"]||[]).push([[0],{11:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(11),n(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,n){"use strict";(function(e){var a=n(1),o=n(0),c=n.n(o),r=n(5);n(20);function i(e){return c.a.createElement("textarea",{className:"main-item input-view",rows:"5",value:e.content,onChange:e.onChange,placeholder:"\u8f93\u5165 vmess \u94fe\u63a5\uff0c\u591a\u4e2a\u94fe\u63a5\u4f7f\u7528\u6362\u884c\u9694\u5f00"})}function u(e){var t=e.items.map(function(t){return c.a.createElement("div",{key:t},c.a.createElement("input",{type:"radio",id:t,value:t,name:t,checked:e.current===t,onChange:e.onChange}),c.a.createElement("label",{htmlFor:t},t))});return c.a.createElement("div",{className:"main-item method-selector "},t)}function s(e){var t=e.content.map(function(e){return c.a.createElement("div",{className:"output-item",key:e},e)});return c.a.createElement("div",{className:"main-item output-view"},t)}function l(e){return c.a.createElement(r.CopyToClipboard,{text:e.text,onCopy:e.onCopy},c.a.createElement("span",{className:"copy-btn"},"\u590d\u5236\u94fe\u63a5\u5e76\u6253\u5f00Quantumlt"))}function m(t,n,a){return t.split("\n").map(function(t){return function(t,n,a){if(/^vmess:\/\/(.*?)$/.test(t)){var o=(i=RegExp.$1,i=(i+=Array(5-i.length%4).join("=")).replace(/-/g,"+").replace(/_/g,"/"),new e(i,"base64").toString());if(function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(o)){var c=JSON.parse(o),r=",obfs=".concat("ws"===c.net?"ws":"http",',obfs-path="').concat(c.path||"/",'",obfs-header="Host:').concat(c.host||c.add,"[Rr][Nn]User-Agent:").concat("Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A5366a",'"');return"".concat(c.ps," = vmess,").concat(c.add,",").concat(c.port,",").concat(n,',"').concat(c.id,'",group=').concat(a,",over-tls=").concat("tls"===c.tls?"true":"false",",certificate=1").concat("none"===c.type&&"ws"!==c.net?"":r)}return""}var i}(t,n,a)}).filter(function(e){return e})}t.a=function(){var e=Object(o.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],p=Object(o.useState)("none"),f=Object(a.a)(p,2),d=f[0],h=f[1],v=Object(o.useState)("Fndroid"),g=Object(a.a)(v,2),w=g[0];return g[1],c.a.createElement("div",{className:"App"},c.a.createElement(i,{content:n,onChange:function(e){r(e.target.value)}}),c.a.createElement(u,{items:["none","aes-128-cfb","aes-128-gcm","chacha20-ietf-poly1305"],current:d,onChange:function(e){h(e.target.value)}}),c.a.createElement(s,{content:m(n,d,w)}),c.a.createElement(l,{text:m(n,d,w),onCopy:function(e){console.log("copy done"),window.location.href="quantumult://"}}))}}).call(this,n(12).Buffer)},6:function(e,t,n){e.exports=n(21)}},[[6,1,2]]]);
//# sourceMappingURL=main.455161a1.chunk.js.map