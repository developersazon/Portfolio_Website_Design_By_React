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
  MDBRipple,
  MDBTextArea
} from 'mdb-react-ui-kit';
import CardImage1 from '../img/card4.png'
import CardImage2 from '../img/card2.png'
import CardImage3 from '../img/card3.png'

function Contact() {
  return (
    <section>
        <MDBContainer className='my-5 mb-8'>
            <div className='py-4 text-center'>
                <h1 className='googlefont'>Check out our latest Blog</h1>
                <p className='px-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
            <MDBRow>
                {/* Card one start here */}
                <MDBCol xs={6} md={6} xl={4}>
                    <MDBCard className='mb-3'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={CardImage1} position='top' fluid alt='...'/>
                        <a><div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div></a>
                    </MDBRipple>
                        <MDBCardBody align='justify'>
                            <MDBCardTitle>Running Smoothly</MDBCardTitle>
                            <MDBCardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </MDBCardText>
                            <MDBBtn href='#'>Read More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

                {/* Card one start here */}
                <MDBCol xs={6} md={6} xl={4}>
                    <MDBCard className='mb-3'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={CardImage2} position='top' fluid alt='...' />
                            <a><div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div></a>
                        </MDBRipple>
                        <MDBCardBody align='justify'>
                            <MDBCardTitle>Riding Car</MDBCardTitle>
                            <MDBCardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </MDBCardText>
                            <MDBBtn href='#'>Read More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

                {/* Card one start here */}
                <MDBCol xs={6} md={6} xl={4}>
                    <MDBCard className='mb-3'>
                       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={CardImage3} position='top' fluid alt='...' />
                            <a><div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div></a>
                        </MDBRipple>
                        <MDBCardBody align='justify'>
                            <MDBCardTitle>Seeing Sky</MDBCardTitle>
                            <MDBCardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </MDBCardText>
                            <MDBBtn href='#'>Read More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

            </MDBRow>
        </MDBContainer>
    </section>
  );
}

export default Contact;