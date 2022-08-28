import { ipcRenderer } from "electron";

function close_app () {
    ipcRenderer.send('close', true);
    console.log("close");
}

function minimize_app () {
    ipcRenderer.send('minimize', true);
    console.log("minimize");
}
