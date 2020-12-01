import { Component, template, define, castAttribute, getAttribute, setAttribute } from '../import.js';
import { unlock, lock } from '../utilities/reorder.js';
import html from '../templates/tabs.js';

export class Tabs extends Component {
    #tabs = this.slottedElements.get('tabs');

    constructor() {
        super();

        this.slots.get('tabs').addEventListener('click', this.#activate.bind(this));
    }

    static template = template(html);

    static get observedAttributes() { return ['active', 'dock', 'toggle', 'lock']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (!slot.name) {
            for (const addedElement of addedElements) {
                let tab = this.#tabs.find(tab => tab.id === `${addedElement.id}-tab`);
                if (!tab) {
                    tab = document.createElement('quantum-tab');
                    tab.name = getAttribute(addedElement, 'name') || addedElement.id;
                    tab.id = `${addedElement.id}-tab`;
                    tab.slot = 'tabs';
                    setAttribute(tab, 'content', addedElement.id);
                    this.appendChild(tab);
                }

                if (this.active === addedElement.id) {
                    setAttribute(addedElement, 'active', true);
                    setAttribute(tab, 'active', true);
                }

                if (!this.lock) {
                    unlock(tab);
                }
            }

            for (const deletedElement of deletedElements) {
                if (this.active === deletedElement.id) {
                    setAttribute(deletedElement, 'active', false);
                    this.active = null;
                }

                const tab = this.#tabs.find(tab => tab.id === `#${deletedElement.id}-tab`);
                if (tab) {
                    this.removeChild(tab);
                }
            }

            if (!this.active && !this.toggle && currentElements.length > 0) {
                this.active = currentElements[0].id;
            }
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (previousValue !== currentValue) {
            if (attribute === 'active') {
                for (const [slot, elements] of this.slottedElements) {
                    for (const element of elements) {
                        const id = slot ? getAttribute(element, 'content') : element.id;
                        const active = getAttribute(element, attribute);
                        if (active && id === previousValue) {
                            setAttribute(element, attribute, false);
                        } else if (!active && id === currentValue) {
                            setAttribute(element, attribute, true);
                        }
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

    #activate(event) {
        const id = getAttribute(event.target, 'content');
        if (id) {
            this.activate(id);
        }
    }
}

define('quantum-tabs', Tabs);