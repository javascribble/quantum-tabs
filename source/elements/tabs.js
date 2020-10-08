import html from '../templates/tabs.js';

export class Tabs extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-tabs', Element);