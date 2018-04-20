;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../helpers/helpers.js';

import {PreLoader} from '../global/modules/preloader.js';
import {GoBackListener} from '../global/modules/goBack.js';

import {Main} from './main.js';
import {Header} from './header.js';

import {RoutingURL} from '../global/global.js';

import {fadeIn} from '../helpers/helpers.js';
import {fadeOut} from '../helpers/helpers.js';
//───────────────────────────────────Imports



//───────────────────────────────────ProjectBody
const ProjectBody = (projectName, fromPage) => {
    const body = createElement('body');
    const link = createElement('link');
    const script = createElement('script');


    return body({id: 'body'}, [
        PreLoader(),

        link({href: './styles/project/header.css', rel: 'stylesheet'}, false),
        Header(fromPage),

        link({href: './styles/project/main.css', rel: 'stylesheet'}, false),
        Main(projectName),

        link({href: './styles/project/media/phones.css', rel: 'stylesheet', media: 'screen and (min-width: 480px)'}, false),
        link({href: './styles/project/media/tablets.css', rel: 'stylesheet', media: 'screen and (min-width: 768px)'}, false),
        link({href: './styles/project/media/desktops.css', rel: 'stylesheet', media: 'screen and (min-width: 1024px)'}, false),

        script({src: './scripts/scripts.js', defer: ''}, false)
    ]);
    
    /*return [
        PreLoader(),

        link({href: './styles/project/header.css', rel: 'stylesheet'}, false),
        Header(fromPage),

        link({href: './styles/project/main.css', rel: 'stylesheet'}, false),
        Main(projectName),

        link({href: './styles/project/media/phones.css', rel: 'stylesheet', media: 'screen and (min-width: 480px)'}, false),
        link({href: './styles/project/media/tablets.css', rel: 'stylesheet', media: 'screen and (min-width: 768px)'}, false),
        link({href: './styles/project/media/desktops.css', rel: 'stylesheet', media: 'screen and (min-width: 1024px)'}, false),

        script({src: './scripts/scripts.js', defer: ''}, false)
    ];*/
};
//───────────────────────────────────ProjectBody



//───────────────────────────────────Listeners
// const ProjectBodyListeners = (dataImage) => {
const ProjectBodyListeners = () => {
    //───────────────────────────────────ProjectBack
    /*const ProjectBack = () => {
        const allProjectsBackHeader = document.querySelector('#header .go_back');

        allProjectsBackHeader.addEventListener('click', (event) => {
            event.preventDefault();
            RoutingURL('#');
        }, {once: false});
    };
    ProjectBack();*/
    //───────────────────────────────────ProjectBack



    //───────────────────────────────────GoBackListener
    GoBackListener();
    //───────────────────────────────────GoBackListener



    //───────────────────────────────────ProjectImages
    /*const ProjectImages = (dataImage) => {
        const imageWrapper = document.querySelector('#image_wrapper');

        imageWrapper.addEventListener('click', (event) => {
            event.preventDefault();
            fadeIn('#image_preloader_wrapper', 10);

            if (imageWrapper.dataset.image) {
                (imageWrapper.dataset.image >= dataImage.length) ? imageWrapper.dataset.image = 0 : null;

                imageWrapper.setAttribute('style', `background-image: url(${dataImage[imageWrapper.dataset.image]})`);
                imageWrapper.setAttribute('data-image', `${parseInt(imageWrapper.dataset.image) + 1}`)
            }

            fadeOut('#image_preloader_wrapper', 10, 100);
        }, {once: false});
    };
    ProjectImages(dataImage);*/
    //───────────────────────────────────ProjectImages
};
//───────────────────────────────────Listeners



//───────────────────────────────────StartProjectBody
const StartProjectBody = (projectName, dataImage) => {
    document.querySelector('#body').replaceWith(ProjectBody(projectName));
    // document.querySelector('#body').append(...ProjectBody());
    // ProjectBodyListeners(dataImage);
    ProjectBodyListeners();
};
//───────────────────────────────────StartProjectBody



//───────────────────────────────────Exports
export {
    ProjectBody,

    StartProjectBody
};
//───────────────────────────────────Exports
//# sourceMappingURL=_ProjectBody.js.map
