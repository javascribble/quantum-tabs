// TODO: Find event that fires after slot is loaded the first time.
document.addEventListener('DOMContentLoaded', event => {
    const tabs = document.querySelectorAll('quantum-tabs[active]');
    for (const tab of tabs) {
        tab.activate(tab.active);
    }
});