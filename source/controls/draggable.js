export const tabDragStart = event => event.dataTransfer.setData('id', event.target.id);

export const tabsDragStart = event => {
    if (event.currentTarget.lock) {
        event.preventDefault();
    }
};