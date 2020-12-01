import { Component, template, define, castAttribute, getAttribute, setAttribute } from '../import.js';
import { unlock } from '../utilities/reorder.js';
import html from '../templates/tab.js';

export class Tab extends Component {
    #button = this.shadowRoot.querySelector('button');
    #content;

    constructor(container, content) {
        super();

        this.#content = content;

        this.addEventListener('click', event => container.activate(content.id));
        this.name = getAttribute(content, 'name') || content.id;
        this.active = container.active === content.id;
        this.content = content.id;
        this.slot = 'tabs';

        if (!container.lock) {
            unlock(this);
        }
    }

    static template = template(html);

    static get observedAttributes() { return ['name', 'active', 'content', 'pin']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (previousValue !== currentValue) {
            if (attribute === 'name') {
                this.#button.textContent = currentValue;
            } else if (attribute === 'active') {
                setAttribute(this.#content, attribute, castAttribute(attribute, currentValue));
            }
        }
    }
}

define('quantum-tab', Tab);