(() => {
    Array.from(document.querySelectorAll('video'))
    .map(v => {
        return v.src
            ? v.src
            : v.querySelector('source')
                ? v.querySelector('source').src
                : ''
    })
    .filter(s => !!s && s != 'about:blank')
    .forEach(s => window.open(s));
})();