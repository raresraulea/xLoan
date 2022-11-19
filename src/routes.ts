import LoanPoolsPage from 'pages/LoanPools';
import withPageTitle from './components/PageTitle';
import { dAppName } from './config';
import Home from './pages/Home';
import Transaction from './pages/Transaction';

export const routeNames = {
  home: '/',
  dashboard: '/dashboard',
  loanPools: '/loan-pools',
  transaction: '/transaction',
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect'
};

const routes: Array<any> = [
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.loanPools,
    title: 'Loan Pools',
    component: LoanPoolsPage,
    authenticatedRoute: true
  },
  {
    path: routeNames.dashboard,
    title: 'Home',
    component: Home,
    authenticatedRoute: true
  },
  {
    path: routeNames.transaction,
    title: 'Transaction',
    component: Transaction
  }
];

export const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • Elrond ${dAppName}`
    : `Elrond ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
