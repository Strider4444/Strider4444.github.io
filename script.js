const map = document.querySelector("video");
const party = document.querySelector("#party");
const circusInside = document.querySelector("#circusInside");
const debug = document.querySelector("#debug");

setInterval(()=> {
    if (window.innerHeight / 1439 * 2559 > window.innerWidth){
        map.style.width = window.innerWidth + "px";
        map.style.height = window.innerWidth / 2559 * 1439 + "px";
    }else {
        map.style.height = window.innerHeight + "px";
        map.style.width = window.innerHeight / 1439 * 2559 + "px";
    }
    party.style.width = map.clientWidth / 40 + "px";
    party.style.height = map.clientWidth / 40 + "px";
    circusInside.style.width = map.clientWidth / 20 + "px";
    circusInside.style.left = map.clientWidth / 3.38 + "px";
    circusInside.style.top = map.clientHeight / 1.74 + "px";
}, 100)

party.addEventListener("dragend",(x)=> {
    console.log(x);
    party.style.left = x.x - (party.width / 2) + "px";
    party.style.top = x.y - (party.width / 2) + "px";
})

party.addEventListener("touchmove",(x)=> {
    console.log(x);
    debug.textContent = x.changedTouches[0].pageX + ", " + x.changedTouches[0].pageY + ", " + x.changedTouches;
    party.style.left = x.changedTouches[0].pageX - 50 + "px";
    party.style.top = x.changedTouches[0].pageY - 50 + "px";
})

circusInside.addEventListener("click",()=> {
    if (circusInside.style.opacity == 1){
        circusInside.style.opacity = 0;
    }else {
        circusInside.style.opacity = 1;
    }
    
})

circusInside.addEventListener("touchcancel",()=> {
    if (circusInside.style.opacity == 1){
        circusInside.style.opacity = 0;
    }else {
        circusInside.style.opacity = 1;
    }
    
})