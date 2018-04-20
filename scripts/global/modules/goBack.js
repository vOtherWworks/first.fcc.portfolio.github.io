;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../../helpers/helpers.js';
import {RoutingURL} from '../global.js';
//───────────────────────────────────Imports



//───────────────────────────────────GoBack
const GoBack = () => {
    const a = createElement('a');

    let goBack = a({href: '#', class: 'go_back', rel: 'nofollow noopener'}, [
        '← Go Back'
    ]);

    return goBack;
};
//───────────────────────────────────GoBack



//───────────────────────────────────GoBackListener
const GoBackListener = () => {
    const goBackLinks = document.querySelectorAll('.go_back');

    [].forEach.call(goBackLinks, (goBackLink) => goBackLink.addEventListener('click', (event) => {
        event.preventDefault();
        // RoutingURL((event.currentTarget.dataset.from === '#') ? '#' : 'all_projects', null, false);
        window.history.back();
    }, {once: false}));
};
//───────────────────────────────────GoBackListener



//───────────────────────────────────Export
export {
    GoBack,
    GoBackListener
};
//───────────────────────────────────Export
//# sourceMappingURL=_goBack.js.map
