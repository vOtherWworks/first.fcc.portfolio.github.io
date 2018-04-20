;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../helpers/helpers.js';

import {myWorks} from '../helpers/other.js';
import {ProjectWrapper} from '../global/modules/project_wrapper.js';
//───────────────────────────────────Imports



//───────────────────────────────────Main
const Main = () => {
    const main = createElement('main');

    return main({id: 'main'}, [
        ...ProjectWrapper(true, myWorks)
    ]);
};
//───────────────────────────────────Main



//───────────────────────────────────Exports
export {Main};
//───────────────────────────────────Exports
//# sourceMappingURL=_main.js.map
