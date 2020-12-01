const dragStart = event => event.dataTransfer.setData('content', event.target.content);

export const enableDrag = element => {
    element.draggable = true;
    element.addEventListener('dragstart', dragStart);
};

export const disableDrag = element => {
    element.draggable = false;
    element.removeEventListener('dragstart', dragStart);
};