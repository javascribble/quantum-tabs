import { validateActive, toggleActive } from '../utilities/active.js';
import { eventObserver } from '../utilities/events.js';
import { attributes } from '../constants/options.js';
import tabs from '../templates/tabs.js';

export class Tabs extends Quantum {
    static get observedAttributes() { return ['active', 'toggle', 'dock', 'lock', 'type', 'leaf']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        validateActive(this, addedElements, deletedElements, currentElements);

        if (slot.name) {
            for (const addedElement of addedElements) eventObserver.observe(addedElement);
            for (const deletedElement of deletedElements) eventObserver.unobserve(deletedElement);
        }

        if (!this.leaf && !this.children.length) {
            this.remove();
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === attributes.active) {
            for (const slot of this.template.slots) {
                for (const element of slot.assignedElements()) {
                    toggleActive(element, currentValue);
                }
            }
        }
    }

    activate(id) {
        this.active = this.toggle && this.active === id ? false : id;
    }
}

Tabs.define('quantum-tabs', tabs);