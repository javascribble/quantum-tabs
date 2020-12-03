import { Component, template, define, getAttribute } from '../import.js';
import { addTabEvents } from '../utilities/events.js';
import html from '../templates/tab.js';

export class Tab extends Component {
    #button = this.shadowRoot.querySelector('button');

    constructor(content) {
        super();

        this.content = content;
        this.id = `${content.id}-tab`;
        this.name = getAttribute(content, 'name') || content.id;
        this.slot = 'tabs';

        addTabEvents(this);
    }

    static template = template(html);

    static get observedAttributes() { return ['name', 'content', 'pin']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'name') {
            this.#button.textContent = currentValue;
        }
    }
}

define('quantum-tab', Tab);