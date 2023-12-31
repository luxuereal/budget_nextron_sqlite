import { app, ipcMain, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1366,
    height: 768
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/login`);
    mainWindow.setMenuBarVisibility(false);
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

ipcMain.on('close', () => app.quit());
ipcMain.on('minimize', () =>
  BrowserWindow.getFocusedWindow().minimize()
);
ipcMain.on('maximize', () => 
  BrowserWindow.getFocusedWindow().maximize()
);
ipcMain.on('restore', () => 
  BrowserWindow.getFocusedWindow().restore()
);
