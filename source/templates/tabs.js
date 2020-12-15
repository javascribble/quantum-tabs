export default `
<style>
    :host {
        background-color: var(--background-color);
    }
    
    :host, #tabs {
        display: flex;
    }

    :host([dock="top"]), :host([dock="left"]) > #tabs, :host([dock="right"]) > #tabs {
        flex-direction: column;
    }

    :host([dock="right"]) {
        flex-direction: row-reverse;
    }

    :host([dock="bottom"]) {
        flex-direction: column-reverse;
    }

    #contents::slotted(*) {
        flex-grow: 1;
    }

    #contents::slotted(:not([active])) {
        display: none;
    }
</style>
<slot id="tabs" name="tabs"></slot>
<slot id="contents"></slot>
`;