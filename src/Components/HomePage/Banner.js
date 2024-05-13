import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import BannerImage from '../img/Image1.jpg';



export default function Banner() {
  return (

        <MDBRow>
             <MDBCol>
                 <img src={BannerImage} alt='banner image' className='img-fluid h-50 w-100'></img>
             </MDBCol>
        </MDBRow>

  );
}