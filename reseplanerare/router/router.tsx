import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Trips from "../pages/Trips/Trips";
import TripDetails from "../pages/Trips/TripDetails";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "resor",
        element: <Trips />,
        children: [
          {
            path: ":id",
            element: <TripDetails />,
          },
        ],
      },
      {
        path: "om-oss",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
