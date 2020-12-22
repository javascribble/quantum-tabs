import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

const div = document.querySelector('#empty-div');
div.addEventListener('dragover', event => event.preventDefault());
div.addEventListener('drop', event => {
    event.preventDefault();
    const { target, dataTransfer } = event;
    const id = dataTransfer.getData('id');
    const tab = document.querySelector(`#${id}`);
    target.appendChild(tab.split());
});

document.body.style.visibility = 'visible';