import { ipcRenderer } from "electron";

export function close_app () {
    ipcRenderer.send('close', true);
    console.log("close");
}

export function minimize_app () {
    ipcRenderer.send('minimize', true);
    console.log("minimize");
}
