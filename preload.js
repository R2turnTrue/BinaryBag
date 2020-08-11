const { ipcRenderer } = require('electron')

window.onload = (window) => {
    ipcRenderer.send('asdf', '1234')
    const docu = document.getElementById('asdf')
    docu.onclick = (ev) => {
        ipcRenderer.send('qwer', '1234f')
    }
}

window.eval = global.eval = function() {
    throw new Error(`죄송합니다. 이 앱은 eval을 지원하지 않아요.`)
}