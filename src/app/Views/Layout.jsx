import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const Layout = () => {
  return (
    <div className=" flex flex-col w-full h-screen">
      <div className="fixed z-50 w-full">
        <Navbar />
      </div>
      <div className="flex-grow mt-[2.7rem] py-2 md:mt-[3.2rem] bg-gray-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
