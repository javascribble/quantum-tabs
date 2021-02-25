import { attributes } from '../constants/options.js';

export const tabDrop = event => {
    event.preventDefault();
    const { target, dataTransfer } = event;
    const attribute = dataTransfer.getData(attributes.content);
    const tab = document.querySelector(`[${attributes.content}="${attribute}"]`);
    const content = document.querySelector(`#${attribute}`);
    const sourceParent = content.parentElement;
    const targetParent = target.parentElement;
    if (sourceParent.type === targetParent.type) {
        event.stopPropagation();
        if (sourceParent === targetParent) {
            const tabIndex = Array.prototype.indexOf.call(sourceParent.children, tab);
            const targetIndex = Array.prototype.indexOf.call(targetParent.children, target);
            targetParent.insertBefore(tab, targetIndex - tabIndex > 0 ? target.nextSibling : target);
        } else {
            targetParent.insertBefore(tab, target);
            targetParent.insertBefore(content, target);
        }
    }
};

export const tabDragOver = event => {
    if (!event.target.parentElement.lock) {
        event.preventDefault();
        event.stopPropagation();
    }
};