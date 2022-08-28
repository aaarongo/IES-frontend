import { ipcRenderer } from "electron";

export function close_app() {
    remote
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
