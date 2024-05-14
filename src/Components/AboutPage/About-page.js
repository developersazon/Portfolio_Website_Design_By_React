import { Outlet } from 'react-router-dom';
import Banner from '../HomePage/Banner';
import About from './About';

export default function AboutPage() {
  return (
    <div className="contact">
         <Banner/>
         <About/>
    </div>
  );
}