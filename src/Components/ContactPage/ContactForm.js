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
  MDBBtn
} from 'mdb-react-ui-kit';
import ContactImage from '../img/Contactform.svg';

function ContactForm() {
  return (
    <section>
        <MDBContainer className='mb-8'>
                <MDBRow>
                    {/* form image section start here */}
                    <MDBCol xs={6} md={12} xl={6}>
                            <MDBCardImage src={ContactImage} position='top' alt='...' />
                    </MDBCol>
                    {/* form image section end here */}

                    {/* form section start here */}
                    <MDBCol xs={6} md={12} xl={6} className='' style={{ textAlign: 'justify' }}>
                      <form className='card p-3'>
                        <p className='h3 text-center googlefont my-2'>Any question lets consult !</p>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" id="form6Example3" className="form-control" />
                            <label className="form-label" for="form6Example3">Full Name</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" id="form6Example4" className="form-control" />
                            <label className="form-label" for="form6Example4">Address</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" id="form6Example5" className="form-control" />
                            <label className="form-label" for="form6Example5">Email</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="number" id="form6Example6" className="form-control" />
                            <label className="form-label" for="form6Example6">Phone</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                            <label className="form-label" for="form6Example7">Write your topic in detail</label>
                        </div>
                        <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block">Send Now</button>
                        </form>
                    </MDBCol>
                    {/* form section end here */}
                
               </MDBRow>
        </MDBContainer>
    </section>
  );
}

export default ContactForm;