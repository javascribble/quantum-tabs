export const tabClick = event => {
    const { content } = event.currentTarget;
    content.parentElement.activate(content.id);
};

export const pinClick = event => {
    event.preventDefault();
};