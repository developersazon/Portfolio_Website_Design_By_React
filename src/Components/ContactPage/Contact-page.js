import { Outlet } from 'react-router-dom';
import Banner from '../HomePage/Banner';
import ContactForm from './ContactForm';
import ContactInformation from './Map';


export default function ContactPage() {
  return (
    <div className="contact">
         <Banner/>
         <ContactInformation/>
         <ContactForm/>
    </div>
  );
}
