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
  MDBBtn
} from 'mdb-react-ui-kit';
import AboutImage from '../img/Image1.jpg';


export default function MySkills() {
  return (
    <section>
        <MDBContainer className='my-5'>
            <h1 className='mb-4'>Some Information about my Skills</h1>
            <MDBRow>
                {/* Skill score section start here */}
                <MDBCol xs={6} md={6} className='' style={{ textAlign: 'justify' }}>
                        
                        <spam>HTML & CSS</spam>
                        <MDBProgress height='25'>
                            <MDBProgressBar width='89' valuemin={0} valuemax={100}>89%</MDBProgressBar>
                        </MDBProgress><br/>

                        <spam>Bootstrap</spam>
                        <MDBProgress height='25'>
                            <MDBProgressBar width='78' valuemin={0} valuemax={100}>78%</MDBProgressBar>
                        </MDBProgress><br/>

                        <spam>WordPress & PHP</spam>
                        <MDBProgress height='25'>
                            <MDBProgressBar width='73' valuemin={0} valuemax={100}>72%</MDBProgressBar>
                        </MDBProgress><br/>

                        <spam>Laravel & React</spam>
                        <MDBProgress height='25'>
                            <MDBProgressBar width='69' valuemin={0} valuemax={100}>65%</MDBProgressBar>
                        </MDBProgress><br/>
                        
                        <spam>JavaScript & JQuery</spam>
                        <MDBProgress height='25'>
                            <MDBProgressBar width='63' valuemin={0} valuemax={100}>62%</MDBProgressBar>
                        </MDBProgress><br/>
                </MDBCol>
                {/* skill score section end here */}


                {/* skill image section start here */}
                <MDBCol xs={6} md={6}>
                    <MDBCard className='mb-3'>
                        <MDBCardImage src={AboutImage} position='top' alt='...' />
                        <MDBCardBody>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* skill image section end here */}
            </MDBRow>
        </MDBContainer>
    </section>
  );
}