import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Metrics from './Metrics';
import Metric from './Metric';
import Settings from './Settings';
import Exit from './Exit';
import DataContext from '../context/DataContext';

const routes = [
  {
    url: '/',
    element: Metrics,
  },
  {
    url: '/metric/:id',
    element: Metric,
  },
  {
    url: '/settings',
    element: Settings,
  },
  {
    url: '/exit',
    element: Exit,
  },
];

function App() {
  const [osData, setData] = useState([]);

  useEffect(() => {
    setInterval(() => {
      window.electron.ipcRenderer.sendMessage('get.data');
    }, 3000);
  }, []);

  window.electron.ipcRenderer.on('os.data', (data) => {
    const newData = [...osData, data];
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
