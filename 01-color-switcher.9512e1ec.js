const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0})),e.disabled=!0;let d=null;
//# sourceMappingURL=01-color-switcher.9512e1ec.js.map
