const map = document.querySelector("img");
const party = document.querySelector("#party");

setInterval(()=> {
    if (window.innerHeight / 1439 * 2559 > window.innerWidth){
        map.style.width = window.innerWidth + "px";
        map.style.height = window.innerWidth / 2559 * 1439 + "px";
    }else {
        map.style.height = window.innerHeight + "px";
        map.style.width = window.innerHeight / 1439 * 2559 + "px";
    }
}, 100)

party.addEventListener("dragend",(x)=> {
    console.log(x);
    party.style.left = x.x - 50 + "px";
    party.style.top = x.y - 50 + "px";
})

party.addEventListener("touchmove",(x)=> {
    console.log(x);
    party.style.left = x.x - 50 + "px";
    party.style.top = x.y - 50 + "px";
})