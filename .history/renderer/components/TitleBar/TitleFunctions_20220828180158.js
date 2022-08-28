const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

export function close_app() {
    ipc.send('close_app');
    console.log("close");
}

export function minimize_app() {
    ipc.send('minimize_app');
    console.log("minimize");
}
