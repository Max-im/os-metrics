import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DataContext from '../context/DataContext';
import IData from '../../interfaces/Data';
import Header from './Header';
import routes from '../routes';
import '../styles/app.css';

function App() {
  const [osData, setData] = useState<IData[]>([]);
  const maxValuesNum = 30;

  useEffect(() => {
    setInterval(() => {
      window.electron.ipcRenderer.sendMessage('get.data', []);
    }, 3000);
  }, []);

  window.electron.ipcRenderer.on('os.data', (data) => {
    const newData = [...osData, data] as IData[];
    while (newData.length > maxValuesNum) {
      newData.shift();
    }
    setData(newData);
  });

  return (
    <div className="app">
      <DataContext.Provider value={osData}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.url}
                  path={route.url}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </div>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
