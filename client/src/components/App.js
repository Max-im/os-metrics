import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Metrics from './Metrics';
import Metric from './Metric';
import Settings from './Settings';

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
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.url} path={route.url} element={<route.element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
