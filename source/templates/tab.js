export default `
<style>
    :host {
        display: inline-block;
    }

    :host[pin] {
        align-self: flex-start;
    }

    button  {
        color: var(--color);
        background-color: var(--background-color);
        font-size: var(--font-size);
        letter-spacing: var(--letter-spacing);
        text-transform: var(--text-transform);
        line-height: var(--line -height);
        box-sizing: var(--box-sizing);
        box-shadow: var(--box-shadow);
        border: var(--border);
        border-radius: var(--border-radius);
        outline: var(--outline);
        padding: var(--padding);
        cursor: var(--cursor);
        transition: var(--transition);
    }
</style>
<button draggable="true"></button>
`;