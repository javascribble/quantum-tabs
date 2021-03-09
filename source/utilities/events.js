import { tabDragStart, tabDragEnd } from '../controls/draggable.js';
import { tabDrop, tabDragOver } from '../controls/droppable.js';
import { tabClick } from '../controls/click.js';

export const addEvents = tab => {
    tab.addEventListener('dragstart', tabDragStart);
    tab.addEventListener('dragover', tabDragOver);
    tab.addEventListener('dragend', tabDragEnd);
    tab.addEventListener('drop', tabDrop);
    tab.addEventListener('click', tabClick);
};

export const removeEvents = tab => {
    tab.removeEventListener('dragstart', tabDragStart);
    tab.removeEventListener('dragover', tabDragOver);
    tab.removeEventListener('dragend', tabDragEnd);
    tab.removeEventListener('drop', tabDrop);
    tab.removeEventListener('click', tabClick);
};