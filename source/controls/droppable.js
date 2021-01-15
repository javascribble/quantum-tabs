export const tabDrop = event => {
    event.preventDefault();
    const { target, dataTransfer } = event;
    const id = dataTransfer.getData('id');
    const tab = document.querySelector(`#${id}`);
    const sourceParent = tab.parentElement;
    const targetParent = target.parentElement;
    if (sourceParent.type === targetParent.type) {
        event.stopPropagation();
        if (sourceParent === targetParent) {
            targetParent.insertBefore(tab, target.index - tab.index > 0 ? target.nextSibling : target);
        } else {
            const child = tab.content;
            const index = target.index;
            const children = Array.from(targetParent.children);
            if (index >= children.length) {
                targetParent.appendChild(child)
            } else {
                targetParent.insertBefore(child, children[index]);
            }
        }
    }
};

export const tabDragOver = event => {
    if (!event.target.parentElement.lock) {
        event.preventDefault();
        event.stopPropagation();
    }
};