export const enableDragDrop = element => {
    element.ondragstart = event => {
        const dataTransfer = event.dataTransfer;
        dataTransfer.setData('id', element.id);
        dataTransfer.setData('group', element.group);
        //dataTransfer.setDragImage(element.dragImage)
    }

    //element.ondrag = event => {};
    //element.ondragenter = event => {};
    element.ondragover = event => event.preventDefault();
    //element.ondragleave = event => {};
    //element.ondragend = event => {};
    //element.ondragstop = event => {};

    element.ondrop = event => {
        const dataTransfer = event.dataTransfer;
        const data = {
            id: dataTransfer.getData('id'),
            group: dataTransfer.getData('group')
        };

        if (data.id !== element.id && data.group === element.group) {
            event.preventDefault();
            element.appendChild(document.querySelector(`#${data.id}`));
        }

        // if (element.effectAllowed) {
        //     switch (dataTransfer.dropEffect) {
        //         case 'copy':
        //         case 'link':
        //         case 'move':
        //         default:
        //             if (dataTransfer.files.length) {
        //             } else {
        //             }

        //             break;
        //     }
        // }
    };
}