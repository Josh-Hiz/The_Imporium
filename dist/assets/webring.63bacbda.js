import"./modulepreload-polyfill.b7f2da20.js";var i,s=[];function a(){return document.getElementById("webring").src.split("id=")[1]}async function c(){const e=a();try{return await(await fetch(`https://sitring.eric.si/${e}/neighbors`,{method:"GET"})).json()}catch(t){console.error(t)}}async function h(){i=await c();for(var e=0;e<i.length;e++)s.push(i[e]);for(var e=0;e<s.length;e++)u(s[e])}var r=[];function u(e){let t=window.document.createElement("a");if(t.href=e.url,t.innerText=e.name,t.target="_blank",r.push(t),r.length===1){let n=window.document.createElement("span");n.innerText=" \u2022 This site is part of the Stevens Students Webring \u2022 ",r.push(n)}r.length===3&&g(r)}function g(e){let t=document.createTextNode("<--"),n=document.createTextNode("-->");e.unshift(t),e.push(n);for(var o=0;o<e.length;o++)document.getElementById("ring").appendChild(e[o])}h();