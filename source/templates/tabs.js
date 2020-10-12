export default `
<style>
    ::slotted([slot="panel"]:not([active])) {
        display: none;
    }

    :host {
        display: block;
        height: 100%;
    }
</style>
<slot name="tab"></slot>
<slot name="panel"></slot>
`;