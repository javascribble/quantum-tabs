import { attributes } from '../constants/options.js';

export const toggleActive = (element, active) => element.toggleAttribute(attributes.active, element.getAttribute(attributes.tab) === active);

export const validateActive = (element, addedElements, deletedElements, currentElements) => {
    const { active, toggle, children } = element;

    let deleted = false;
    for (const deletedElement of deletedElements) {
        if (active === deletedElement.getAttribute(attributes.tab)) {
            deletedElement.removeAttribute(attributes.active);
            deleted = true;
        }
    }

    if (!active || deleted) {
        element.activate(!toggle && children.length ? currentElements[0].getAttribute(attributes.tab) : deleted);
    } else {
        for (const addedElement of addedElements) {
            toggleActive(addedElement, active);
        }
    }
};