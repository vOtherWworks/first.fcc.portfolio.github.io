;'use strict';



//───────────────────────────────────PreLoader
import {PreLoader} from './modules/preloader.js';
document.querySelector('#body').append(PreLoader());
//───────────────────────────────────PreLoader



//───────────────────────────────────

//───────────────────────────────────



//───────────────────────────────────Helpers
const historyPushState = (state, title, url) => {
    window.history.pushState(state, title, url);
};
//───────────────────────────────────Helpers



//───────────────────────────────────RoutingURL
import {fadeOut, fadeIn} from '../helpers/helpers.js';

import {myWorks} from '../helpers/other.js';

import {StartIndexBody} from '../index/IndexBody.js';
import {StartProjectBody} from '../project/ProjectBody.js';
import {StartAllProjectsBody} from '../all_projects/AllProjectsBody.js';
import {Start404Body} from '../404/NotFoundBody.js';



const RoutingURL = (pageURL, push = true) => {
    fadeIn('#preloader_wrapper', 10);


    let thisURL = pageURL || location.hash;
    thisURL = thisURL.replace(/#/g, '');
    console.log('thisURL:', thisURL);


    if (thisURL === '') {
        StartIndexBody();
        document.querySelector('head title').textContent = 'FreeCodeCamp';
        push && historyPushState({url: `#`}, 'FreeCodeCamp', `#`);
    }
    else if (thisURL in myWorks) {
        // StartProjectBody(thisURL, myWorks[thisURL].projectImages);
        StartProjectBody(thisURL);
        document.querySelector('head title').textContent = `${thisURL}`;
        push && historyPushState({url: `#${thisURL}`}, `${thisURL}`, `#${thisURL}`);
    }
    else if (thisURL === 'all_projects') {
        StartAllProjectsBody('#');
        document.querySelector('head title').textContent = 'All Projects';
        push && historyPushState({url: `#${thisURL}`}, 'All Projects', `#${thisURL}`);
    }
    else {
        Start404Body();
        document.querySelector('head title').textContent = '404 | Not Found';
        push && historyPushState({url: `#${thisURL}`}, '404 | Not Found', `#NotFound-${thisURL.replace('NotFound-', '')}`);
    }


    window.scrollTo(0, 0);
    fadeOut('#preloader_wrapper', 10);
};
RoutingURL(false, false);
//───────────────────────────────────RoutingURL



//───────────────────────────────────PopState
window.addEventListener('popstate', (event) => {
    // event.preventDefault();
    //if (history.state) {
    console.log('history.state is true?',!!history.state)
    console.log('history.state:', history.state)
    console.log('history.state.url or false:', (history.state.url) ? history.state.url : false))
        RoutingURL((history.state.url) ? history.state.url : false), false);
    /*} else {
        RoutingURL();
    }*/
});
//───────────────────────────────────PopState



//───────────────────────────────────

//───────────────────────────────────



//───────────────────────────────────Exports
export {RoutingURL};
//───────────────────────────────────Exports
//# sourceMappingURL=_global.js.map
