import { validateActive, toggleActive } from '../utilities/active.js';
import { addEvents, removeEvents } from '../utilities/events.js';
import { attributes } from '../constants/options.js';
import tabs from '../templates/tabs.js';

export class Tabs extends Quantum {
    #tabs = this.slots.get('tabs');
    #contents = this.slots.get('');

    static get observedAttributes() { return ['active', 'toggle', 'dock', 'lock', 'type', 'leaf']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        validateActive(this, addedElements, deletedElements, currentElements);

        if (slot.name) {
            for (const addedElement of addedElements) {
                addEvents(addedElement);
            }

            for (const deletedElement of deletedElements) {
                removeEvents(deletedElement);
            }
        }

        if (!this.leaf && !this.children.length) {
            this.remove();
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === attributes.active) {
            for (const element of this.#tabs.concat(this.#contents)) {
                toggleActive(element, currentValue);
            }
        }
    }

    activate(id) {
        this.active = this.toggle && this.active === id ? false : id;
    }
}

Tabs.define('quantum-tabs', tabs);