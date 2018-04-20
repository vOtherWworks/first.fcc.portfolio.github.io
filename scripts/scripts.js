/**************************************************************************************/
//───────────────────────────────────Start User Scripts
/**************************************************************************************/
;'use strict';



//───────────────────────────────────Check serviceWorker
const __registrySW__ = false;(() => {
    if (navigator.onLine && ('serviceWorker' in navigator) && __registrySW__) {
        navigator.serviceWorker
        .register('../service_worker.js', {
            scope: '/'
        }).then(registration => {
            console.log(`Service worker registration succeeded: ${registration}`);
        }).catch(error => {
            console.log(`Service worker registration failed: ${error}`);
        });
    } else {
        console.log('Service workers are not supported or disabled');
    }
})();
//───────────────────────────────────Check serviceWorker



//───────────────────────────────────Modules

//───────────────────────────────────Modules



//───────────────────────────────────Modules

//───────────────────────────────────Modules
//# sourceMappingURL=_scripts.js.map
