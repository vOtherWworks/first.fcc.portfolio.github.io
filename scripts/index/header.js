;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../helpers/helpers.js';
//───────────────────────────────────Imports



//───────────────────────────────────Header
const Header = () => {
    const header = createElement('header');
    const nav = createElement('nav');
    const ul = createElement('ul');
    const li = createElement('li');
    const a = createElement('a');
    const span = createElement('span');

    const svgPath = createElement('path');
    const svg = createElement('svg');

    let logoLink = a({href: 'https://github.com/Vastted', target: '_blank', rel: 'nofollow noopener'}, false);
    logoLink.innerHTML = `<svg xmlns="https://www.w3.org/2000/svg" viewbox="0 0 81.49 70">
        <path d="M12.76,85h6.33a6.54,6.54,0,0,0,5.67-3.27L28.06,76H22.29L36.14,52,50,28,63.86,52,77.71,76H71.94l3.31,5.73A6.54,6.54,0,0,0,80.91,85h6.33a3.5,3.5,0,0,0,3-5.25L71.65,47.5l-17.32-30a5,5,0,0,0-8.66,0l-17.32,30L9.73,79.75A3.5,3.5,0,0,0,12.76,85Z" transform="translate(-9.25 -15)"></path>
        <path d="M48.27,49.23,39.8,63.89a2,2,0,0,0,1.73,3H58.46a2,2,0,0,0,1.73-3L51.73,49.23A2,2,0,0,0,48.27,49.23Z" transform="translate(-9.25 -15)"></path>
    </svg>`;

    const forUlMobileNav = () => {
        let ulMobileNav = ul({id: 'ul_mobile_nav'}, false);

        const navigationList = {
            homeItem: {
                itemName: 'Home',
                itemLink: '#home'
            },

            portfolioItem: {
                itemName: 'Portfolio',
                itemLink: '#portfolio'
            },

            contactItem: {
                itemName: 'Contact',
                itemLink: '#contact'
            }
        };

        const templateNavigationMenuItem = (itemName = '', itemLink = '') => {
            let linkItem = a({href: `${itemLink}`, rel: 'nofollow noopener'}, [`${itemName}`]);
            let item = li({class: 'item'}, [linkItem]);

            return item;
        };

        for (let item in navigationList) {
            let itemName = navigationList[item].itemName;
            let itemLink = navigationList[item].itemLink;

            ulMobileNav.append(templateNavigationMenuItem(itemName, itemLink));
        }

        return ulMobileNav;
    };
    let mobileNav = nav({id: 'mobile_nav', class: 'nav_disable'}, [
        forUlMobileNav(),
        logoLink
    ]);

    let lineTop = span({class: 'line line_top'}, false);
    let lineMiddle = span({class: 'line line_middle'}, false);
    let lineBottom = span({class: 'line line_bottom'}, false);
    let hamburgerIcon = a({id: 'hamburger_icon', href: '#', class: '', rel: 'nofollow noopener'}, [
        lineTop,
        lineMiddle,
        lineBottom
    ]);

    let hamburgerBlock = nav({id: 'hamburger_block'}, [
        hamburgerIcon,
        mobileNav
    ]);
    // let logoText = a({href: '/#', id: 'logo_text', rel: 'nofollow noopener'}, [
    let logoText = a({href: '/', id: 'logo_text', rel: 'nofollow noopener'}, [
        ((window.screen.width >= 768) || (window.innerWidth >= 768)) ? 'FreeCodeCamp' : 'FCC'
    ]);

    let pageHeader = header({id: 'header'}, [
        logoText,
        hamburgerBlock
    ]);

    return pageHeader;
};
//───────────────────────────────────Header



//───────────────────────────────────Home
const Home = () => {
    const section = createElement('section');
    const span = createElement('span');
    const p = createElement('p');

    return section({id: 'home'}, [
        p({class: 'home_text_wrapper'}, [
            span({class: 'home_text'}, [
                `My Education Portfolio`
            ]), '.'
        ])
    ]);
};
//───────────────────────────────────Home



//───────────────────────────────────Exports
export {Header, Home};
//───────────────────────────────────Exports
//# sourceMappingURL=_header.js.map
