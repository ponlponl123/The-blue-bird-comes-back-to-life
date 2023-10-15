setTimeout(() => {
    document.querySelector("body>div.stage>div.heart").classList.add('is-active');
    setTimeout(() => {
        document.querySelector("body").classList.add('loaded');
    }, 1.5 * 1000);
}, 1);