import { createBrowserRouter } from "react-router-dom";
import Client from "../Layout/Client";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
