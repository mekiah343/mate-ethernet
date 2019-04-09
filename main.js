// -----------------------------
// Code for hot reloading
// -----------------------------
const electron = require('electron')

// Enable live reload for Electron too
require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`)
});


// -----------------------------
// Create the window
// -----------------------------

const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 645, height: 360, frame: false, transparent: true})
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  
  win.setPosition(width-645, 0)

  // and load the index.html of the app.
  win.loadFile('index.html')
  // load dev tools
  //win.toggleDevTools()
}

app.on('ready', createWindow)
