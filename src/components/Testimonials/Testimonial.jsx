import React from 'react'
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProfilePic1 from '../../img/profile1.jpg';
import ProfilePic2 from '../../img/profile2.jpg'; 
import ProfilePic3 from '../../img/profile3.jpg';
import ProfilePic4 from '../../img/profile4.jpg';
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';
export default function Testimonial() {

   const  clients=[
        {
            img:ProfilePic1,
            review:"Lorem ipsum dolor,  sit amet consectetur adipisicing elit.  Ex officiis molestiae quod tempora  laudantium, cumque error a nis   placeat quae exercitationem,    maiores reiciendis! Eaque dicta minima,iure maiores dolorum sed."

        },
        {
            img:ProfilePic2,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",

        },
        {
            img:ProfilePic3,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
            
        },
        {
            img:ProfilePic4,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
            
        },
    ];
  return (
    <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
            <span>Feedback and Ratings</span>
            <span>i received from </span>
            <span>Co-Workers and Clients!</span>
            <div className="blur t-blur1"
             style={{background:"var(--purple)"}}>
                  </div>



<div className="blur t-blur2" 
style={{background:"skyblue"}}>
    </div>     
    </div>


    {/* {/*slider/*}        */}
            <Swiper


                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable:true}}>
{
    clients.map((client,index)=>
    {
        return(
            <SwiperSlide key={index}>
                <div className="testimonial">
                <img src={client.img} alt=""/>
                <span>{client.review}</span>
                </div>
            </SwiperSlide>
        );
    })
}
            </Swiper>
            
            </div>
            
  );
};
