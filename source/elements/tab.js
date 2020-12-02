import { Component, template, define } from '../import.js';
import { addTabEvents } from '../utilities/events.js';
import html from '../templates/tab.js';

export class Tab extends Component {
    #button = this.shadowRoot.querySelector('button');

    constructor() {
        super();

        addTabEvents(this);
    }

    static template = template(html);

    static get observedAttributes() { return ['name', 'pin']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'name') {
            this.#button.textContent = currentValue;
        }
    }
}

define('quantum-tab', Tab);