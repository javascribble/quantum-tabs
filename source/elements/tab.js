import { tabDragStart, tabDragEnd } from '../controls/draggable.js';
import { tabDrop, tabDragOver } from '../controls/droppable.js';
import { tabClick } from '../controls/click.js';
import html from '../templates/tab.js';

const { Component, template, define, getAttribute, setAttribute } = quantum;

export class Tab extends Component {
    #button = this.shadowRoot.querySelector('button');

    constructor(container, content) {
        super();

        this.slot = 'tabs';
        this.content = content;
        this.id = `${content.id}-tab`;
        this.name = getAttribute(content, 'tab') || content.id;
        this.active = container.active === content.id;
        setAttribute(content, 'active', this.active);

        this.addEventListener('dragstart', tabDragStart);
        this.addEventListener('dragover', tabDragOver);
        this.addEventListener('dragend', tabDragEnd);
        this.addEventListener('drop', tabDrop);
        this.addEventListener('click', tabClick);
    }

    static template = template(html);

    static get observedAttributes() { return ['name', 'active', 'pin']; }

    get index() { return this.parentElement.slots.get(this.slot).indexOf(this); }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'name':
                this.#button.textContent = currentValue;
                break;
            case 'active':
                setAttribute(this.content, attribute, currentValue);
                break;
        }
    }

    split() {
        const parent = this.parentElement.cloneNode();
        parent.appendChild(this.content);
        return parent;
    }
}

define('quantum-tab', Tab);