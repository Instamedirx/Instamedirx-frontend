import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import AccountTypeSelection from "./features/auth/pages/accountSelection";
import RegisterPharmacist from "./features/auth/pages/pharmReg";
import PharmRegistrationDetails from "./features/auth/pages/PharmRegDetails"
import Qualifications from "./features/auth/pages/PharmQualifications";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/selection",
      element: <AccountTypeSelection />, 
    },
    {
      path: "/selection/Pharmacist",
      element: <RegisterPharmacist />, 
    },
    {
      path: "/Pharmacist/Registration Details",
      element:<PharmRegistrationDetails/>
    },
    {
      path: "/Pharmacist/qualifications",
      element: <Qualifications/>
    },
    {
      path: "*",
      element: <div>Page Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
