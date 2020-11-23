export const dragOver = event => event.preventDefault();

export const drop = event => {
    event.preventDefault();
    const target = event.target;
    const parent = target.parentElement;
    const id = event.dataTransfer.getData('id');
    const sources = document.querySelectorAll(`[content="${id}"], #${id}`);
    for (const source of sources) {
        parent.insertBefore(source, target);
    }
};