import { enableDrag, disableDrag } from '../controls/draggable.js';
import { enableDrop, disableDrop } from '../controls/droppable.js';

export const unlock = element => {
    enableDrag(element);
    enableDrop(element);
};

export const lock = element => {
    disableDrag(element);
    disableDrop(element);
};