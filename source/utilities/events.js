import { tabDragStart, tabsDragStart } from '../controls/draggable.js';
import { tabDrop, tabsDragOver } from '../controls/droppable.js';
import { tabClick } from '../controls/click.js';

export const addTabEvents = tab => {
    tab.addEventListener('dragstart', tabDragStart);
    tab.addEventListener('drop', tabDrop);
    tab.addEventListener('click', tabClick);
};

export const addTabsEvents = tabs => {
    tabs.addEventListener('dragstart', tabsDragStart);
    tabs.addEventListener('dragover', tabsDragOver);
};