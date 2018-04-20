;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../helpers/helpers.js';
//───────────────────────────────────Imports



//───────────────────────────────────Footer
const Footer = () => {
    const footer = createElement('footer');
    const span = createElement('span');
    const a = createElement('a');

    return footer({id: 'footer'}, [
        span({class: 'copyright span_text'}, [
            `\xA9 ${new Date().getFullYear()} - `,
            span({class: 'span_title'}, [
                'All rights reserved'
            ])
        ]),
        span({class: 'span_love'}, [
            'With love from Ukraine, ',
            a({href: 'https://github.com/Vastted', class: 'link_Andr'}, [
                'Andrey'
            ])
        ])
    ]);
};
//───────────────────────────────────Footer



//───────────────────────────────────Exports
export {Footer};
//───────────────────────────────────Exports
//# sourceMappingURL=_footer.js.map
