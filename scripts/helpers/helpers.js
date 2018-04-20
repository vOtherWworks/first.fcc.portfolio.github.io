;'use strict';



//───────────────────────────────────createElement
const setAttributes = (element = '', attributes = '') => {
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
};

const addChildren = (element = '', childrens = '') => {
    Object.keys(childrens).forEach(key => element.append(childrens[key]));
};

const createElement = (tagName = '') => (attributes = '', childrens = '') => {
    let element = document.createElement(tagName);
    attributes && setAttributes(element, attributes);
    childrens && addChildren(element, childrens);
    return element;
};

/*
    const a = createElement('a');
    let logoLink = a({href: '/', id: 'logo_text', rel: 'nofollow noopener'}, ['FCC']);
*/
//───────────────────────────────────createElement



//───────────────────────────────────copyToClipboard
const copyToClipboard = (text) => {
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData('Text:', text);
    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        let textarea = createElement('textarea');
        let textareaCopy = textarea({style: 'position: fixed'}, [text]);
        document.querySelector('body').append(textareaCopy);
        textareaCopy.select();

        try {
            return document.execCommand('copy');
        } catch (error) {
            console.warn(`Copy to clipboard failed. Error: ${error}`);
            return false;
        } finally {
            textareaCopy.remove();
        }
    }
};
//───────────────────────────────────copyToClipboard



//───────────────────────────────────fadeOut & fadeIn
const fadeOut = (selector = '', speed = 0, timer = 1000) => {
    let element = document.querySelector(selector).style;
    element.display = 'block';
    element.opacity = 1;

    /*(function fade() {
        (element.opacity -= .1) < .1 ? element.display = 'none' : setTimeout(fade, speed)
    })();*/

    setTimeout(function fade() {
        (element.opacity -= .1) < .1 ? element.display = 'none' : setTimeout(fade, speed)
    }, timer);
};


/*(() => {
    const fadeOut = (selector = '#preloader_wrapper', speed = 100) => {
        let element = document.querySelector(selector).style;
        element.opacity = 1;

        (function fade() {
            (element.opacity -= .1) < .1 ? element.display = 'none' : setTimeout(fade, speed)
        })();
    };

    document.addEventListener('DOMContentLoaded', fadeOut('#preloader_wrapper', 10), {once: true});
})();*/


const fadeIn = (selector = '', speed = 0) => {
    let element = document.querySelector(selector).style;
    element.opacity = 0;
    element.display = 'block';

    (function fade() {
        (element.opacity += .1) > .9 ?  setTimeout(fade, speed) : null;
    })();
};
//───────────────────────────────────fadeOut & fadeIn



//───────────────────────────────────Modules

//───────────────────────────────────Modules



//───────────────────────────────────Modules

//───────────────────────────────────Modules



//───────────────────────────────────Modules

//───────────────────────────────────Modules







//───────────────────────────────────Exports
export {
    createElement,

    copyToClipboard,

    fadeOut,
    fadeIn
};
//───────────────────────────────────Exports
//# sourceMappingURL=_helpers.js.map
