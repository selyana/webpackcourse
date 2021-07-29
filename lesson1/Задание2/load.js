function loadScript(url, callback) {
    let moduleNames;

    if (typeof url === 'string') {
        moduleNames = [url];
    } else if (Array.isArray(url)) {
        moduleNames = url;
    } else if (typeof url === 'function') {
        const actualUrl = url();
        moduleNames = [actualUrl];
    } else {
        throw TypeError('Invalid url argument type.')
    }

    for (let i = 0; i < moduleNames.length; i++) {
        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = moduleNames[i];
        if (i === moduleNames.length - 1 && callback) {
            element.onload = callback;
        }
        document.body.appendChild(element);
    }
}

loadScript('./commnon.js', () => {
    common.lol();
    /// .... 10000 lines....
})

loadScript(['./common.js', './utils.js'], () => {
    // all modules have been loaded.
    common && utils()
})

loadScript(() => {
    if (navigator.appName == 'Firefox') {
        return './common.js'
    } else {
        return './utils.js'
    }
}, () => {
    // loaded.
})