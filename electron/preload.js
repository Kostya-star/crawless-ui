const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronApi', {
  startNewWorkflow: async () => {
    return await ipcRenderer.invoke('startNewWorkflow');
  },
});
