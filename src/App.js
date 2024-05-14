import Header from './Components/Header_Footer/Header';
import Footer from './Components/Header_Footer/Footer';
import Slider from './Components/HomePage/Slider';
import About from './Components/HomePage/About';
import Skill from './Components/HomePage/Skill';
import Blog from './Components/HomePage/Blog';
import Service from './Components/HomePage/Service';
import WhyChooseMe from './Components/HomePage/ChooseMe';
import ProductPrice from './Components/HomePage/Price';
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
