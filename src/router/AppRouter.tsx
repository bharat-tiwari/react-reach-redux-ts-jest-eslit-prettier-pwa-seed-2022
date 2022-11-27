import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App/App';
import Home from '../screens/Home/Home';
import Products from '../screens/Products/Products';
import Error from '../screens/Error/Error';

// => Routes can be defined either using an arry of route objects as below
// const appRouter = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home />,
//         errorElement:  <Error />
//     },
//     ...
// ]);

// => Routes can be also be defined either using <Route> component in createRoutesFromElements
const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} errorElement={<Error />}>
                <Route path="/" element={<Home />} errorElement={<Error />} />
                <Route path="home" element={<Home />} errorElement={<Error />} />
                <Route path="products" element={<Products />} errorElement={<Error />} />
            </Route>
        </>,
    ),
);
export default appRouter;
