import { Component, template, define, getAttribute, setAttribute } from '../import.js';
import { addTabEvents } from '../utilities/events.js';
import html from '../templates/tab.js';

export class Tab extends Component {
    #button = this.shadowRoot.querySelector('button');

    constructor(container, content) {
        super();

        this.slot = 'tabs';
        this.content = content;
        this.id = `${content.id}-tab`;
        this.name = getAttribute(content, 'name') || content.id;
        this.active = container.active === content.id;
        setAttribute(content, 'active', this.active);
        addTabEvents(this);
    }

    static template = template(html);

    static get observedAttributes() { return ['name', 'active', 'pin']; }

    nameAttributeChanged(attribute, previousValue, currentValue) {
        this.#button.textContent = currentValue;
    }

    activeAttributeChanged(attribute, previousValue, currentValue) {
        setAttribute(this.content, attribute, currentValue);
    }
}

define('quantum-tab', Tab);