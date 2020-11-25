export default `
<style>
    :host {
        display: flex;
        flex-direction: column;
    }

    :host([dock]) {
        
    }

    slot#content::slotted(*) {
        flex-grow: 1;
    }

    slot#content::slotted(:not([active])) {
        display: none;
    }
</style>
<div id="tabs"><slot name="tabs"></slot><div>
<slot id="content"></slot>
`;