;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../helpers/helpers.js';
import {GoBack} from '../global/modules/goBack.js';
//───────────────────────────────────Imports



//───────────────────────────────────Footer
const Footer = () => {
    const footer = createElement('footer');

    return footer({id: 'footer'}, [
        GoBack()
    ]);
};
//───────────────────────────────────Footer



//───────────────────────────────────Exports
export {Footer};
//───────────────────────────────────Exports
//# sourceMappingURL=_footer.js.map
