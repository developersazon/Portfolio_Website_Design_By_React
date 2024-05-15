import { Outlet } from 'react-router-dom';
import Banner from '../HomePage/Banner';
import About from './About';
import Mission from './Mission';
import Vission from './Vission';


export default function AboutPage() {
  return (
    <div className="contact">
         <Banner/>
         <About/>
         <Vission/>
         <Mission/>
    </div>
  );
}