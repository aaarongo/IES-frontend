import { ipcRenderer } from "electron";


export function close_app() {
    ipcRenderer.send('close_app');
    console.log("close");
}

export function minimize_app() {
    ipcRenderer.send('minimize_app');
    // console.log("minimize");
}
