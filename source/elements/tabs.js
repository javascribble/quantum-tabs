import { Component, template, define, setAttribute } from '../import.js';
import { createTab, deleteTab } from '../adapters/tab.js';
import html from '../templates/tabs.js';

export class Tabs extends Component {
    createTab = createTab;
    deleteTab = deleteTab;

    static template = template(html);

    static get observedAttributes() { return ['active', 'dock', 'toggle', 'lock']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (!slot.name) {
            addedElements.forEach(addedElement => this.appendChild(this.createTab(this, addedElement)));
            deletedElements.forEach(deletedElement => this.removeChild(this.deleteTab(this, deletedElement)));
            if (!this.active && !this.hasAttribute('toggle') && currentElements.length > 0) {
                this.active = currentElements[0].id;
            }
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'active' && previousValue !== currentValue) {
            for (const element of Array.from(this.elements.values()).flat()) {
                const active = element.hasAttribute(attribute);
                if (active && element.id === previousValue) {
                    setAttribute(element, attribute, false);
                } else if (!active && element.id === currentValue) {
                    setAttribute(element, attribute, true);
                }
            }
        }
    }

    activate(id) {
        this.active = this.hasAttribute('toggle') && this.active === id ? false : id;
    }
}

define('quantum-tabs', Tabs);