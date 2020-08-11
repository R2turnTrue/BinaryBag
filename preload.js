const { ipcRenderer } = require('electron')

window.onload = (window) => {
    ipcRenderer.send('asdf', '1234')
    const docu = document.getElementById('asdf')
    docu.onclick = (ev) => {
        ipcRenderer.send('qwer', '1234f')
    }
}