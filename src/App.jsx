import { Outlet } from 'react-router';
import Navbar from './layout/Navbar';
import 'animate.css';


const App = () => {

  return (
    <div className='max-w-7xl mx-auto overflow-x-hidden'>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default App;