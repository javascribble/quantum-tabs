import { Component, template, define } from '../import.js';
import { addTabsEvents } from '../utilities/events.js';
import { Tab } from './tab.js'
import html from '../templates/tabs.js';

export class Tabs extends Component {
    tabs = this.slots.get('tabs');

    constructor() {
        super();

        addTabsEvents(this);
    }

    static template = template(html);

    static get observedAttributes() { return ['active', 'toggle', 'dock', 'lock', 'type']; }

    defaultSlotChanged(slot, addedElements, deletedElements, currentElements) {
        if (!this.active && !this.toggle) {
            this.active = currentElements.first?.id;
        }

        for (const addedElement of addedElements) {
            const tab = this.createTab(this, addedElement);
            const index = currentElements.indexOf(addedElement);
            if (this.tabs.length > index) {
                this.insertBefore(tab, this.tabs[index]);
            } else {
                this.appendChild(tab);
            }
        }

        for (const deletedElement of deletedElements) {
            this.tabs.find(tab => tab.content.id === deletedElement.id).remove();
            if (this.active === deletedElement.id && !this.toggle) {
                this.active = currentElements.first?.id;
            }
        }
    }

    activeAttributeChanged(attribute, previousValue, currentValue) {
        for (const tab of this.tabs) {
            const id = tab.content.id;
            const active = tab.active;
            if (active && id === previousValue) {
                tab.active = false;
            } else if (!active && id === currentValue) {
                tab.active = true;
            }
        }
    }

    createTab(container, content) {
        return new Tab(container, content);
    }

    activate(id) {
        this.active = this.toggle && this.active === id ? false : id;
    }
}

define('quantum-tabs', Tabs);