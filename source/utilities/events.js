import { tabDragStart, tabDragEnd } from '../controls/draggable.js';
import { tabDrop, tabDragOver } from '../controls/droppable.js';
import { tabClick } from '../controls/click.js';

export const addEvents = tabs => {
    for (const tab of tabs) {
        tab.addEventListener('dragstart', tabDragStart);
        tab.addEventListener('dragover', tabDragOver);
        tab.addEventListener('dragend', tabDragEnd);
        tab.addEventListener('drop', tabDrop);
        tab.addEventListener('click', tabClick);
    }
};

export const removeEvents = tabs => {
    for (const tab of tabs) {
        tab.removeEventListener('dragstart', tabDragStart);
        tab.removeEventListener('dragover', tabDragOver);
        tab.removeEventListener('dragend', tabDragEnd);
        tab.removeEventListener('drop', tabDrop);
        tab.removeEventListener('click', tabClick);
    }
};