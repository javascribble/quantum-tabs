export const tabDrop = event => {
    event.preventDefault();
    const { target, dataTransfer } = event;
    const id = dataTransfer.getData('id');
    const tab = document.querySelector(`#${id}-tab`);
    const content = document.querySelector(`#${id}`);
    const targetTabs = target.parentElement;
    const sourceTabs = tab.parentElement;
    if (sourceTabs.type === targetTabs.type) {
        if (sourceTabs === targetTabs) {
            const children = Array.from(sourceTabs.children);
            targetTabs.insertBefore(tab, children.indexOf(target) - children.indexOf(tab) === 1 ? target.nextSibling : target);
        } else {
            targetTabs.insertBefore(tab, target);
        }

        targetTabs.appendChild(content);
    }
};

export const tabsDragOver = event => {
    if (!event.currentTarget.lock) {
        event.preventDefault();
    }
};