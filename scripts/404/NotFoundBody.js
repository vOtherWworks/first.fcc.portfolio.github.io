;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../helpers/helpers.js';

import {PreLoader} from '../global/modules/preloader.js';
import {Main} from './main.js';
//───────────────────────────────────Imports



//───────────────────────────────────NotFoundBody
const NotFoundBody = () => {
    const body = createElement('body');
    const link = createElement('link');
    const script = createElement('script');

    let pageNotFoundBody = body({id: 'body'}, [
        PreLoader(),

        link({href: './styles/404/main.css', rel: 'stylesheet'}, false),
        Main(),

        script({src: './scripts/scripts.js', defer: ''}, false)
    ]);
    return pageNotFoundBody;
    
    /*let pageNotFoundBody = [
        PreLoader(),

        stylesMain,
        Main(),

        scriptsScripts
    ];
    return pageNotFoundBody;*/
};
//───────────────────────────────────NotFoundBody



//───────────────────────────────────StartNotFoundBody
const Start404Body = () => {
    document.querySelector('#body').replaceWith(NotFoundBody());
    // document.querySelector('#body').append(...NotFoundBody());

};
//───────────────────────────────────StartNotFoundBody



//───────────────────────────────────Exports
export {
    NotFoundBody,

    Start404Body
};
//───────────────────────────────────Exports
//# sourceMappingURL=_NotFoundBody.js.map
