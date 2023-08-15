import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../page/Home/Home";
import Profile from "../page/tabs/Profile";
import JobCompany from "../page/tabs/JobCompany";
import About from "../page/dumipage/About";
import Contac from "../page/dumipage/Contac";
import Login from "../page/singup&register/Login";
import Registretion from "../page/singup&register/Registretion";
import Protectedroute from "./Protectedroute";

import Redirect from "../page/tabs/Redirect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/freasher",
        element: <JobCompany />,
      },
      {
        path: "/about",
        element: (
          <Protectedroute>
            <About />
          </Protectedroute>
        ),
      },
      {
        path: "/contact",
        element: <Contac />,
      },
      {
        path: "/protect",
        element: (
          <Protectedroute>
            <Redirect />
          </Protectedroute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registretion",
        element: <Registretion />,
      },
    ],
  },
]);
