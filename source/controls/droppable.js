import { attributes } from '../constants/options.js';

const { indexOf, find } = Array.prototype;

export const tabDrop = event => {
    event.preventDefault();
    const { target, dataTransfer } = event;
    const attribute = dataTransfer.getData(attributes.tab);
    const elements = document.querySelectorAll(`[${attributes.tab}="${attribute}"]`);
    const tab = find.call(elements, tab => tab.slot);
    const sourceParent = tab.parentElement;
    const targetParent = target.parentElement;
    if (sourceParent.type === targetParent.type) {
        event.stopPropagation();
        if (sourceParent === targetParent) {
            const tabIndex = indexOf.call(sourceParent.children, tab);
            const targetIndex = indexOf.call(targetParent.children, target);
            targetParent.insertBefore(tab, targetIndex - tabIndex > 0 ? target.nextSibling : target);
        } else {
            for (const element of elements) {
                targetParent.insertBefore(element, target);
            }
        }
    }
};

export const tabDragOver = event => {
    if (!event.target.parentElement.lock) {
        event.preventDefault();
        event.stopPropagation();
    }
};