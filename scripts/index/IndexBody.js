;'use strict';



//───────────────────────────────────Imports
import {
    createElement,

    copyToClipboard
} from '../helpers/helpers.js';

import {PreLoader} from '../global/modules/preloader.js';
import {GoBackListener} from '../global/modules/goBack.js';

import {Header, Home} from './header.js';
import {Main} from './main.js';
import {Footer} from './footer.js';

import {RoutingURL} from '../global/global.js';
//───────────────────────────────────Imports



//───────────────────────────────────Helpers
const scrollToElement = (theSelector) => {
    let theElement = document.querySelector(theSelector);

    var selectedPosX = 0;
    var selectedPosY = 0;

    if (theElement != null) {
        selectedPosX += theElement.offsetLeft;
        selectedPosY += theElement.offsetTop;
        theElement = theElement.offsetParent;
    }

    window.scrollTo(selectedPosX, selectedPosY);
}
//───────────────────────────────────Helpers



//───────────────────────────────────IndexBody
const IndexBody = () => {
    const body = createElement('body');
    const link = createElement('link');
    const script = createElement('script');

    return body({id: 'body'}, [
        PreLoader(),

        link({href: './styles/index/header.css', rel: 'stylesheet'}, false),
        Header(),
        Home(),

        link({href: './styles/index/main.css', rel: 'stylesheet'}, false),
        Main(),

        link({href: './styles/index/footer.css', rel: 'stylesheet'}, false),
        Footer(),

        link({href: './styles/index/media/phones.css', rel: 'stylesheet', media: 'screen and (min-width: 480px)'}, false),
        link({href: './styles/index/media/tablets.css', rel: 'stylesheet', media: 'screen and (min-width: 768px)'}, false),
        link({href: './styles/index/media/desktops.css', rel: 'stylesheet', media: 'screen and (min-width: 1024px)'}, false),

        script({src: './scripts/scripts.js', defer: ''}, false)
    ]);
    
    /*return [
        PreLoader(),

        link({href: './styles/index/header.css', rel: 'stylesheet'}, false),
        Header(),
        Home(),

        link({href: './styles/index/main.css', rel: 'stylesheet'}, false),
        Main(),

        link({href: './styles/index/footer.css', rel: 'stylesheet'}, false),
        Footer(),

        link({href: './styles/index/media/phones.css', rel: 'stylesheet', media: 'screen and (min-width: 480px)'}, false),
        link({href: './styles/index/media/tablets.css', rel: 'stylesheet', media: 'screen and (min-width: 768px)'}, false),
        link({href: './styles/index/media/desktops.css', rel: 'stylesheet', media: 'screen and (min-width: 1024px)'}, false),

        script({src: './scripts/scripts.js', defer: ''}, false)
    ];*/
};
//───────────────────────────────────IndexBody



//───────────────────────────────────Listeners
const IndexBodyListeners = () => {
    //───────────────────────────────────PortfolioRoutingURL
    const PortfolioRoutingURL = () => {
        const portfolioItemsLink = document.querySelectorAll('#projects_wrapper .project_info');

        [].forEach.call(portfolioItemsLink, (portfolioItemLink) => portfolioItemLink.addEventListener('click', (event) => {
            event.preventDefault();
            RoutingURL(event.currentTarget.dataset.name);
        }, {once: false}));
    };
    PortfolioRoutingURL();
    //───────────────────────────────────PortfolioRoutingURL



    //───────────────────────────────────AllProjectsRoutingURL
    const AllProjectsRoutingURL = () => {
        const allProjectsLink = document.querySelector('#portfolio .link_full_portfolio');

        allProjectsLink.addEventListener('click', (event) => {
            event.preventDefault();
            RoutingURL('all_projects');
        }, {once: false});
    };
    AllProjectsRoutingURL();
    //───────────────────────────────────AllProjectsRoutingURL
    


    //───────────────────────────────────hamburgerToggle
    const hamburgerToggle = () => {
        const hamburgerIcon = document.querySelector('#hamburger_icon');
        const navigationBlock = document.querySelector('#mobile_nav');
        const menuItemsLink = document.querySelectorAll('#ul_mobile_nav .item a');

        document.addEventListener('keydown', (event) => {
            if ((event.keyCode === 27) && (hamburgerIcon.matches('.active') || navigationBlock('.nav_active'))) {
                hamburgerIcon.classList.remove('active');
                navigationBlock.classList.remove('nav_active');
            }
        }, {once: false});

        hamburgerIcon.addEventListener('click', (event) => {
            event.preventDefault();

            hamburgerIcon.classList.toggle('active');
            navigationBlock.classList.toggle('nav_active');
        }, {once: false});

        [].forEach.call(menuItemsLink, (menuItemLink) => menuItemLink.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToElement(`#${event.currentTarget.href.substring(event.currentTarget.href.indexOf('#') + 1)}`);
            hamburgerIcon.classList.remove('active');
            navigationBlock.classList.remove('nav_active');
        }, {once: false}));
    };
    hamburgerToggle();
    //───────────────────────────────────hamburgerToggle



    //───────────────────────────────────copyEmail
    const copyEmail = () => {
        let iconCopyEmail = document.querySelector('#icon_copy_email');
        let myEmail = 'work.thevastted@gmail.com';

        iconCopyEmail.addEventListener('click', (event) => {
            event.preventDefault();
            copyToClipboard(myEmail);
        }, {once: false})
    };
    copyEmail();
    //───────────────────────────────────copyEmail
};
//───────────────────────────────────Listeners



//───────────────────────────────────StartIndexBody
const StartIndexBody = () => {
    document.querySelector('#body').replaceWith(IndexBody());
    // document.querySelector('#body').append(...IndexBody());
    IndexBodyListeners();
};
//───────────────────────────────────StartIndexBody



//───────────────────────────────────Exports
export {
    IndexBody,
    IndexBodyListeners,

    StartIndexBody
};
//───────────────────────────────────Exports
//# sourceMappingURL=_IndexBody.js.map
