import { Component, template, define, getAttribute, setAttribute } from '../import.js';
import { tabDragStart, tabDragEnd } from '../controls/draggable.js';
import { tabDrop, tabDragOver } from '../controls/droppable.js';
import { tabClick } from '../controls/click.js';
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

        this.addEventListener('dragstart', tabDragStart);
        this.addEventListener('dragover', tabDragOver);
        this.addEventListener('dragend', tabDragEnd);
        this.addEventListener('drop', tabDrop);
        this.addEventListener('click', tabClick);
    }

    static template = template(html);

    static get observedAttributes() { return ['name', 'active', 'pin']; }

    get index() { return this.parentElement.slots.get(this.slot).indexOf(this); }

    nameAttributeChanged(attribute, previousValue, currentValue) {
        this.#button.textContent = currentValue;
    }

    activeAttributeChanged(attribute, previousValue, currentValue) {
        setAttribute(this.content, attribute, currentValue);
    }

    split() {
        const parent = this.parentElement.cloneNode();
        parent.appendChild(this.content);
        return parent;
    }
}

define('quantum-tab', Tab);