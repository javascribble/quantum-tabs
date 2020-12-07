import { insertChild } from '../import.js';

export const tabDrop = event => {
    event.preventDefault();
    const { target, dataTransfer } = event;
    const id = dataTransfer.getData('id');
    const tab = document.querySelector(`#${id}`);
    const sourceParent = tab.parentElement;
    const targetParent = target.parentElement;
    if (sourceParent.type === targetParent.type) {
        const targetTabs = targetParent.tabs;
        const targetIndex = targetTabs.indexOf(target);
        if (sourceParent === targetParent) {
            targetParent.insertBefore(tab, targetIndex - targetTabs.indexOf(tab) > 0 ? target.nextSibling : target);
        } else {
            insertChild(targetParent, tab.content, targetIndex);
        }
    }
};

export const tabsDragOver = event => {
    if (!event.currentTarget.lock) {
        event.preventDefault();
    }
};