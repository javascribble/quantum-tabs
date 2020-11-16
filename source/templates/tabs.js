export default `
<style>
    ::slotted([slot="content"]:not([active])) {
        display: none;
    }

    :host {
        display: block;
        height: 100%;
    }
</style>
<slot name="tab"></slot>
<slot name="content"></slot>
`;