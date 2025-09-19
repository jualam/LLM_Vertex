import { createBrowserRouter } from "react-router-dom";
import Client from "../layout/Client";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import WorkWithUs from "../pages/WorkWithUs";
import WhoWeServe from "../pages/WhoWeServe";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/work-with-us", element: <WorkWithUs /> },
      { path: "/who-we-serve", element: <WhoWeServe /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
