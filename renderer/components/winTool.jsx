import { useState } from 'react';
import { VscChromeMinimize, VscChromeMaximize, VscChromeRestore, VscChromeClose } from 'react-icons/vsc';
import { ipcRenderer } from 'electron';

const WinTool = () => {
  const [max, setMax] = useState(false);

  const maxFn = () => {
    setMax(!max);
    if (max) {
      ipcRenderer.send('restore');
    } else {
      ipcRenderer.send('maximize');
    }
  }

  return (
    <div className="win-tools w-full flex justify-end gap-1">
      <button className='border rounded-md hover:bg-slate-700 border-gray-800 px-2 py-1' onClick={() => ipcRenderer.send('minimize')}><VscChromeMinimize /></button>
      <button className='border rounded-md hover:bg-slate-700 border-gray-800 px-2 py-1' onClick={maxFn}>{max ? <VscChromeRestore /> : <VscChromeMaximize /> }</button>
      <button className='text-red-700 border rounded-md hover:bg-slate-700 border-gray-800 px-2 py-1' onClick={() => ipcRenderer.send('close')}><VscChromeClose /></button>
    </div>
  )
}

export default WinTool;