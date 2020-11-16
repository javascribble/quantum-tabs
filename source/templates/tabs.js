export default `
<style>
    :host {
        display: block;
    }
    
    ::slotted([slot="content"]:not([active])) {
        display: none;
    }
</style>
<slot name="tab"></slot>
<slot name="content"></slot>
`;