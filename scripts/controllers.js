function minimize() {
  const { remote } = require('electron')
  remote.BrowserWindow.getFocusedWindow().minimize();
}

function logEvery2Seconds(i) {
    setTimeout(() => {
        logEvery2Seconds(++i);
    }, 500)
  }

  logEvery2Seconds(0);

  let i = 0;
  setInterval(() => {
    var gamepads = navigator.getGamepads();
  


    //console.log(remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds());
  }, 500)

