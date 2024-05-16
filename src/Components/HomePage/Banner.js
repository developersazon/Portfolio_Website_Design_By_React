import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import BannerImage from '../img/Image1.jpg';
import '../Css/style.css';



export default function Banner() {
  return (
      <section>
                <MDBRow className='mx-0'>
                    <MDBCol>
                            {/* Banner section start here */}
                            <div id="" class=" ">
                                      <div class="text-white">
                                           <h2 class="h1 bgColor text-center googlefont bannerPadding">Welcome to our Website</h2>
                                      </div>
                                </div>
                            {/* Banner section end here */}
                    </MDBCol>
                </MDBRow>
      </section>
  );
}