import { Tab } from './tab.js';
import html from '../templates/tabs.js';

const { Component, template, define } = quantum;

export class Tabs extends Component {
    #tabs = this.slots.get('tabs');

    static template = template(html);

    static get observedAttributes() { return ['active', 'toggle', 'dock', 'lock', 'type']; }

    createTab = (container, content) => new Tab(container, content);

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (!slot.name) {
            if (!currentElements.length) {
                this.remove();
            } else {
                if (!this.active && !this.toggle) {
                    this.active = currentElements[0].id;
                }

                for (const addedElement of addedElements) {
                    const tab = this.createTab(this, addedElement);
                    const index = currentElements.indexOf(addedElement);
                    if (this.#tabs.length > index) {
                        this.insertBefore(tab, this.#tabs[index]);
                    } else {
                        this.appendChild(tab);
                    }
                }

                for (const deletedElement of deletedElements) {
                    this.#tabs.find(tab => tab.content.id === deletedElement.id).remove();
                    if (this.active === deletedElement.id && !this.toggle) {
                        this.active = currentElements[0].id;
                    }
                }
            }
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'active' && previousValue !== currentValue) {
            for (const tab of this.#tabs) {
                const id = tab.content.id;
                const active = tab.active;
                if (active && id === previousValue) {
                    tab.active = false;
                } else if (!active && id === currentValue) {
                    tab.active = true;
                }
            }
        }
    }

    activate(id) {
        this.active = this.toggle && this.active === id ? false : id;
    }
}

define('quantum-tabs', Tabs);