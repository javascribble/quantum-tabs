const dragOver = event => event.preventDefault();

const drop = event => {
    event.preventDefault();
    const target = event.target;
    const id = event.dataTransfer.getData('content');
    const content = document.querySelector(`#${id}`);
    target.parentElement.insertBefore(content, target);
};

export const enableDrop = element => {
    element.addEventListener('dragover', dragOver);
    element.addEventListener('drop', drop);
};

export const disableDrop = element => {
    element.removeEventListener('dragover', dragOver);
    element.removeEventListener('drop', drop);
};