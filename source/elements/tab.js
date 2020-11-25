import { Component, template, define } from '../import.js';
import { enableReorder, disableReorder } from '../utilities/reorder.js';
import html from '../templates/tab.js';

export class Tab extends Component {
    #button = this.shadowRoot.querySelector('button');

    static template = template(html);

    static get observedAttributes() { return ['name', 'active']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'name') {
            this.#button.textContent = currentValue;
        }
    }

    lock() {
        disableReorder(this);
    }

    unlock() {
        enableReorder(this);
    }
}

define('quantum-tab', Tab);