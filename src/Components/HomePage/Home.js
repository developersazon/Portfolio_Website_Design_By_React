import { Outlet } from 'react-router-dom';
import Slider from './Slider';
import About from '../AboutPage/About';
import Service from './Service';
import ChooseMe from './ChooseMe';
import MySkills from './Skill';
import Price from './Price';
import Blog from '../BlogPage/Blog';
 

export default function Home() {
  return (
    <div className="App">
         <Slider/>
         <About/>
         <MySkills/>
         <Service/>
         <ChooseMe/>
         <Price/>
         <Blog/>
    </div>
  );
}
