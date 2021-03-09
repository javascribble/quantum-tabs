import { addTabEvents, removeTabEvents } from '../utilities/events.js';
import { attributes } from '../constants/options.js';

export class Tabs extends Quantum {
    #tabs = this.slots.get('tabs');
    #contents = this.slots.get('');

    static get observedAttributes() { return ['active', 'toggle', 'dock', 'lock', 'type']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (slot.name === 'tabs') {
            for (const addedElement of addedElements) addTabEvents(addedElement);
            for (const deletedElement of deletedElements) removeTabEvents(deletedElement);
        }

        if (this.children.length === 0) {
            this.remove();
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'active') {
            for (const element of this.#tabs) element.toggleAttribute(attribute, element.getAttribute(attributes.content) === currentValue);
            for (const element of this.#contents) element.toggleAttribute(attribute, element.id === currentValue);
        }
    }

    activate(id) {
        this.active = this.toggle && this.active === id ? false : id;
    }
}