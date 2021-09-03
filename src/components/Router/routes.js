import FrontPage from '../../pages/Frontpage/frontPage';
import Betingelser from '../../pages/TermsPage/TermsPage';
import Login from '../../pages/Loginpage/Login';
import Cart from '../../pages/CartPage/CartPage';


const routes = [
    {
        name: 'Forside',
        path: '/',
        exact: true,
        component: FrontPage
    },
    {
        name: 'Salgs- og handelsbetingelser',
        path: '/Salg',
        exact: true,
        component: Betingelser
    },
    {
        name: 'Login',
        path: '/Login',
        exact: true,
        component: Login,
        hidden: true
    },
    {
        name: 'Cart',
        path: '/Cart',
        exact: true,
        component: Cart,
        hidden: true
    },
];

export default routes;