/*jshint esversion: 6 */

import {fancysubtitles as config } from '@params';

// console.log(config);
// let display_time = 5;
// let transition_time = 1;
let display_time = config.displaytime;
let transition_time = config.transitiontime;

(() => {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') 
            setup_fancy_subtitles();
    };
})();

function setup_fancy_subtitles() {
    let fancy_subtitles = document.getElementsByClassName('fancy-subtitle');
    if (fancy_subtitles.length <= 1) return;
    for (const subtitle of fancy_subtitles) {
        subtitle.style.marginBottom = "0px";
        subtitle.style.overflow = "hidden";
        subtitle.style.height = "0px";
        subtitle.style.opacity = 0;
        subtitle.style.transform = "scale(0.33,0.33)";
    }
    document.getElementsByClassName('fancy-subtitle-container')[0].style.height = "0px";
    document.getElementsByClassName('fancy-subtitle-container')[0].classList.add('is-vcentered");');
    show_next_subtitle();
}

function show_next_subtitle(subtitle) {
    // console.log("===== show_next_subtitle =====");
    // let next_subtitle;
    // let next_height;
    const immediate = subtitle === undefined;
    const current_subtitle = subtitle;
    if (!immediate)
    current_subtitle.style.transition = '';
    // console.log(`first transition: ${immediate}`);
    // console.log(`current subtitle: ${(immediate ? 'undefined' : current_subtitle.innerText.slice(0,7) + '...')}`);
    
    // determine next subtitle
    const next_subtitle = (immediate) ?
    document.getElementsByClassName('fancy-subtitle')[0] :
    current_subtitle.nextElementSibling || current_subtitle.parentElement.firstElementChild;
    // console.log(`next subtitle: ${next_subtitle.innerText.slice(0,7)}...`);
    
    // calculate next height
    next_subtitle.style.transition = '';
    next_subtitle.style.height = 'auto';
    const next_height = window.getComputedStyle(next_subtitle).height;
    next_subtitle.style.height = '0px';
    // console.log(`next height: ${next_height}`);
    
    // prepare timing
    const timing = {
        delay1: (immediate) ? '0' : display_time,
        delay2: (immediate) ? '0' : display_time + transition_time,
    };
    // prepare transitions
    next_subtitle.parentElement.style.transition = 
        `height ${transition_time * (immediate ? 1 : 2)}s ease-in-out ${timing.delay1}s`;
    if (!immediate)
    current_subtitle.style.transition = 
        `opacity ${transition_time}s ease-in-out ${timing.delay1}s, ` + 
        `height ${transition_time}s steps(1,end) ${timing.delay1}s, ` +
        `transform ${transition_time}s ease-in ${timing.delay1}s`;
    next_subtitle.style.transition = 
        `opacity ${transition_time}s ease-in-out ${timing.delay2}s, ` +
        `height ${transition_time}s steps(1, start) ${timing.delay2}s, ` + 
        `transform ${transition_time}s ease-out ${timing.delay2}s`;
    // console.log(`next parent transition: "${next_subtitle.parentElement.style.transition}"`);
    // console.log(`current subtitle transition: "${immediate ? "N/A" : current_subtitle.style.transition}"`);
    // console.log(`next subtitle transition: "${next_subtitle.style.transition}"`);
    
    // if (!immediate) return;
    // go!
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            next_subtitle.parentElement.style.height = next_height;

            if (!immediate) {
                current_subtitle.style.transform = "scale(0.33,0.33)";
                current_subtitle.style.opacity = 0;
                current_subtitle.style.height = "0px";
            }

            next_subtitle.style.transform = "scale(1,1)";
            next_subtitle.style.opacity = 1;
            next_subtitle.style.height = next_height;
        });
    });
    // if (!immediate)
    // current_subtitle.addEventListener('transitionend', () => {
    //     current_subtitle.style.transition = '';
    //     // current_subtitle.style.height = "0px";
    // }, {once: true});
    next_subtitle.addEventListener('transitionend', () => {
        show_next_subtitle(next_subtitle);
    }, {once: true});
}
    
// function collapse_fancy_subtitle(subtitle) {
//     subtitle.style.transform = "scale(0,0)";
//     subtitle.style.opacity = 0;
//     subtitle.style.height = "0px";
// }
// function expand_fancy_subtitle(subtitle, immediate) {
//     subtitle.parentElement.style.transition = `all ${transition_time * 2}s ease-in-out ${(immediate) ? '0' : display_time + transition_time}s`;

//     requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//             subtitle.style.transform = "scale(1,1)";
//             subtitle.style.opacity = 1;
//             subtitle.style.height = next_height;
//             subtitle.parentElement.style.height = next_height;
//         });
//     });
// }