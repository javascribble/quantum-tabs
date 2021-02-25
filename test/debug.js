import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

// TODO: Find event that fires after slot is loaded the first time.
document.addEventListener('DOMContentLoaded', event => {
    const tabs = document.querySelectorAll('quantum-tabs[active]');
    for (const tab of tabs) {
        tab.activate(tab.active);
    }
});

document.body.style.visibility = 'visible';