import React, { useEffect } from 'react';

export default function Exit() {
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('exit.app');
  }, []);
  return <div>Exit</div>;
}
