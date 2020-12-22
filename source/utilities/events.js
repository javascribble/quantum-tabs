import { tabDragStart } from '../controls/draggable.js';
import { tabDrop, tabDragOver } from '../controls/droppable.js';
import { tabClick } from '../controls/click.js';

export const addTabEvents = tab => {
    tab.addEventListener('dragstart', tabDragStart);
    tab.addEventListener('dragover', tabDragOver);
    tab.addEventListener('drop', tabDrop);
    tab.addEventListener('click', tabClick);
};