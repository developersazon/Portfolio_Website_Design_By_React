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
  MDBTextArea
} from 'mdb-react-ui-kit';
import CardImage1 from '../img/card4.png'
import CardImage2 from '../img/card2.png'
import CardImage3 from '../img/card3.png'

function Blog() {
  return (
    <section>
        <MDBContainer className='my-5'>
            <h1 className='py-4 googlefont'>Check out our Latest Blog</h1>
            <MDBRow>
                {/* Card one start here */}
                <MDBCol xs={6} md={4}>
                    <MDBCard className='mb-3'>
                        <MDBCardImage src={CardImage1} position='top' alt='...' />
                        <MDBCardBody align='justify'>
                            <MDBCardTitle>Running Smoothly</MDBCardTitle>
                            <MDBCardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </MDBCardText>
                            <MDBBtn href='#'>Read More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

                {/* Card one start here */}
                <MDBCol xs={6} md={4}>
                    <MDBCard className='mb-3'>
                        <MDBCardImage src={CardImage2} position='top' alt='...' />
                        <MDBCardBody align='justify'>
                            <MDBCardTitle>Riding Car</MDBCardTitle>
                            <MDBCardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </MDBCardText>
                            <MDBBtn href='#'>Read More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* Card one end here */}

                {/* Card one start here */}
                <MDBCol xs={6} md={4}>
                    <MDBCard className='mb-3'>
                        <MDBCardImage src={CardImage3} position='top' alt='...' />
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

export default Blog;