import { insertChild } from '../import.js';

export const tabDrop = event => {
    event.preventDefault();
    const { target, dataTransfer } = event;
    const id = dataTransfer.getData('id');
    const tab = document.querySelector(`#${id}`);
    const sourceParent = tab.parentElement;
    const targetParent = target.parentElement;
    if (sourceParent.type === targetParent.type) {
        if (sourceParent === targetParent) {
            targetParent.insertBefore(tab, target.index - tab.index > 0 ? target.nextSibling : target);
        } else {
            insertChild(targetParent, tab.content, target.index);
        }
    }
};

export const tabDragOver = event => {
    if (!event.target.parentElement.lock) {
        event.preventDefault();
        event.stopPropagation();
    }
};