import { attributes } from '../constants/options.js';

export const tabClick = event => {
    const target = event.currentTarget;
    target.parentElement.activate(target.getAttribute(attributes.content));
};