import { attributes } from '../constants/options.js';

export const tabDragStart = event => {
    const { target, dataTransfer } = event;
    if (target.parentElement.lock) {
        event.preventDefault();
    } else {
        dataTransfer.setData(attributes.tab, target.getAttribute(attributes.tab));
    }
};

export const tabDragEnd = event => {
};