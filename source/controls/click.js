export const tabClick = event => {
    // TODO: Handle pin click, else handle as activation at parent.
    if (false) {
        event.preventDefault();
    } else {
        const { content } = event.currentTarget;
        content.parentElement.activate(content.id);
    }
};