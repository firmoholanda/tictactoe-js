!function(e){var n={};function t(l){if(n[l])return n[l].exports;var r=n[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(l,r,function(n){return e[n]}.bind(null,r));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){const t=(e,n,t)=>({playerName:e,token:n,playerTurn:t}),l=(()=>{let e,n;const l=[],r=(()=>{let e;const n=()=>{[...document.querySelectorAll(".cell")].forEach(e=>{e.style.pointerEvents="auto"})};return{init:()=>{e=[null,null,null,null,null,null,null,null,null];for(let e=0;e<9;e+=1)document.getElementById("cell"+e).innerHTML="";document.getElementById("winner-text").innerHTML="",n()},setCell:(n,t)=>{e[n]=t},checkWinCondition:()=>{let n=!1;return null!=e[0]&&e[0]===e[1]&&e[1]===e[2]&&(n=!0),null!=e[3]&&e[3]===e[4]&&e[4]===e[5]&&(n=!0),null!=e[6]&&e[6]===e[7]&&e[7]===e[8]&&(n=!0),null!=e[0]&&e[0]===e[3]&&e[3]===e[6]&&(n=!0),null!=e[1]&&e[1]===e[4]&&e[4]===e[7]&&(n=!0),null!=e[2]&&e[2]===e[5]&&e[5]===e[8]&&(n=!0),null!=e[0]&&e[0]===e[4]&&e[4]===e[8]&&(n=!0),null!=e[6]&&e[6]===e[4]&&e[4]===e[2]&&(n=!0),n},checkDrawCondition:()=>{let n=!0;return e.includes(null)&&(n=!1),n},blockCells:()=>{[...document.querySelectorAll(".cell")].forEach(e=>{e.style.pointerEvents="none"})},unblockCells:n}})(),o=()=>{[e.playerTurn,n.playerTurn]=[n.playerTurn,e.playerTurn],e.playerTurn?document.getElementById("info").innerText=e.playerName+" 's move":document.getElementById("info").innerText=n.playerName+" 's move"},u=()=>{const e=r.checkWinCondition(),n=r.checkDrawCondition();e&&(r.blockCells(),document.getElementById("info").innerText="Congratulations!",document.getElementById("winner-text").innerText="Winner!",document.getElementById("btnReset").style.display="inline"),n&&(r.blockCells(),document.getElementById("info").innerText="game over",document.getElementById("winner-text").innerText="Draw!",document.getElementById("btnReset").style.display="inline")};return{init:()=>{r.init(),e=t(document.getElementById("player01Name").value,"X",!0),n=t(document.getElementById("player02Name").value,"O",!1),document.getElementById("info").innerText=e.playerName+" 's move",(()=>{for(let e=0;e<9;e+=1)l[e]=document.getElementById("cell"+e)})()},turnEnd:o,moveTile:()=>{function n(n,t){n.addEventListener("click",()=>{e.playerTurn?n.innerHTML="X":n.innerHTML="O",r.setCell(t,n.innerHTML),o(),u(),n.style.pointerEvents="none"})}for(let e=0;e<9;e+=1)n(l[e],e)},checkResult:u}})();document.getElementById("gameStart").addEventListener("click",()=>{l.init(),l.moveTile(),document.getElementById("btnNewGame").style.display="none"}),document.getElementById("btnReset").addEventListener("click",()=>{window.location.reload()})}]);