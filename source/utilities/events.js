import { tabDragStart, tabDragEnd } from '../controls/draggable.js';
import { tabDrop, tabDragOver } from '../controls/droppable.js';
import { tabClick } from '../controls/click.js';

const { EventObserver } = quantum;

export const eventObserver = new EventObserver([
    ['dragstart', tabDragStart],
    ['dragover', tabDragOver],
    ['dragend', tabDragEnd],
    ['drop', tabDrop],
    ['click', tabClick]
]);