;'use strict';



//───────────────────────────────────Imports
import {createElement} from '../helpers/helpers.js';
import {myWorks} from '../helpers/other.js';
//───────────────────────────────────Imports



//───────────────────────────────────Main
const Main = (projectName) => {
    const main = createElement('main');
    const section = createElement('section');
    const span = createElement('span');
    const div = createElement('div');
    const h1 = createElement('h1');
    const a = createElement('a');
    const br = createElement('br');


    let thisProject = myWorks[projectName];


    return main({id: 'main'}, [
        section({id: 'description_wrapper'}, [
            section({id: 'wrapper_header'}, [
                h1({class: 'description__title'}, [
                    `${thisProject.projectName.replace(' ', '\u00A0')}`
                ]),
                a({href: `${thisProject.projectSourceCode}`, class: 'description__link', target: '_blank', rel: 'nofollow noopener'}, [
                    `${thisProject.projectSourceCode.replace('https://github.com/', '').replace(' ', '\u00A0')}`
                ]),
            ]),

            section({id: 'links_testing'}, [
                span({class: 'links_testing__title'}, [
                    'Lighthouse:'
                ]),
                ' ',
                a({href: `${thisProject.projectLighthouseLink}`, class: 'links_testing__link', target: '_blank', rel: 'nofollow noopener'}, [
                    `${thisProject.projectLighthouse.replace(' ', '\u00A0')}`
                ]),

                br(false, false),

                span({class: 'links_testing__title'}, [
                    'Web\u00A0Page\u00A0Test:'
                ]),
                ' ',
                a({href: `${thisProject.projectWebPageTestLink}`, class: 'links_testing__link', target: '_blank', rel: 'nofollow noopener'}, [
                    `${thisProject.projectWebPageTest.replace(' ', '\u00A0')}`
                ]),
            ]),

            section({id: 'description_more'}, [
                span({class: 'description_more__title'}, [
                    'Framework/UI\u00A0libraries:'
                ]),
                ' ',
                span({class: 'description_more__text'}, [
                    `${thisProject.projectLibraries.replace(' ', '\u00A0')}`
                ]),

                br(false, false),

                span({class: 'description_more__title'}, [
                    'Module\u00A0bundling:'
                ]),
                ' ',
                span({class: 'description_more__text'}, [
                    `${thisProject.projectModule.replace(' ', '\u00A0')}`
                ]),

                br(false, false),

                span({class: 'description_more__title'}, [
                    'Service\u00A0Worker:'
                ]),
                ' ',
                span({class: 'description_more__text'}, [
                    `${thisProject.projectSW.replace(' ', '\u00A0')}`
                ]),

                br(false, false),

                span({class: 'description_more__title'}, [
                    'Performance\u00A0patterns:'
                ]),
                ' ',
                span({class: 'description_more__text'}, [
                    `${thisProject.projectPerformancePatterns.replace(' ', '\u00A0')}`
                ]),

                br(false, false),

                span({class: 'description_more__title'}, [
                    'Server-side\u00A0rendering:'
                ]),
                ' ',
                span({class: 'description_more__text'}, [
                    `${thisProject.projectServerSide.replace(' ', '\u00A0')}`
                ]),

                br(false, false),

                span({class: 'description_more__title'}, [
                    'API:'
                ]),
                ' ',
                span({class: 'description_more__text'}, [
                    `${thisProject.projectAPI.replace(' ', '\u00A0')}`
                ]),

                br(false, false),

                span({class: 'description_more__title'}, [
                    'Hosting:'
                ]),
                ' ',
                span({class: 'description_more__text'}, [
                    `${thisProject.projectHosting.replace(' ', '\u00A0')}`
                ])
            ]),

            section({id: 'links_sources'}, [
                a({href: `${thisProject.projectLink}`, class: 'view_app', target: '_blank', rel: 'nofollow noopener'}, [
                    'View\u00A0application'
                ]),

                a({href: `${thisProject.projectSourceCode}`, class: 'source_code', target: '_blank', rel: 'nofollow noopener'}, [
                    'Source\u00A0Code'
                ])
            ])
        ]),
        
        section({id: 'image_wrapper', style: `background-image: url('./images/homeImages/backgroundImage.jpeg')`, 'data-image': '1'}, false)
    ]);
};
//───────────────────────────────────Main



//───────────────────────────────────Exports
export {Main};
//───────────────────────────────────Exports
//# sourceMappingURL=_main.js.map
