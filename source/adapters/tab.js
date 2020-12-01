import { Tab } from '../elements/tab.js';

export const appendTab = (container, content) => container.appendChild(new Tab(container, content));

export const removeTab = (container, content) => container.removeChild(container.querySelector(`[content="${content.id}"]`));