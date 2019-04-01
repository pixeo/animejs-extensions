const $$ = selectors => [...document.querySelectorAll(selectors)];

export const EVENT_NAME = 'intersect';

const defaultOptions = {
    eventName: EVENT_NAME,
    rootMargin: '0px 0px',
    once: false,
};

export default function (
    elements = $$('.js-intersect'),
    options,
) {
    const { eventName, rootMargin, once } = {
        ...defaultOptions,
        ...options,
    };

    const event = new Event(eventName);

    const handleIntersection = (entries, obsrvr) => {
        entries.filter(entry => entry.isIntersecting).forEach((entry) => {
            entry.target.dispatchEvent(event);
            if (once) obsrvr.unobserve(entry.target);
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        rootMargin,
    });

    elements.forEach(elem => observer.observe(elem));
}
