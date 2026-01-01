const map = document.querySelector("img");

setInterval(()=> {
    if (window.innerHeight / 1439 * 2559 > window.innerWidth){
        map.style.width = window.innerWidth + "px";
        map.style.height = window.innerWidth / 2559 * 1439 + "px";
    }else {
        map.style.height = window.innerHeight + "px";
        map.style.width = window.innerHeight / 1439 * 2559 + "px";
    }
}, 100)
