import { ipcRenderer } from "electron";


export function close_app() {
    ipcRenderer.sendSync('close');
    // console.log("close");
}

export function minimize_app() {
    ipcRenderer.sendSync('minimize');
    // console.log("minimize");
}
