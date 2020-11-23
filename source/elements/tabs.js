import { Component, template, define, getAttribute, setAttribute } from '../import.js';
import { enableReorder, disableReorder } from '../utilities/reorder.js';
import html from '../templates/tabs.js';

export class Tabs extends Component {
    #tabs = this.shadowRoot.querySelector('#tabs');

    static template = template(html);

    static get observedAttributes() { return ['active', 'toggle', 'dock']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        for (const addedElement of addedElements) {
            setAttribute(addedElement, 'active', addedElement.id === this.active);

            const tab = this.#tabs.appendChild(document.createElement('button'));
            tab.addEventListener('click', event => this.activate(event.target.id));
            tab.textContent = getAttribute(addedElement, 'name') || addedElement.id;
            tab.id = addedElement.id;
        }

        for (const deletedElement of deletedElements) {
            setAttribute(deletedElement, 'active', false);

            this.#tabs.removeChild(this.shadowRoot.querySelector(`#${deletedElement.id}`));
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'active') {
            for (const element of this.elements.get(this.slots.get(''))) {
                if (element.id === previousValue) {
                    setAttribute(element, 'active', false);
                }

                if (element.id === currentValue) {
                    setAttribute(element, 'active', true);
                }
            }
        } else if (attribute === 'dock') {
            // TODO: Support docked tab list.
        } else if (attribute === 'lock') {
            // TODO: Disable reordering.
        }
    }

    activate(id) {
        this.active = this.hasAttribute('toggle') && this.active === id ? "" : id;
    }
}

define('quantum-tabs', Tabs);