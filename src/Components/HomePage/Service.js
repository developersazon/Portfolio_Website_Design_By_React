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
  MDBTextArea,
  MDBIcon
} from 'mdb-react-ui-kit';
import CardImage1 from '../img/card4.png'
import CardImage2 from '../img/card2.png'
import CardImage3 from '../img/card3.png'

function Service() {
  return (
    <section>
        <MDBContainer className='my-5 mb-9'>
            <h1 className='mb-8 googlefont'>What Can I do for you ?</h1>
            <MDBRow>
                {/* Card one start here */}
                <MDBCol xs={6} md={3} align='justify'>
                    <MDBCard className='mb-3'>
                    <div className='positon-relative mb-4'>
                         <div class="position-absolute top-0 start-50 translate-middle">
                              <MDBIcon className='p-3 bg-primary rounded text-light' fas icon="code" size='1x'/>
                         </div>   
                    </div>
                        <MDBCardBody>
                            <MDBCardTitle>Web Design & Development</MDBCardTitle>
                            <MDBCardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

                {/* Card two start here */}
                <MDBCol xs={6} md={3} align='justify'>
                    <MDBCard className='mb-3'>
                    <div className='positon-relative mb-4'>
                         <div class="position-absolute top-0 start-50 translate-middle">
                              <MDBIcon className='p-3 bg-primary rounded text-light' fas icon="bezier-curve" size='1x'/>
                         </div>   
                    </div>
                        <MDBCardBody>
                            <MDBCardTitle>Graphic Design</MDBCardTitle>
                            <MDBCardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card two end here */}

                {/* Card theree start here */}
                <MDBCol xs={6} md={3} align='justify'>
                    <MDBCard className='mb-3'>
                    <div className='positon-relative mb-4'>
                         <div class="position-absolute top-0 start-50 translate-middle">
                              <MDBIcon className='p-3 bg-primary rounded text-light' fab icon="app-store" size='1x'/>
                         </div>   
                    </div>
                        <MDBCardBody>
                            <MDBCardTitle>App Development</MDBCardTitle>
                            <MDBCardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card three end here */}


                {/* Card one start here */}
                <MDBCol xs={6} md={3} align='justify'>
                    <MDBCard className='mb-3'>
                    <div className='positon-relative mb-4'>
                         <div class="position-absolute top-0 start-50 translate-middle">
                              <MDBIcon className='p-3 bg-primary rounded text-light' fas icon="fill" size='1x'/>
                         </div>   
                    </div>
                        <MDBCardBody>
                            <MDBCardTitle>Manage Website</MDBCardTitle>
                            <MDBCardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

            </MDBRow>
        </MDBContainer>
    </section>
  );
}

export default Service;