import './App.css';
import Userprofile from './Components/Userprofile';
import Header from './Components/Header';
import FullSlider from './Components/Home-PageSlider';
import AboutUs from './Components/Home-About';
import OurServices from './Components/Home-Services';

function App() {
  return (
    <div className="App">
      <header className="">
            <Header />
            <FullSlider />
            <AboutUs />
            <OurServices />
      </header>
    </div>
  );
}

export default App;
