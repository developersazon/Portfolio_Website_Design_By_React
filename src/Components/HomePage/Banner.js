import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import BannerImage from '../img/Image1.jpg';
import '../Css/style.css';



export default function Banner() {
  return (
      <section>
                <MDBRow>
                    <MDBCol>
                            {/* Banner section start here */}
                            <div id="intro" class="bg-image vh-100 shadow-1-strong">
                                  <ReactPlayer className='videoStyle' src="https://mdbootstrap.com/img/video/Lines.mp4"/>
                                  <div class="mask bgColor">  
                                    <div class="container d-flex align-items-center justify-content-center h-100">
                                      <div class="text-white shadow-2-strong p-4 rounded">
                                           <h2 class="">Welcome to our Website</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            {/* Banner section end here */}
                    </MDBCol>
                </MDBRow>
      </section>
  );
}