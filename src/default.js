export default {
    selector: '[data-animation-set]',
    duration: 1000,
    easing: 'easeInOutSine',
    autoplay: false,
    groupDelay: 150,
    animations: {
        fadeIn: {
            opacity: 1,
            originalState: {
                opacity: 0,
            },
        },
        slideInFromTop: {
            translateY: 0,
            originalState: {
                translateY: '-4.5rem',
            },
        },
        slideInFromBottom: {
            translateY: 0,
            originalState: {
                translateY: '4.5rem',
            },
        },
        slideInFromLeft: {
            translateX: 0,
            originalState: {
                translateX: '-4.5rem',
            },
        },
        slideInFromRight: {
            translateX: 0,
            originalState: {
                translateX: '4.5rem',
            },
        },
    },
};
