import { Component, template, define, castAttribute } from '../import.js';
import { appendTab, removeTab } from '../adapters/tab.js';
import { unlock, lock } from '../utilities/reorder.js';
import html from '../templates/tabs.js';

export class Tabs extends Component {
    static template = template(html);

    static get observedAttributes() { return ['active', 'dock', 'toggle', 'lock']; }

    get #tabs() { return this.elements.get(this.slots.get('tabs')); }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (!slot.name) {
            addedElements.forEach(addedElement => appendTab(this, addedElement));
            deletedElements.forEach(deletedElement => removeTab(this, deletedElement));
            if (!this.active && !this.toggle) {
                this.active = currentElements[0].id;
            }
        } else if (currentElements.length === 0) {
            this.parentElement.removeChild(this);
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (previousValue !== currentValue) {
            if (attribute === 'active') {
                for (const tab of this.#tabs) {
                    const { active, content } = tab;
                    if (active && content === previousValue) {
                        tab.active = false;
                    } else if (!active && content === currentValue) {
                        tab.active = true;
                    }
                }
            } else if (attribute === 'lock') {
                this.#tabs.forEach(castAttribute(attribute, currentValue) ? lock : unlock);
            }
        }
    }

    activate(id) {
        this.active = this.toggle && this.active === id ? false : id;
    }
}

define('quantum-tabs', Tabs);