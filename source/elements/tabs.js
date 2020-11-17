import { Component, template, define, getAttribute, setAttribute } from '../import.js';
import html from '../templates/tabs.js';

export class Tabs extends Component {
    #activate = (event => this.active = getAttribute(event.target, 'content')).bind(this);
    #validate = (element => this.active === element.id).bind(this);

    static template = template(html);

    static get observedAttributes() { return ['active', 'dock']; }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        if (slot.name === 'tab') {
            addedElements.forEach(element => element.addEventListener('click', this.#activate));
            deletedElements.forEach(element => element.removeEventListener('click', this.#activate));
        } else if (slot.name === 'content') {
            addedElements.forEach(element => setAttribute(element, 'active', this.#validate(element)));
            deletedElements.forEach(element => setAttribute(element, 'active', false));
            if (currentElements.length === 0) {
                this.parentElement.removeChild(this);
            } else if (!currentElements.some(element => this.#validate(element))) {
                this.active = currentElements[0].id;
            }
        }
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'active') {
            this.elements.get(this.slots.get('content')).forEach(content => setAttribute(content, 'active', content.id === currentValue));
        } else if (attribute === 'dock') {
            // TODO: Support docked tab list.
        }
    }
}

define('quantum-tabs', Tabs);