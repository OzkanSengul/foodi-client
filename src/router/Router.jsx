import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/error/ErrorPage.jsx";
import Main from "../layout/Main.jsx";
import Home from "../pages/home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main is a component
    errorElement: <Error />, // Error is a component
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

export default router;
