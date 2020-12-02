import { Component, template, define, getAttribute, setAttribute } from '../import.js';
import { addTabsEvents } from '../utilities/events.js';
import html from '../templates/tabs.js';

export class Tabs extends Component {
    #tabs = this.slots.get('tabs');

    constructor() {
        super();

        addTabsEvents(this);
    }

    static template = template(html);

    static get observedAttributes() { return ['active', 'toggle', 'dock', 'lock']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (!slot.name) {
            for (const addedElement of addedElements) {
                let tab = this.#tabs.find(tab => tab.id === `${addedElement.id}-tab`);
                if (!tab) {
                    tab = document.createElement('quantum-tab');
                    tab.name = getAttribute(addedElement, 'name') || addedElement.id;
                    tab.draggable = true;
                    tab.id = `${addedElement.id}-tab`;
                    tab.slot = 'tabs';
                    setAttribute(tab, 'content', addedElement.id);
                    this.appendChild(tab);
                }

                if (this.active === addedElement.id) {
                    setAttribute(addedElement, 'active', true);
                    setAttribute(tab, 'active', true);
                }
            }

            for (const deletedElement of deletedElements) {
                setAttribute(deletedElement, 'active', false);
                if (this.active === deletedElement.id) {
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
                for (const [slot, elements] of this.slots) {
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
            }
        }
    }

    activate(id) {
        this.active = this.toggle && this.active === id ? false : id;
    }
}

define('quantum-tabs', Tabs);