export const tabClick = event => {
    // TODO: Handle pin click, else handle as activation at parent.
    if (false) {
        event.preventDefault();
    } else {
        const tab = event.currentTarget;
        tab.parentElement.activate(tab.getAttribute('content'));
    }
};