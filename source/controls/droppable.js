export const dragOver = event => event.preventDefault();

export const drop = event => {
    event.preventDefault();
    const target = event.target;
    const id = event.dataTransfer.getData('id');
    target.parentElement.insertBefore(document.querySelector(`#${id}`), target);
};