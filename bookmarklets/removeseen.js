(() => {
    Array.from(document.querySelectorAll('.resume-playback-progress-bar'))
    .map(el => {
        return el.parentNode.parentNode.parentNode.parentNode.parentNode
    })
    .forEach(el => el.remove())
})();