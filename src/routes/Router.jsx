
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/menu',
                element:<Menu/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
            ,
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default Router;