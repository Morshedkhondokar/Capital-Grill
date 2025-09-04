import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";
import "animate.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./layout/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
