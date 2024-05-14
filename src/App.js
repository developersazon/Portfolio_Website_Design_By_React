import Header from './Components/Header_Footer/Header';
import Slider from './Components/HomePage/Slider';
import About from './Components/AboutPage/About';
import Skill from './Components/HomePage/Skill';
import Service from './Components/HomePage/Service';
import WhyChooseMe from './Components/HomePage/ChooseMe';
import Footer from './Components/Header_Footer/Footer';
import { Outlet } from 'react-router-dom';
 


export default function App() {
  return (
    <div className="App">

            <Header />
                 <Outlet/>
            <Footer />
    </div>
  );
}
