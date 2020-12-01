export default `
<style>
    :host {
        display: flex;
        flex-direction: column;
    }

    :host([dock]) {
        
    }

    slot[name="tabs"] {
        display: flex;
    }

    slot#content::slotted(*) {
        flex-grow: 1;
    }

    slot#content::slotted(:not([active])) {
        display: none;
    }
</style>
<slot name="tabs"></slot>
<slot id="content"></slot>
`;