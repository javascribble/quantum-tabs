export default `
<style>
    ::slotted([slot="panel"]:not([active])) {
        display: none;
    }
</style>
<slot name="tab"></slot>
<slot name="panel"></slot>
`;