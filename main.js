const path = require('path');
var electron = require("electron");
// 控制应用生命周期的模块。
// 创建原生浏览器窗口的模块
var {
    app,
    BrowserWindow
} = electron;

var mainWindow = null

function initialize() {
    var shouldQuit = makeSingleInstance();
    if (shouldQuit)
        return app.quit();

    function createWindow() {
        var windowOptions = {
            width: 1000,
            minWidth: 680,
            height: 600,
            title: app.getName()
        };

        // if (process.platform === 'linux') {
        //     windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png')
        // }

        mainWindow = new BrowserWindow(windowOptions);
        mainWindow.loadURL(path.join('file://', __dirname, '/app/views/index.html'));

        // 打开开发者工具
        // mainWindow.openDevTools();

        mainWindow.on('closed', function () {
            mainWindow = null;
        })
    }

    app.on('ready', function () {
        createWindow();
    })

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    })

    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow();
        }
    })
}

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance() {
    if (process.mas)
        return false;

    return app.makeSingleInstance(function () {
        if (mainWindow) {
            if (mainWindow.isMinimized())
                mainWindow.restore();

            mainWindow.focus();
        }
    })
}

initialize();