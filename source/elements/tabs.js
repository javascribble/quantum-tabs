import { Component, template, define, setAttribute } from '../import.js';
import { cloneTab } from '../utilities/clone.js';
import html from '../templates/tabs.js';

export class Tabs extends Component {
    static template = template(html);

    static get observedAttributes() { return ['active', 'toggle', 'dock', 'lock']; }

    get tabs() { return this.elements.get(this.slots.get('tabs')); }

    get contents() { return this.elements.get(this.slots.get('')); }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (!slot.name) {
            for (const addedElement of addedElements) {
                setAttribute(addedElement, 'active', addedElement.id === this.active);
                this.appendChild(cloneTab(this, addedElement));
            }

            for (const deletedElement of deletedElements) {
                setAttribute(deletedElement, 'active', false);
                this.removeChild(this.querySelector(`#${deletedElement.id}`));
            }
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'active') {
            for (const element of this.contents.concat(this.tabs)) {
                if (element.id === previousValue) {
                    setAttribute(element, 'active', false);
                }

                if (element.id === currentValue) {
                    setAttribute(element, 'active', true);
                }
            }
        } else if (attribute === 'lock') {
            this.tabs.forEach(tab => tab.lock = this.lock);
        }
    }

    activate(id) {
        this.active = this.hasAttribute('toggle') && this.active === id ? false : id;
    }
}

define('quantum-tabs', Tabs);