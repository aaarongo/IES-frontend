const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

export function close_app() {
    ipc.send('close');
    // console.log("close");
}

export function minimize_app() {
    ipc.send('minimize');
    // console.log("minimize");
}
