import { getAttribute } from '../import.js';

export const cloneTab = (parent, content) => {
    const tab = document.createElement('quantum-tab');
    tab.addEventListener('click', event => parent.activate(content.id));
    tab.name = getAttribute(content, 'name') || content.id;
    tab.lock = parent.lock;
    tab.id = content.id;
    tab.slot = 'tabs';
    return tab;
};