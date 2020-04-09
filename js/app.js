Array.from(document.querySelectorAll('a')).forEach(el => {
    let url = `https://${document.location.hostname}`;

    // This looks kind of ugly, but I couldn't find any other way of doing it
    let scriptLoader = `if(typeof ${el.dataset.scriptName}==="function"){${el.dataset.scriptName}();return;}var el=document.createElement('script');el.src='${url}/build/${el.dataset.scriptName}.js';document.body.appendChild(el);`

    el.href = `javascript:(()=>{${scriptLoader}})();`;
});
