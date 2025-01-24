
import { createBrowserRouter } from "react-router-dom";
import Layout from "../app/Views/Layout"; 
import Home from "../app/Views/Home";
import Error from "../app/Views/Error"; 
import AccountType from "../features/auth/pages/AccountType"; 
import Signup from "../features/auth/pages/Signup"; 
import RegistrationDetails from "../features/auth/pages/RegistrationDetails"; 
import EmailVerification from "../features/auth/pages/client/pages/EmailVerification";
import Login from "../features/auth/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true, // Default route
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "signup",
        element: <AccountType />,
      },
      {
        path: "signup/:accountType",
        element: <Signup />,
      },
      {
        path: "signup/:accountType/registration",
        element: <RegistrationDetails />,
      },
      {
        path: "signup/:accountType/verification",
        element: <EmailVerification />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />, // Catch-all for unmatched routes
  },
]);

export default router;
