// import { ipcRenderer } from "electron";


// export function close_app() {
//     ipcRenderer.send('close');
//     // console.log("close");
// }

// export function minimize_app() {
//     ipcRenderer.send('minimize');
//     // console.log("minimize");
// }

const remote = require('electron').remote;

document.getElementById("minimize_btn").addEventListener("click", function (e) {
     var window = remote.getCurrentWindow();
     window.minimize(); 
});

document.getElementById("close_btn").addEventListener("click", function (e) {
     var window = remote.getCurrentWindow();
     window.close();
}); 
