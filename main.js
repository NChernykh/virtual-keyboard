!function(){"use strict";function e(e){return"Enter"===e||"CapsLock"===e||"Tab"===e||"Backspace"===e||"Delete"===e||"Del"===e||"ArrowUp"===e||"ArrowLeft"===e||"ArrowDown"===e||"ArrowRight"===e||"Shift"===e||"ShiftLeft"===e||"ShiftRight"===e||"Ctrl"===e||"ControlLeft"===e||"ControlRight"===e||"Alt"===e||"AltLeft"===e||"AltRight"===e||"MetaLeft"===e||"MetaRight"===e||"Win"===e}function t(e){return"Delete"===e.code?"Del":"CapsLock"===e.key?"CapsLock":"Shift"===e.key?"Shift":"Tab"===e.key?"Tab":"Backspace"===e.key?"Backspace":"Enter"===e.key?"Enter":e.metaKey?"Win":e.ctrlKey?"Ctrl":e.altKey?"Alt":(function(e){"ArrowUp"!==e.code&&"ArrowLeft"!==e.code&&"ArrowDown"!==e.code&&e.code}(e),"")}function y(){document.querySelectorAll('[key="key"]').forEach((e=>{for(const t of e.children)t.classList.contains("hidden")||(t.querySelector(".caseDown").classList.toggle("hidden"),t.querySelector(".caseUp").classList.toggle("hidden"))}))}function K(e){const t=document.querySelector(".textarea"),y=t.value.split(""),K=t.selectionEnd;y.splice(K,0,e),t.value=y.join(""),t.selectionStart=K+1,t.selectionEnd=K+1}function a(e){const t=document.querySelector(".textarea"),a=t.value.split(""),l=t.selectionEnd;"Enter"===e?K("\n"):"Space"===e||""===e?K(" "):"Tab"===e?K("\t"):"Del"===e||"Delete"===e?(a.splice(l,1),t.value=a.join(""),t.selectionStart=l,t.selectionEnd=l):"Backspace"===e?(a.splice(l-1,1),t.value=a.join(""),t.selectionStart=l-1,t.selectionEnd=l-1):"ArrowUp"===e?K("⯅"):"ArrowDown"===e?K("⯆"):"ArrowLeft"===e?K("⯇"):"ArrowRight"===e?K("⯈"):"CapsLock"===e&&(document.querySelector(`[data=${e}]`).classList.toggle("active"),y())}function l(t){if(!t.target.closest(".btn"))return;t.preventDefault();const y=t.target.closest(".btn").innerText;a(t.target.closest(".btn").getAttribute("data")),e(y)||K(y)}function c(t){if(t.preventDefault(),!document.querySelector(`[data=${t.code}]`))return;const l=document.querySelector(`[data=${t.code}]`);"CapsLock"!==t.code&&l.classList.add("active"),"Shift"!==t.key||t.repeat||y(),a(t.code),e(t.code)||K(l.innerText)}function o(e){if(document.querySelector(`[data=${e.code}]`))if("Shift"===e.key)document.querySelector(`[data=${e.code}]`).classList.remove("active"),y();else{if("CapsLock"===e.key)return;document.querySelector(`[data=${e.code}]`).classList.remove("active")}}var r=[[{key:"`",code:"Backquote",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"~"},{key:"1",code:"Digit1",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"!"},{key:"2",code:"Digit2",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"@"},{key:"3",code:"Digit3",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"#"},{key:"4",code:"Digit4",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"$"},{key:"5",code:"Digit5",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"%"},{key:"6",code:"Digit6",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"^"},{key:"7",code:"Digit7",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"&"},{key:"8",code:"Digit8",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"*"},{key:"9",code:"Digit9",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"("},{key:"0",code:"Digit0",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:")"},{key:"-",code:"Minus",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"_"},{key:"=",code:"Equal",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"+"},{key:"Backspace",code:"Backspace",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}],[{key:"Tab",code:"Tab",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"q",code:"KeyQ",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"w",code:"KeyW",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"e",code:"KeyE",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"r",code:"KeyR",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"t",code:"KeyT",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"y",code:"KeyY",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"u",code:"KeyU",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"i",code:"KeyI",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"o",code:"KeyO",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"p",code:"KeyP",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"[",code:"BracketLeft",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"]",code:"BracketRight",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"\\",code:"Backslash",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"~"},{key:"Delete",code:"Delete",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}],[{key:"CapsLock",code:"CapsLock",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"a",code:"KeyA",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"s",code:"KeyS",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"d",code:"KeyD",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"f",code:"KeyF",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"g",code:"KeyG",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"h",code:"KeyH",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"j",code:"KeyJ",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"k",code:"KeyK",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"l",code:"KeyL",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:";",code:"Semicolon",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"'",code:"Quote",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Enter",code:"Enter",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}],[{key:"Shift",code:"ShiftLeft",ctrlKey:!1,shiftKey:!0,altKey:!1,metaKey:!1},{key:"z",code:"KeyZ",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"x",code:"KeyX",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"c",code:"KeyC",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"v",code:"KeyV",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"b",code:"KeyB",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"n",code:"KeyN",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"m",code:"KeyM",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:",",code:"Comma",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:".",code:"Period",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"/",code:"Slash",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ArrowUp",code:"ArrowUp",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Shift",code:"ShiftRight",ctrlKey:!1,shiftKey:!0,altKey:!1,metaKey:!1}],[{key:"Control",code:"ControlLeft",ctrlKey:!0,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Meta",code:"MetaLeft",ctrlKey:!1,shiftKey:!1,altKey:!0,metaKey:!0},{key:"Alt",code:"AltLeft",ctrlKey:!1,shiftKey:!1,altKey:!0,metaKey:!1},{key:" ",code:"Space",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Alt",code:"AltRight",ctrlKey:!1,shiftKey:!1,altKey:!0,metaKey:!1},{key:"ArrowLeft",code:"ArrowLeft",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ArrowDown",code:"ArrowDown",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ArrowRight",code:"ArrowRight",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Control",code:"ControlRight",ctrlKey:!0,shiftKey:!1,altKey:!1,metaKey:!1}]],i=[[{key:"ё",code:"Backquote",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"1",code:"Digit1",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"!"},{key:"2",code:"Digit2",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:'"'},{key:"3",code:"Digit3",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"№"},{key:"4",code:"Digit4",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:";"},{key:"5",code:"Digit5",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"%"},{key:"6",code:"Digit6",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:":"},{key:"7",code:"Digit7",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"?"},{key:"8",code:"Digit8",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"*"},{key:"9",code:"Digit9",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"("},{key:"0",code:"Digit0",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:")"},{key:"-",code:"Minus",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"_"},{key:"=",code:"Equal",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"+"},{key:"Backspace",code:"Backspace",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}],[{key:"Tab",code:"Tab",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"й",code:"KeyQ",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ц",code:"KeyW",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"у",code:"KeyE",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"к",code:"KeyR",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"е",code:"KeyT",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"н",code:"KeyY",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"г",code:"KeyU",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ш",code:"KeyI",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"щ",code:"KeyO",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"з",code:"KeyP",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"х",code:"BracketLeft",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ъ",code:"BracketRight",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"\\",code:"Backslash",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,secondValue:"/"},{key:"Delete",code:"Delete",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}],[{key:"CapsLock",code:"CapsLock",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ф",code:"KeyA",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ы",code:"KeyS",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"в",code:"KeyD",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"а",code:"KeyF",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"п",code:"KeyG",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"р",code:"KeyH",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"о",code:"KeyJ",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"л",code:"KeyK",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"д",code:"KeyL",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ж",code:"Semicolon",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"э",code:"Quote",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Enter",code:"Enter",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}],[{key:"Shift",code:"ShiftLeft",ctrlKey:!1,shiftKey:!0,altKey:!1,metaKey:!1},{key:"я",code:"KeyZ",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ч",code:"KeyX",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"с",code:"KeyC",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"м",code:"KeyV",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"и",code:"KeyB",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"т",code:"KeyN",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ь",code:"KeyM",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"б",code:"Comma",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ю",code:"Period",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:".",code:"Slash",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ArrowUp",code:"ArrowUp",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Shift",code:"ShiftRight",ctrlKey:!1,shiftKey:!0,altKey:!1,metaKey:!1}],[{key:"Control",code:"ControlLeft",ctrlKey:!0,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Meta",code:"MetaLeft",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!0},{key:"Alt",code:"AltLeft",ctrlKey:!1,shiftKey:!1,altKey:!0,metaKey:!1},{key:" ",code:"Space",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Alt",code:"AltRight",ctrlKey:!1,shiftKey:!1,altKey:!0,metaKey:!1},{key:"ArrowLeft",code:"ArrowLeft",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ArrowDown",code:"ArrowDown",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"ArrowRight",code:"ArrowRight",ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1},{key:"Control",code:"ControlRight",ctrlKey:!0,shiftKey:!1,altKey:!1,metaKey:!1}]];function d(e,t,y,K,a){let l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;const r=document.createElement(e);return t&&r.append(t),y&&r.append(...y),K&&r.classList.add(...K.split(" ")),a&&l&&r.setAttribute(a,l),c&&o&&r.setAttribute(c,o),r}function s(e){return localStorage.lang===e?"langEn":"hidden"}document.title="Virtual Keyboard",document.body.append(d("h1","RSS Виртуальная клавиатура",null,"title")),document.body.append(d("textarea",null,null,"textarea","id","textarea","placeholder","Print me")),function(){document.body.append(d("div",null,null,"keyboard"));const y=r.flat(),K=i.flat();for(let a=0;a<y.length;a++){const l=y[a],c=K[a],o=e(l.code)?`${t(l)}`:l,r=e(c.code)?`${t(c)}`:c,i=d("div",null,[d("div",null,[d("span",null,`${e(l.code)?o.key||o:r.key}`,`caseDown ${s("ru")}`),d("span",null,`${e(l.code)?o.key||o:r.hasOwnProperty("secondValue")?r.secondValue:r.key.toUpperCase()}`,"caseUp hidden"),d("span",null,`${e(l.code)?o.key||o:r.key.toUpperCase()}`,"caps hidden"),d("span",null,`${e(l.code)?o.key||o:r.hasOwnProperty("secondValue")?r.secondValue:r.key}`,"shiftCaps hidden")],`ru ${s("ru")}`),d("div",null,[d("span",null,`${o.key||o}`,`caseDown ${s("en")}`),d("span",null,`${e(c.code)?o.key||o:o.hasOwnProperty("secondValue")?o.secondValue:o.key.toUpperCase()}`,"caseUp hidden"),d("span",null,`${e(c.code)?o.key||o:o.key.toUpperCase()}`,"caps hidden"),d("span",null,`${o.key||o}`,"shiftCaps hidden")],`en ${s("en")}`)],e(l.code)?"btn fn":"btn","data",l.code,"key",e(l.code)?"fn":"key");document.querySelector(".keyboard").append(i)}}(),function(){const e=new Set,t=["Control","Alt"];document.addEventListener("keydown",(y=>{e.add(y.key);for(const y of t)if(!e.has(y))return;e.clear(),"en"===localStorage.lang?localStorage.setItem("lang","ru"):"ru"===localStorage.lang&&localStorage.setItem("lang","en"),document.querySelectorAll(".ru").forEach((e=>e.classList.toggle("hidden"))),document.querySelectorAll(".en").forEach((e=>e.classList.toggle("hidden"))),document.querySelectorAll(".caseDown").forEach((e=>e.classList.toggle("hidden")))})),document.addEventListener("keyup",(t=>{e.delete(t.key)}))}(),document.addEventListener("keydown",c),document.addEventListener("keyup",o),document.addEventListener("mousedown",l),document.body.append(d("p","Клавиатура создана в операционной системе Windows",null)),document.body.append(d("p","Для переключения языка комбинация: левыe ctrl + alt",null))}();