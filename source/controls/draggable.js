export const tabDragStart = event => {
    const { dataTransfer, target } = event;
    if (target.parentElement.lock) {
        event.preventDefault();
    } else {
        dataTransfer.setData('id', target.id);
    }
};