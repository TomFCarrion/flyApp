import AppWrapper from '../components/AppWrapper';
import ResultWrapper from '../components/Result/ResultWrapper';

const routes = [
  {
    exact: true,
    path: '/',
    component: AppWrapper,
  },
  {
    exact: true,
    path: '/result',
    component: ResultWrapper,
  },
];

export default routes;
