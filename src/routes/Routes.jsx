import { createBrowserRouter } from "react-router-dom";
import Client from "../Layout/Client";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import WorkWithUs from "../pages/WorkWithUs";
import WhoWeServe from "../pages/WhoWeServe";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Privacy_Policy from "../pages/Privacy_Policy";
import Investor from "../pages/Investor";

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
      { path: "/privacy-policy", element: <Privacy_Policy /> },
      { path: "/investor", element: <Investor /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
