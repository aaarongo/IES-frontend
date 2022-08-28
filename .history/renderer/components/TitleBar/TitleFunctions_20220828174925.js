import { ipcRenderer } from "electron";

export function close_app() {
    ipcRenderer.send('close', true);
}

export function minimize_app() {
    ipcRenderer.send('minimize', true);
}
