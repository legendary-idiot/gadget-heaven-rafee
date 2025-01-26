import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MainLayout = () => {
  return (
    <div className="w-11/12 m-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
