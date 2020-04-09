window.videospeed = function () {
    var rate = parseFloat(prompt('Velg hastighet').replace(',','.'));
    Array.from(document.querySelectorAll('video')).forEach(el => {
        el.playbackRate = rate;
    });
};
window.videospeed();
