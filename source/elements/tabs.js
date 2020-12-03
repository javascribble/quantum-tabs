import { Component, template, define, getAttribute, setAttribute } from '../import.js';
import { addTabsEvents } from '../utilities/events.js';
import { Tab } from './tab.js'
import html from '../templates/tabs.js';

export class Tabs extends Component {
    #tabs = this.slots.get('tabs');

    constructor() {
        super();

        addTabsEvents(this);
    }

    static template = template(html);

    static get observedAttributes() { return ['active', 'toggle', 'dock', 'lock', 'type']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (!slot.name) {
            for (const addedElement of addedElements) {
                const tab = this.#tabs.find(tab => tab.id === `${addedElement.id}-tab`) || this.appendChild(new Tab(addedElement));
                const active = this.active === addedElement.id
                setAttribute(addedElement, 'active', active);
                setAttribute(tab, 'active', active);
            }

            for (const deletedElement of deletedElements) {
                this.#tabs.find(tab => tab.id === `#${deletedElement.id}-tab`)?.remove();
                if (this.active === deletedElement.id) {
                    this.active = null;
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
                        const id = slot ? element.content.id : element.id;
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