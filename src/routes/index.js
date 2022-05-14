import Home from '~/pages/Home';
import Footer from '~/pages/Footer';
export const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/foo',
    component: Footer,
  },
];
export const privateRoutes = [];
