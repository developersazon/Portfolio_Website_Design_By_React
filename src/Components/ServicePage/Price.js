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

export default function Price() {
  return (
    <section>
        <MDBContainer className='my-5'>
            <div className='mb-8 text-center'>
                <h1 className='googlefont'>What Can I Offer you ?</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <MDBRow>
                {/* Card one start here */}
                <MDBCol xs={6} md={6} xl={3} align='justify'>
                    <MDBCard className='mt-5 border border-primary border-top-4 mb-5'>
                    <div className='positon-relative mb-4'>
                         <div class="position-absolute top-0 start-50 translate-middle rounded-pill">
                              <p className='bg-primary text-light p-2 rounded-pill googlefont'>Basic</p>
                         </div>   
                    </div>
                        <MDBCardBody>
                            <MDBCardTitle className='h3 text-center googlefont'>Basic Plan</MDBCardTitle>
                            <p>For Small Business</p>
                            <hr/>
                            <p><span className='h3 googlefont'>550 tk</span> /Month</p><hr/>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>WordPress Install & Setup</MDBCardText>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>Customize Webisite</MDBCardText>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>Portfolio 5 Page Website</MDBCardText><hr/>
                            <MDBBtn className='col-12 btn-outline-primary'>Buy Now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

                {/* Card two start here */}
                <MDBCol xs={6} md={6} xl={3} align='justify'>
                    <MDBCard className='border border-primary border-top-4 mb-5'>
                    <div className='positon-relative mb-4'>
                         <div class="position-absolute top-0 start-50 translate-middle rounded-pill">
                              <p className='bg-primary text-light p-2 rounded-pill googlefont'>Standard</p>
                         </div>   
                    </div>
                        <MDBCardBody>
                            <MDBCardTitle className='h3 text-center googlefont'><span className='badge bg-danger rounded-pill'>Standard</span> Plan</MDBCardTitle>
                            <p>For Small Business</p>
                            <hr/>
                            <p><span className='h3 googlefont'>1050 tk</span> /Month</p><hr/>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>WordPress Install & Setup</MDBCardText>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>Customize Webisite</MDBCardText>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>Portfolio 5 Page Website</MDBCardText><hr/>
                            <MDBBtn className='col-12 btn-primary'>Buy Now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card two end here */}

                {/* Card theree start here */}
                <MDBCol xs={6} md={6} xl={3} align='justify'>
                    <MDBCard className='mb-5 border border-primary border-top-4'>
                    <div className='positon-relative mb-4'>
                         <div class="position-absolute top-0 start-50 translate-middle rounded-pill">
                              <p className='bg-primary text-light p-2 rounded-pill googlefont'>Premium</p>
                         </div>   
                    </div>
                        <MDBCardBody>
                            <MDBCardTitle className='h3 text-center googlefont'><span className='badge bg-danger rounded-pill'>Premium</span> Plan</MDBCardTitle>
                            <p>Popular Plan for all</p>
                            <hr/>
                            <p><span className='h3 googlefont'>1750 tk</span> /Month</p><hr/>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>WordPress Install & Setup</MDBCardText>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>Customize Webisite</MDBCardText>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>Portfolio 5 Page Website</MDBCardText><hr/>
                            <MDBBtn className='col-12 btn-primary'>Buy Now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card three end here */}


                {/* Card one start here */}
                <MDBCol xs={6} md={6} xl={3} align='justify'>
                    <MDBCard className='mt-5 border border-primary border-top-4'>
                    <div className='positon-relative mb-4'>
                         <div class="position-absolute top-0 start-50 translate-middle rounded-pill">
                              <p className='bg-primary text-light p-2 rounded-pill googlefont'>Pro Plan</p>
                         </div>   
                    </div>
                        <MDBCardBody>
                            <MDBCardTitle className='h3 text-center googlefont'><span className='badge bg-primary rounded-pill'>Pro</span> Plan</MDBCardTitle>
                            <p>For Large Business</p>
                            <hr/>
                            <p><span className='h3 googlefont'>2550 tk</span> /Month</p><hr/>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>WordPress Install & Setup</MDBCardText>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>Customize Webisite</MDBCardText>
                            <MDBCardText><MDBIcon far icon="check-circle" className='me-2'/>Portfolio 5 Page Website</MDBCardText><hr/>
                            <MDBBtn className='col-12 btn-outline-primary'>Buy Now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

            </MDBRow>
        </MDBContainer>
    </section>
  );
}
