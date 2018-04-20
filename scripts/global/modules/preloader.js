;'use strict';


//───────────────────────────────────Imports
import {createElement} from '../../helpers/helpers.js';
//───────────────────────────────────Imports



//───────────────────────────────────PreLoader
const PreLoader = () => {
    const div = createElement('div');

    let preloader = div({id: 'preloader'}, false);
    let preloaderWrapper = div({id: 'preloader_wrapper'}, [
        preloader
    ]);

    return preloaderWrapper;
};
//───────────────────────────────────PreLoader



//───────────────────────────────────Export
export {PreLoader};
//───────────────────────────────────Export
//# sourceMappingURL=_preloader.js.map
