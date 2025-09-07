import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";
import "animate.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

const App = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
       <Toaster />
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
