export default `
<style>
    :host {
        display: flex;
    }

    :host([dock="top"]), :host([dock="left"]) > #tabs, :host([dock="right"]) > #tabs {
        flex-direction: column;
    }

    :host([dock="left"]) {
        flex-direction: row;
    }

    :host([dock="right"]) {
        flex-direction: row-reverse;
    }

    :host([dock="bottom"]) {
        flex-direction: column-reverse;
    }    

    #tabs {
        display: flex;
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