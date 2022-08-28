import { ipcRenderer } from "electron";
const remote = require('electron').remote;

export function close_app() {
    ipcRenderer.send('close');
    // console.log("close");
    var window = remote.getCurrentWindow();
    window.minimize(); 
}

export function minimize_app() {
    ipcRenderer.send('minimize');
    // console.log("minimize");
    var window = remote.getCurrentWindow();
    window.close();
}
