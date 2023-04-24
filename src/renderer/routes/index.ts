import Metrics from '../pages/Metrics';
import Metric from '../pages/Metric';
import Exit from '../pages/Exit';

export const metric = {
  url: '/metric/:id',
  element: Metric,
  title: 'Metric Dashboard',
  inMenu: false,
};

const routes = [
  {
    url: '/',
    element: Metrics,
    title: 'OS-Metrics',
    inMenu: true,
  },
  metric,
  {
    url: '/exit',
    element: Exit,
    title: 'Quit',
    inMenu: true,
  },
];

export default routes;
