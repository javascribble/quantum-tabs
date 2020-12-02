export const tabDrop = event => {
    event.preventDefault();
    const { target, dataTransfer } = event;
    const id = dataTransfer.getData('id');
    const tab = document.querySelector(`#${id}-tab`);
    const content = document.querySelector(`#${id}`);
    const targetParent = target.parentElement;
    const currentParent = tab.parentElement;
    if (currentParent === targetParent) {
        const children = Array.from(currentParent.children);
        targetParent.insertBefore(tab, children.indexOf(target) - children.indexOf(tab) === 1 ? target.nextSibling : target);
    } else {
        targetParent.insertBefore(tab, target);
    }

    targetParent.appendChild(content);
};

export const tabsDragOver = event => {
    if (!event.currentTarget.lock) {
        event.preventDefault();
    }
};