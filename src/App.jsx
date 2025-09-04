import { Outlet } from 'react-router';
import Navbar from './layout/Navbar';
import 'animate.css';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


const App = () => {
   useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='max-w-7xl mx-auto overflow-x-hidden'>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default App;