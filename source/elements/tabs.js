import { Component, template, define, setAttribute } from '../import.js';
import html from '../templates/tabs.js';

export class Tabs extends Component {
    #panels = new Set();

    static template = template(html);

    //static get observedAttributes() { return ['dock']; } // TODO: Add dock/lock controls.

    slotChangedCallback(slot, addedElements, deletedElements) {
        if (slot.name === 'tab') {
            addedElements.forEach(element => element.addEventListener('click', this.#activate.bind(this)));
            deletedElements.forEach(element => element.removeEventListener('click', this.#activate.bind(this)));
        } else {
            addedElements.forEach(element => this.#panels.add(element));
            deletedElements.forEach(element => this.#panels.delete(element));
        }
    }

    #activate(event) {
        const tabName = event.target.name;
        this.#panels.forEach(panel => setAttribute(panel, 'active', panel.getAttribute('name') === tabName));
    }
}

define('quantum-tabs', Tabs);