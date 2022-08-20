import React from 'react'
import './Portfolio.css';
import hoc from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';


function Portfolio() {
  return (
    <div className="portfolio" Id='Portfolio'>
      
        <span>Recent projects</span>
        <span>List</span>




{/* {slider} */}

        <Swiper
       
        modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                grabCursor={true}
                pagination={{clickable:true}}
        className='portfolio-slider'>
<SwiperSlide>
    <img src={Ecommerce}alt=""/>
</SwiperSlide>

<SwiperSlide>
    <img src={MusicApp}alt=""/>
</SwiperSlide>

<SwiperSlide>
    <img src={hoc}alt=""/>
</SwiperSlide>

<SwiperSlide>
    <img src={Sidebar}alt=""/>
</SwiperSlide>







        </Swiper>
        </div>
  );
};

export default Portfolio