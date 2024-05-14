import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,  
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import ContactImage from '../img/Contactform.svg';

function ContactInformation() {
  return (
    <section>
        <MDBContainer className='mt-5'>
            <div className=''>
                <MDBRow>
                    {/* form section start here */}
                    <MDBCol className='card' xs={6} md={12} xl={6} className='' style={{ textAlign: 'justify' }}>
                            <div className='card rounded'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.770464306812!2d90.36453464969917!3d23.802854858150862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715674792649!5m2!1sen!2sbd" width="660" height="280" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                    </MDBCol>
                    {/* form section end here */}


                    {/* form image section start here */}
                    <MDBCol xs={6} md={12} xl={6}>
                            <div className='p-4'>
                                 <h6 className='h4 googlefont mb-4'>Address & Office Location</h6><hr/>
                                 <p><MDBIcon fas icon="phone-volume" className="me-3" />(+880) 01521564661</p>
                                 <p><MDBIcon fas icon="location-arrow" className="me-3" />Mirpur-1, Dhaka, Bangladesh</p>
                                 <p><MDBIcon far icon="envelope" className="me-3" />contact@sazonmahmud.com</p>
                                 <p><MDBIcon fas icon="link" className="me-3" />portfolio.sazonmahmud.com</p>
                            </div>
                    </MDBCol>
                    {/* form image section end here */}
                
               </MDBRow>
            </div>
        </MDBContainer>
    </section>
  );
}

export default ContactInformation;