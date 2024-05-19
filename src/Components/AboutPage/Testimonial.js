import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../Css/App.css';
import ClientImage from '../img/client.jpg';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage  } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
    <MDBContainer>
            <p className='h2 text-center googlefont'>Our Recent Clients</p>
            <p className=''>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                        <MDBCard style={{ maxWidth: '550px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                <MDBCardImage src={ClientImage} className=' ' position=' ' alt='...' fluid style={{ height:'100%' }}/>
                                </MDBCol>
                                <MDBCol md='8'>
                                <MDBCardBody className='p-4'>
                                    <MDBCardTitle>Sazon Mahmud</MDBCardTitle>
                                    <MDBCardText className='' style={{ textAlign:'justify' }}>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                                    content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                </SwiperSlide>
                <SwiperSlide>
                        <MDBCard style={{ maxWidth: '550px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                <MDBCardImage src={ClientImage} className=' ' position=' ' alt='...' fluid style={{ height:'100%' }}/>
                                </MDBCol>
                                <MDBCol md='8'>
                                <MDBCardBody className='p-4'>
                                    <MDBCardTitle>Sazon Mahmud</MDBCardTitle>
                                    <MDBCardText className='' style={{ textAlign:'justify' }}>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                                    content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                </SwiperSlide>
                <SwiperSlide>
                        <MDBCard style={{ maxWidth: '550px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                <MDBCardImage src={ClientImage} className=' ' position=' ' alt='...' fluid style={{ height:'100%' }}/>
                                </MDBCol>
                                <MDBCol md='8'>
                                <MDBCardBody className='p-4'>
                                    <MDBCardTitle>Sazon Mahmud</MDBCardTitle>
                                    <MDBCardText className='' style={{ textAlign:'justify' }}>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                                    content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                </SwiperSlide>
                <SwiperSlide>
                        <MDBCard style={{ maxWidth: '550px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                <MDBCardImage src={ClientImage} className=' ' position=' ' alt='...' fluid style={{ height:'100%' }}/>
                                </MDBCol>
                                <MDBCol md='8'>
                                <MDBCardBody className='p-4'>
                                    <MDBCardTitle>Sazon Mahmud</MDBCardTitle>
                                    <MDBCardText className='' style={{ textAlign:'justify' }}>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                                    content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                </SwiperSlide>
                <SwiperSlide>
                        <MDBCard style={{ maxWidth: '550px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                <MDBCardImage src={ClientImage} className=' ' position=' ' alt='...' fluid style={{ height:'100%' }}/>
                                </MDBCol>
                                <MDBCol md='8'>
                                <MDBCardBody className='p-4'>
                                    <MDBCardTitle>Sazon Mahmud</MDBCardTitle>
                                    <MDBCardText className='' style={{ textAlign:'justify' }}>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                                    content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                </SwiperSlide>
                <SwiperSlide>
                        <MDBCard style={{ maxWidth: '550px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                <MDBCardImage src={ClientImage} className=' ' position=' ' alt='...' fluid style={{ height:'100%' }}/>
                                </MDBCol>
                                <MDBCol md='8'>
                                <MDBCardBody className='p-4'>
                                    <MDBCardTitle>Sazon Mahmud</MDBCardTitle>
                                    <MDBCardText className='' style={{ textAlign:'justify' }}>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                                    content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                </SwiperSlide>
                <SwiperSlide>
                        <MDBCard style={{ maxWidth: '550px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                <MDBCardImage src={ClientImage} className=' ' position=' ' alt='...' fluid style={{ height:'100%' }}/>
                                </MDBCol>
                                <MDBCol md='8'>
                                <MDBCardBody className='p-4'>
                                    <MDBCardTitle>Sazon Mahmud</MDBCardTitle>
                                    <MDBCardText className='' style={{ textAlign:'justify' }}>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                                    content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                </SwiperSlide>
            </Swiper>
      </MDBContainer>
    </>
  );
}
