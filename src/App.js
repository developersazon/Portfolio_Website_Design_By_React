import Header from './Components/Header_Footer/Header';
import Footer from './Components/Header_Footer/Footer';
import Slider from './Components/HomePage/Slider';
import About from './Components/HomePage/About';
import Skill from './Components/HomePage/Skill';
import Blog from './Components/HomePage/Blog';
import Service from './Components/HomePage/Service';


export default function App() {
  return (
    <div className="App">
      <header className="">
            <Header />
            <Slider />
            <About />
            <Skill />
            <Service />
            <Blog />
            <Footer />
      </header>
    </div>
  );
}
