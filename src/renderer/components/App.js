import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Metrics from './Metrics';
import Metric from './Metric';
import Settings from './Settings';

// const { ipcRenderer } = window.require('electron');

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
];

function App() {
  // setInterval(() => {
  //   console.log('aaa');
  //   ipcRenderer.on('os:data', (e, data) => {
  //     console.log('data', data);
  //   });
  // }, 1000);

  return (
    <div className="app">
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
    </div>
  );
}

export default App;
