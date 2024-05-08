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
  MDBProgress, 
  MDBProgressBar,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import whychoose from '../img/whychoose.svg';


export default function ChooseMe() {
  return (
    <section>
        <MDBContainer className=''>
            <h1 className='mb-3 googlefont'>Why you Choose us ?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <MDBRow>
                {/* image section start here */}
                <MDBCol xs={6} md={6} className='p-5'>
                        {/* <MDBCardImage src={AboutImage} position='top' alt='...' className=''/> */}
                        <img src={whychoose} className='img-fluid' alt='Skill Image' />

                </MDBCol>
                {/* image section end here */}


                {/* why section start here */}
                <MDBCol xs={6} md={6} className='mt-5' style={{ textAlign: 'justify' }}>
                        {/* Card one start here */}
                        <MDBCard>
                            <MDBRow className='g-0'>
                                <MDBCol>
                                       <div className='positon-relative'>
                                            <div class="position-absolute top-50 start-0 translate-middle">
                                                <MDBIcon className='p-3 bg-primary rounded text-light' far icon="newspaper" size='1x'/>
                                            </div>   
                                        </div>
                                        <MDBCardBody className='p-5' style={{ textAlign: 'justify'}}>
                                            <MDBCardTitle>Responsive & Unique Design</MDBCardTitle>
                                            <MDBCardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                            </MDBCardText>
                                        </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard><br/>
                        {/* card one end here */}

                        
                        {/* Card two start here */}
                        <MDBCard>
                            <MDBRow className='g-0'>
                                <MDBCol>
                                       <div className='positon-relative'>
                                            <div class="position-absolute top-50 start-0 translate-middle">
                                                <MDBIcon className='p-3 bg-primary rounded text-light' fas icon="headset" size='1x'/>
                                            </div>   
                                        </div>
                                        <MDBCardBody className='p-5' style={{ textAlign: 'justify'}}>
                                            <MDBCardTitle>24/7 Customer Support</MDBCardTitle>
                                            <MDBCardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                            </MDBCardText>
                                        </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard><br/>
                        {/* card two end here */}


                       {/* Card three start here */}
                        <MDBCard>
                            <MDBRow className='g-0'>
                                <MDBCol>
                                       <div className='positon-relative'>
                                            <div class="position-absolute top-50 start-0 translate-middle">
                                                <MDBIcon className='p-3 bg-primary rounded text-light' fas icon="parachute-box" size='1x'/>
                                            </div>   
                                        </div>
                                        <MDBCardBody className='p-5' style={{ textAlign: 'justify'}}>
                                            <MDBCardTitle>Unlimited Revisions</MDBCardTitle>
                                            <MDBCardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                            </MDBCardText>
                                        </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                        {/* card three end here */}
                </MDBCol>
                {/* why section end here */}
            </MDBRow>
        </MDBContainer>


        <MDBContainer className='my-5'>
            <MDBRow>
                {/* Card one start here */}
                <MDBCol xs={6} md={3} align='justify'>
                    <MDBCard className='mb-3'>
                        <MDBCardBody className='text-center'>
                            <MDBCardTitle className='h1 text-primary fw-bold p-2'>5</MDBCardTitle>
                            <MDBCardText>Running Project</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

                {/* Card two start here */}
                <MDBCol xs={6} md={3} align='justify'>
                    <MDBCard className='mb-3'>
                        <MDBCardBody className='text-center'>
                            <MDBCardTitle className='h1 text-primary fw-bold p-2'>650+</MDBCardTitle>
                            <MDBCardText>Completed Project</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card two end here */}

                {/* Card theree start here */}
                <MDBCol xs={6} md={3} align='justify'>
                    <MDBCard className='mb-3'>
                        <MDBCardBody className='text-center'>
                            <MDBCardTitle className='h1 text-primary fw-bold p-2'>100%</MDBCardTitle>
                            <MDBCardText>Client Satisfaction</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card three end here */}


                {/* Card one start here */}
                <MDBCol xs={6} md={3} align='justify'>
                    <MDBCard className='mb-3'>
                        <MDBCardBody className='text-center'>
                            <MDBCardTitle className='h1 text-primary fw-bold p-2'>150</MDBCardTitle>
                            <MDBCardText>Achivements</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

            </MDBRow>
        </MDBContainer>
    </section>
    // Achivement section end here
  );
}