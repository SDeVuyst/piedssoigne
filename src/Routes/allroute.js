import Home from "../Pages/Home";
import Page404 from "../Pages/404";

const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <Page404 /> },
];

export default routes;
