import { ipcRenderer } from "electron";

function close_app () {
    ipcRenderer.send('close', true);
}

function minimize_app () {
    ipcRenderer.send('minimize', true);
}