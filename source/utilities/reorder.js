import { dragStart } from '../controls/draggable.js';
import { dragOver, drop } from '../controls/droppable.js';

export const enableReorder = element => {
    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragover', dragOver);
    element.addEventListener('drop', drop);
};

export const disableReorder = element => {
    element.removeEventListener('dragstart', dragStart);
    element.removeEventListener('dragover', dragOver);
    element.removeEventListener('drop', drop);
};