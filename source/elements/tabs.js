import { Component, template, define, setAttribute } from '../import.js';
import html from '../templates/tabs.js';

export class Tabs extends Component {
    #activate;

    constructor() {
        super();

        this.#activate = (event => this.active = event.target.id).bind(this);
    }

    static template = template(html);

    static get observedAttributes() { return ['active', 'dock']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (slot.name === 'tab') {
            addedElements.forEach(element => element.addEventListener('click', this.#activate));
            deletedElements.forEach(element => element.removeEventListener('click', this.#activate));
            if (currentElements.length === 0) {
                this.parentElement.removeChild(this);
            }
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'active':
                this.elements.get(this.slots.get('content')).forEach(tab => setAttribute(tab, 'active', tab.id === this.active));
                break;
            case 'dock':
                // TODO: Support docked tab list.
                break;
        }
    }
}

define('quantum-tabs', Tabs);