import Home from '~/pages/Home';
import SendMail from '~/pages/SendMail';
export const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/mail',
    component: SendMail,
  },
];
export const privateRoutes = [];
