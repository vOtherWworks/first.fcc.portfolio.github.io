;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../helpers/helpers.js';
import {GoBack} from '../global/modules/goBack.js';
//───────────────────────────────────Imports



//───────────────────────────────────Header
/*const Header = () => {
    const header = createElement('header');

    return header({id: 'header'}, [
        GoBack()
    ]);
};*/


const Header = () => createElement('header')({id: 'header'}, [
    GoBack()
]);
//───────────────────────────────────Header



//───────────────────────────────────Exports
export {Header};
//───────────────────────────────────Exports
//# sourceMappingURL=_header.js.map
