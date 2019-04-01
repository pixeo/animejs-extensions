import * as deepmerge from 'deepmerge';
import anime from 'animejs/lib/anime.es';
import intersector, { EVENT_NAME } from './intersector';
import { $$ } from './selectors';
import defaultOptions from './animations';

const STATE = {
    INTERSECT: 'intersect',
    HOVER: 'hover',
    FOCUS: 'focus',
};

const animationSet = (target) => {
    const attr = target.dataset.animationSet;

    try {
        const set = JSON.parse(attr);
        if (!Array.isArray(set)) return [attr];
        return set;
    } catch (error) {
        return [attr];
    }
};

const animator = (opts = {}) => {
    const {
        selector,
        groupDelay,
        animations,
        ...options
    } = deepmerge(
        defaultOptions,
        opts,
    );

    $$(selector).map(target => ({
        ...animationSet(target)
            .reduce((accumulator, currentValue) => deepmerge(
                accumulator,
                animations[currentValue] ? animations[currentValue] : {},
            ), {}),
        targets: target,
        delay(el) {
            if (!('animationGroup' in target.dataset)) return 0;
            const group = $$(`[data-animation-group=${target.dataset.animationGroup}]`);
            const index = Array.prototype.indexOf.call(group, el);
            return index * groupDelay;
        },
    })).forEach(({
        targets,
        originalState,
        ...properties
    }) => {
        /* Set the animation original state */
        if (originalState) anime.set(targets, originalState);

        /* Autoplay if no animationOn data-attribute is on target */
        const autoplay = !('animationOn' in targets.dataset);

        /* Configure animation */
        const animation = anime({
            ...options,
            targets,
            autoplay,
            ...properties,
        });

        /* Play animation if it's needed on intersection */
        if (targets.dataset.animationOn === STATE.INTERSECT) {
            targets.addEventListener(EVENT_NAME, () => animation.play());
        }
    });
};

export default () => {
    intersector($$(`[data-animation-on="${STATE.INTERSECT}"]`), {
        once: true,
    });
    animator();
};
