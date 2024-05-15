import { Outlet } from 'react-router-dom';
import Slider from './Slider';
import About from '../AboutPage/About';
import MySkills from '../ServicePage/Skill';
import Service from '../ServicePage/Service';
import ChooseMe from '../ServicePage/ChooseMe';
import Price from '../ServicePage/Price';
import Blog from '../BlogPage/Blog';

 
export default function Home() {
  return (
    <div className="App">
         <Slider/>
         <About/>
         <Service/>
         <MySkills/>
         <ChooseMe/>
         <Price/>
         <Blog/>
    </div>
  );
}
