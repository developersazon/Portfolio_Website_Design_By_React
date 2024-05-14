import { Outlet } from 'react-router-dom';
import Banner from '../HomePage/Banner';
import ContactForm from './ContactForm';


export default function Contact() {
  return (
    <div className="contact">
         <Banner/>
         <ContactForm/>
         <ContactForm/>
    </div>
  );
}
