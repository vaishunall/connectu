import React, { Component } from 'react'
import Card from '../../Components/Card/card';
import Card2 from '../../Components/Card/card2';
import Card3 from '../../Components/Card/card3';
import Card4 from '../../Components/Card/card4';
import Card5 from '../../Components/Card/card5';
import SearchCard from '../../Components/Search-card/Search-card';
import "./Dashboard.css";
import 'swiper/css';


import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Mousewheel, Keyboard, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
export default class Dashboard extends Component {
  render() {
    
    return (
      <div>
        
        <div>
          <h1 className='heading1' style={{textAlign: "left", marginLeft:"5%", marginTop:"3%", marginBottom:"-2%"}}>top picks for you</h1>
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
          <Card2></Card2>
          </SwiperSlide>
          <SwiperSlide>
          <Card3></Card3>
          </SwiperSlide>
          <SwiperSlide>
          <Card4></Card4>
          </SwiperSlide>
          <SwiperSlide>
          <Card5></Card5>
          </SwiperSlide>
          <SwiperSlide>
          <Card></Card>
          </SwiperSlide>
          </Swiper>
      </div>
     
          <h1 className='heading1' style={{textAlign: "left", marginLeft:"5%", marginBottom: '-2%', marginTop:"-2%"}}>events near you</h1>
      

       <div className='swiper-again'>
       <div className='swiper-two'>

       <Swiper id="swiper-color" navigation={true} modules={[Navigation]} slidesPerView={3} spaceBetween={60} className="mySwiper">
<SwiperSlide>
<SearchCard className="card1" data={{header:"Women in Tech",name:"Faiza Rahman", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
</SwiperSlide>
<SwiperSlide>
<SearchCard className="card1" data={{tags:["Women","LGBTQ","Diversity"],header:"How Women Rise",name:"Vaishu Nalla", uni:"The University of Texas at Arlington", club:"Association of Computer Machinery", description:"Come join ACM UTD to learn how to navigate being a woman in the workplace!"}}/>
</SwiperSlide>
<SwiperSlide>
<SearchCard className="card1" data={{header:"Impostor Syndrome",name:"Palak Bhargava", uni:"The University of Texas at Dallas", club:"Women Who Code", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
</SwiperSlide>
<SwiperSlide>
<SearchCard className="card1" data={{header:"First-Gen Panel",name:"Anushka Pimple", uni:"The University of Texas at Dallas", club:"Women Mentoring Women", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
</SwiperSlide>
<SwiperSlide>
<SearchCard className="card1" data={{header:"K-12 STEM Outreach",name:"Kaylee Smith", uni:"The University of Alabama", club:"National Honor Society", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
</SwiperSlide>
<SwiperSlide>
<SearchCard className="card1" data={{header:"Building Inclusivity",name:"Michelle Lu", uni:"The University of Oklahoma", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
</SwiperSlide>
<SwiperSlide>
<SearchCard className="card1" data={{header:"WeHACK Hackathon",name:"Ariana Khan", uni:"Liberty High School", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
</SwiperSlide>
<SwiperSlide>
<SearchCard className="card1" data={{header:"First-Gen College Life",name:"John Cole", uni:"Texas Womens University", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
</SwiperSlide>
<SwiperSlide>
<SearchCard className="card1" data={{header:"STEM for Girls",name:"Bailey Smith", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
</SwiperSlide>
</Swiper>
</div>
       </div>
        
      </div>
        
    )
  }
}