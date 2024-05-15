import { Outlet } from 'react-router-dom';
import Header from './Components/HomePage/Header';
import Footer from './Components/HomePage/Footer';

export default function App() {
  return (
    <div className="App">

            <Header />
                 <Outlet/>
            <Footer />
    </div>
  );
}
