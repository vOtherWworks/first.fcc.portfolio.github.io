;'use strict';



//───────────────────────────────────Helpers
import {createElement} from '../helpers/helpers.js';
//───────────────────────────────────Helpers



//───────────────────────────────────Main
const Main = () => {
    const main = createElement('main');
    const span = createElement('span');
    const p = createElement('p');
    const a = createElement('a');


    let pageMain = main({id: 'page_404'}, [
        span({class: 'text_404'}, [
            '404'
        ]),
        p({class: 'ahhhhh'}, [
            'Got lost? how? why? ahhhhh...'
        ]),
        a({href: '/', class: 'go_home', rel: 'nofollow noopener'}, [
            'Take Me home'
        ])
    ]);
    return pageMain;
};
//───────────────────────────────────Main



//───────────────────────────────────Exports
export {Main};
//───────────────────────────────────Exports
//# sourceMappingURL=_main.js.map
