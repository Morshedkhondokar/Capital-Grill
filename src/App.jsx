import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";
import "animate.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
