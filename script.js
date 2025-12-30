const video = document.querySelector("video");

setInterval(()=> {
    video.style.height = window.innerHeight + "px";
    video.style.width = window.innerWidth + "px";
}, 100)
