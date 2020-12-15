export default `
<style>
    :host {
        display: flex;
        background-color: var(--background-color);        
    }

    :host[pin] {
        align-self: flex-start;
    }

    button  {
        flex-grow: 1;
        background-color: transparent;
        color: var(--color);
        font-size: var(--font-size);
        letter-spacing: var(--letter-spacing);
        text-transform: var(--text-transform);
        line-height: var(--line -height);
        box-sizing: var(--box-sizing, border-box);
        box-shadow: var(--box-shadow);
        border: var(--border);
        border-radius: var(--border-radius);
        padding: var(--padding);
        cursor: var(--cursor, pointer);
        outline: var(--outline, none);
    }
</style>
<button draggable="true"></button>
`;