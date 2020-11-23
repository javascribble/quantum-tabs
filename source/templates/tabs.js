export default `
<style>
    :host {
        display: flex;
        flex-direction: column;
    }

    ::slotted(*) {
        flex-grow: 1;
    }

    ::slotted(:not([active])) {
        display: none;
    }
</style>
<div id="tabs"></div>
<slot></slot>
`;