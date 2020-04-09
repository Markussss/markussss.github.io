Array.from(document.querySelectorAll('a')).forEach(el => {
    let url = `https://${document.location.hostname}`;

    let scriptLoader = `var el=document.createElement('script');el.src='${url}/build/${el.dataset.scriptName}.js';document.body.appendChild(el);${el.dataset.scriptName}();`

    el.href = `javascript:(()=>{${scriptLoader}})();`;
});
