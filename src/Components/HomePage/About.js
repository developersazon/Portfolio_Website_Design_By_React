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
import AboutImage from '../img/Image1.jpg';

function About() {
  return (
    <section>
        <MDBContainer className='my-5 mb-9'>
            <MDBRow className=''>
                {/* Banner section start here */}
                <MDBCol xs={6} md={12} xl={6}>
                    <MDBCard className='mb-3'>
                        <MDBCardImage src={AboutImage} position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle className='googlefont'>Design your custom website with me...</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Banner section end here */}

                {/* About text section start here */}
                <MDBCol xs={6} md={12} xl={6} className='' style={{ textAlign: 'justify' }}>
                        <h1 id='#aboutus' className='py-2 googlefont'>About Us</h1>
                        <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/> 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <MDBBtn href='#aboutus' className='text-capitalize'>Read More</MDBBtn>
                </MDBCol>
                {/* About text section end here */}
            </MDBRow>
        </MDBContainer>
    </section>
  );
}

export default About;