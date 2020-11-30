import { getAttribute, setAttributes } from '../import.js';
import { Tab } from '../elements/tab.js';

export const createTab = (container, content) => {
    const tab = new Tab();
    tab.addEventListener('click', event => container.activate(content.id));
    tab.name = getAttribute(content, 'name') || content.id;
    tab.id = content.id;
    tab.slot = 'tabs';

    if (container.active === content.id) {
        setAttributes([content, tab], 'active', true);
    }

    return tab;
};

export const deleteTab = (container, content) => {
    const tab = container.querySelector(`#${content.id}`);
    if (tab.hasAttribute('active')) {
        setAttributes([content, tab], 'active', false);
    }
};