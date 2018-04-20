;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../helpers/helpers.js';

import {PreLoader} from '../global/modules/preloader.js';
import {GoBackListener} from '../global/modules/goBack.js';

import {Main} from './main.js';
import {Header} from './header.js';
import {Footer} from './footer.js';

import {RoutingURL} from '../global/global.js';
//───────────────────────────────────Imports



//───────────────────────────────────AllProjectsBody
const AllProjectsBody = (fromPage) => {
    const body = createElement('body');
    const link = createElement('link');
    const script = createElement('script');

    return body({id: 'body'}, [
        PreLoader(),

        link({href: './styles/all_projects/header.css', rel: 'stylesheet'}, false),
        Header(fromPage),

        link({href: './styles/all_projects/main.css', rel: 'stylesheet'}, false),
        Main(),

        link({href: './styles/all_projects/footer.css', rel: 'stylesheet'}, false),
        Footer(),

        link({href: './styles/all_projects/media/phones.css', rel: 'stylesheet', media: 'screen and (min-width: 480px)'}, false),
        link({href: './styles/all_projects/media/tablets.css', rel: 'stylesheet', media: 'screen and (min-width: 768px)'}, false),
        link({href: './styles/all_projects/media/desktops.css', rel: 'stylesheet', media: 'screen and (min-width: 1024px)'}, false),

        script({src: './scripts/scripts.js', defer: ''}, false)
    ]);
    
    /*return [
        PreLoader(),

        link({href: './styles/all_projects/header.css', rel: 'stylesheet'}, false),
        Header(fromPage),

        link({href: './styles/all_projects/main.css', rel: 'stylesheet'}, false),
        Main(),

        link({href: './styles/all_projects/footer.css', rel: 'stylesheet'}, false),
        Footer(),

        link({href: './styles/all_projects/media/phones.css', rel: 'stylesheet', media: 'screen and (min-width: 480px)'}, false),
        link({href: './styles/all_projects/media/tablets.css', rel: 'stylesheet', media: 'screen and (min-width: 768px)'}, false),
        link({href: './styles/all_projects/media/desktops.css', rel: 'stylesheet', media: 'screen and (min-width: 1024px)'}, false),

        script({src: './scripts/scripts.js', defer: ''}, false)
    ];*/
};
//───────────────────────────────────AllProjectsBody



//───────────────────────────────────Listeners
const AllProjectsBodyListeners = () => {
    //───────────────────────────────────AllProjectsBack
    /*const AllProjectsBack = () => {
        const allProjectsBackHeader = document.querySelector('#header .go_back');
        const allProjectsBackFooter = document.querySelector('#footer .go_back');

        allProjectsBackHeader.addEventListener('click', (event) => {
            event.preventDefault();
            RoutingURL('#');
        }, {once: false});

        allProjectsBackFooter.addEventListener('click', (event) => {
            event.preventDefault();
            RoutingURL('#');
        }, {once: false});
    };
    AllProjectsBack();*/
    //───────────────────────────────────AllProjectsBack



    //───────────────────────────────────PortfolioRoutingURL
    const PortfolioRoutingURL = () => {
        const portfolioItemsLink = document.querySelectorAll('#main .project_info');

        [].forEach.call(portfolioItemsLink, (portfolioItemLink) => portfolioItemLink.addEventListener('click', (event) => {
            event.preventDefault();
            RoutingURL(event.currentTarget.dataset.name);
        }, {once: false}));
    };
    PortfolioRoutingURL();
    //───────────────────────────────────PortfolioRoutingURL



    //───────────────────────────────────GoBackListener
    GoBackListener();
    //───────────────────────────────────GoBackListener
};
//───────────────────────────────────Listeners



//───────────────────────────────────StartAllProjectsBody
const StartAllProjectsBody = () => {
    document.querySelector('#body').replaceWith(AllProjectsBody());
    // document.querySelector('#body').append(...AllProjectsBody());
    AllProjectsBodyListeners();
};
//───────────────────────────────────StartAllProjectsBody



//───────────────────────────────────Exports
export {
    AllProjectsBody,

    StartAllProjectsBody
};
//───────────────────────────────────Exports
//# sourceMappingURL=_AllProjectsBody.js.map
