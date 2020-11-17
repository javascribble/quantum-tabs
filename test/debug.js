import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

const dragStart = event => event.dataTransfer.setData('id', event.target.id);

const dragOver = event => event.preventDefault();

const drop = event => {
    event.preventDefault();
    const target = event.target;
    const parent = target.parentElement;
    const sources = document.querySelectorAll(`#${event.dataTransfer.getData('id')}`);
    for (const source of sources) {
        parent.insertBefore(source, target);
    }
};

const enableDragDrop = element => {
    element.draggable = true;
    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragover', dragOver);
    element.addEventListener('drop', drop);
};

document.querySelectorAll('button').forEach(button => enableDragDrop(button));

document.body.style.visibility = 'visible';