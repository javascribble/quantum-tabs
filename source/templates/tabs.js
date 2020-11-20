export default `
<style>
    :host {
        display: flex;
        flex-direction: column;
    }

    ::slotted([slot="content"]:not([active])) {
        display: none;
    }

    #contents {
        flex-grow: 1;
    }
</style>
<div id="tabs">
    <slot name="tab"></slot>
</div>
<div id="contents">
    <slot name="content"></slot>
</div>
`;