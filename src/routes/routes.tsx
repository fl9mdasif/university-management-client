import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { routerGenerator } from "../utils/routerGenerator";
import { AdminPath } from "./admin.routes";
import { StudentPath } from "./student.routes";
import { FacultyPath } from "./faculty.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routerGenerator(AdminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routerGenerator(FacultyPath),
  },
  {
    path: "/student",
    element: <App />,
    children: routerGenerator(StudentPath),
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
