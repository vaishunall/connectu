import React, { Component } from 'react'
import Card from '../../Components/Card/card';
import "./Dashboard.css";

import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
export default class Dashboard extends Component {
  render() {
    
    return (
      <div>
        <div>
          <h1 className='heading1' style={{textAlign: "left", marginLeft:"5%", marginTop:"3%"}}>top picks for you</h1>
        </div>
        <div className="main-swiper">
        <Swiper
          effect={"coverflow"}
         
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 5,
            stretch: 100,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          
  
          {/* or use normally  */}
  
          <SwiperSlide>
            <Card></Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card></Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card></Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card></Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card></Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card></Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card></Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card></Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card></Card>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
          <h1 className='heading1' style={{textAlign: "left", marginLeft:"5%"}}>events near you</h1>
        </div>
      </div>
        
    )
  }
}