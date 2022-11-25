
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './testimonial.css'
import { Pagination, Navigation } from "swiper";
import girl from '../Assets/Ellipse 175 (1).png'
import boy1 from '../Assets/Ellipse 175.png'
import boy2 from '../Assets/Ellipse 175 (2).png'
 
export const Testimonials = () =>{
    return(
        <div className="testimonials">
          <div className="head">
            <h1>Trusted by Thousands of Happy Customer</h1>
            <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
          </div>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="card_slide">
                   <div className="title">
                     
                        <img className="cardImg" src={boy1}alt="img1" />
                        <div className="pt">
                            <h4>Viezh Robert</h4>
                            <p>Warsaw, Poland</p>
                        </div>
                      
                      <div className="ranking">
                        <p>4.5<span>*</span></p>
                      </div>
                   </div>
                   <div className="desc">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card_slide">
                   <div className="title">
                     
                        <img className="cardImg" src={girl} alt="img1" />
                        <div className="pt">
                            <h4>Yessica Christy</h4>
                            <p>Shanxi, China</p>
                        </div>
                      
                      <div className="ranking">
                        <p>4.5<span>*</span></p>
                      </div>
                   </div>
                   <div className="desc">“I like it because I like to travel far and still can connect with high speed.”.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card_slide">
                   <div className="title">
                     
                        <img className="cardImg" src={boy2} alt="img1" />
                        <div className="pt">
                            <h4>Kim Young Jou</h4>
                            <p>Seoul, South Korea</p>   
                        </div>
                      
                      <div className="ranking">
                        <p>4.5<span>*</span></p>
                      </div>
                   </div>
                   <div className="desc">“This is very unusual for my business that currently requires a virtual private network that has high security.”.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card_slide">
                   <div className="title">
                     
                        <img className="cardImg" src= {boy1} alt="img1" />
                        <div className="pt">
                            <h4>name</h4>
                            <p>tittle</p>
                        </div>
                      
                      <div className="ranking">
                        <p>4.5<span>*</span></p>
                      </div>
                   </div>
                   <div className="desc">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card_slide">
                   <div className="title">
                     
                        <img className="cardImg" src={boy2} alt="img1" />
                        <div className="pt">
                            <h4>name</h4>
                            <p>tittle</p>
                        </div>
                      
                      <div className="ranking">
                        <p>4.5<span>*</span></p>
                      </div>
                   </div>
                   <div className="desc">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card_slide">
                   <div className="title">
                     
                        <img className="cardImg" src={girl} alt="img1" />
                        <div className="pt">
                            <h4>name</h4>
                            <p>tittle</p>
                        </div>
                      
                      <div className="ranking">
                        <p>4.5<span>*</span></p>
                      </div>
                   </div>
                   <div className="desc">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card_slide">
                   <div className="title">
                     
                        <img className="cardImg" src={girl} alt="img1" />
                        <div className="pt">
                            <h4>name</h4>
                            <p>tittle</p>
                        </div>
                      
                      <div className="ranking">
                        <p>4.5<span>*</span></p>
                      </div>
                   </div>
                   <div className="desc">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card_slide">
                   <div className="title">
                     
                        <img className="cardImg" src={boy1} alt="img1" />
                        <div className="pt">
                            <h4>name</h4>
                            <p>tittle</p>
                        </div>
                      
                      <div className="ranking">
                        <p>4.5<span>*</span></p>
                      </div>
                   </div>
                   <div className="desc">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card_slide">
                   <div className="title">
                     
                        <img className="cardImg" src={boy2} alt="img1" />
                        <div className="pt">
                            <h4>name</h4>
                            <p>tittle</p>
                        </div>
                      
                      <div className="ranking">
                        <p>4.5<span>*</span></p>
                      </div>
                   </div>
                   <div className="desc">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    )
}
export default Testimonials;