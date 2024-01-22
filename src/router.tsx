import {createBrowserRouter, RouteObject} from "react-router-dom";

import Home from 'views/home';

const routes: RouteObject[] = [
    ...["/", "/home"].map((path) => ({ path, element: <Home /> })),
    { path: "/characters", element: <div>characters</div> },
    { path: "/planets", element: <div>planets</div> },
    { path: "/starships", element: <div>starships</div> },
];

const  router = createBrowserRouter(routes);

export default router;

