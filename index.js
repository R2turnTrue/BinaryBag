const { app, BrowserWindow, ipcMain } = require('electron')
let window

function openWindow() {
    window = new BrowserWindow({
        height: 800,
        width: 600,
        webPreferences: {
            preload: __dirname + '/preload.js'
        }
    })
    window.loadFile(__dirname + '/views/index.html')
}

ipcMain.on('asdf', (arg1, arg2) => {
    console.log('asdf recive: ' + arg2)
})

ipcMain.on('qwer', (ev, arg1) => {
    console.log('qwer recive: ' + arg1)
})

app.whenReady().then(openWindow)