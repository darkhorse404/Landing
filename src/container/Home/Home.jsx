import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import images from '../../constants/images';
import "./Home.css";
import bgvideo from '../../asset/bgvid.mp4'

// import required modules
import { EffectCards } from "swiper";

const Home = () => {
  return (
    <><div className="mt-12 app__home section__padding">
      <div className="app__home-content">
        <h1 >DELIVERING INDIAN AUTHENTICITY ACROSS THE WORLD</h1>
        <p className="p__font1">A community of Indian Diasopra for meeting their needs of Traditional/Ethnic/Handicrafts through India Post</p>
        <button className="button_1">Explore Now</button>
        <div className="app__home-content_amount">
          <div>
            <h1>98K+</h1>
            <p>Artwork</p>
          </div>
          <div>
            <h1>12K+</h1>
            <p>Auction</p>
          </div>
          <div>
            <h1>15K+</h1>
            <p>Artist</p>
          </div>
        </div>
      </div>
      <div className="app__home-images">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          loop = {true}
        >
          <SwiperSlide>
            <img src={images.gradient_1} alt="Gradient 1" />
            <div className="swiper__content">
              <div className="swiper__content-top">
                {/* <h1>Abstr Gradient NFT</h1> */}
                <div className="swiper__content_profil">
                  <img src={images.profil} alt="Arief Profil" />
                </div>
              </div>
              <div className="swiper__content-bottom">
                <div className="content__1">
                  <h1>Current Bid</h1>
                    <div className="current__bid">
                      <img src={images.eth} alt="Etherum Logo" />
                      </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_2} alt="Gradient 2" />
              <div className="swiper__content">
                <div className="swiper__content-top">
                  {/* <h1>Abstr Gradient NFT</h1> */}
                  <div className="swiper__content_profil">
                    <img src={images.profil} alt="Arief Profil" />
                    {/* <p>Arief Wahyudi</p> */}
                  </div>
                </div>
                <div className="swiper__content-bottom">
                  <div className="content__1">
                    <h1>Current Bid</h1>
                      <div className="current__bid">
                        <img src={images.eth} alt="Etherum Logo" />
                        {/* <p>0.25 ETH</p> */}
                      </div>
                  </div>
                  <div className="content__2">
                    <div className="ends__in">
                          
                        </div>
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_3} alt="Gradient 3" />
                <div className="swiper__content">
                  <div className="swiper__content-top">
                    {/* <h1>Abstr Gradient NFT</h1> */}
                    <div className="swiper__content_profil">
                      <img src={images.profil} alt="Arief Profil" />
                      {/* <p>Arief Wahyudi</p> */}
                    </div>
                  </div>
                  <div className="swiper__content-bottom">
                    <div className="content__1">
                      <h1>Current Bid</h1>
                        <div className="current__bid">
                          <img src={images.eth} alt="Etherum Logo" />
                          {/* <p>0.25 ETH</p> */}
                        </div>
                    </div>
                    <div className="content__2">
                      <div className="ends__in">
                            
                          </div>
                    </div>
                  </div>
                </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_4} alt="Gradient 4" />
                  <div className="swiper__content">
                    <div className="swiper__content-top">
                      {/* <h1>Abstr Gradient NFT</h1> */}
                      <div className="swiper__content_profil">
                        <img src={images.profil} alt="Arief Profil" />
                        {/* <p>Arief Wahyudi</p> */}
                      </div>
                    </div>
                    <div className="swiper__content-bottom">
                      <div className="content__1">
                        <h1>Current Bid</h1>
                          <div className="current__bid">
                            <img src={images.eth} alt="Etherum Logo" />
                            {/* <p>0.25 ETH</p> */}
                          </div>
                      </div>
                      <div className="content__2">
                        <div className="ends__in">
                              
                            </div>
                      </div>
                    </div>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_5} alt="Gradient 5" />
                  <div className="swiper__content">
                    <div className="swiper__content-top">
                      {/* <h1>Abstr Gradient NFT</h1> */}
                      <div className="swiper__content_profil">
                        <img src={images.profil} alt="Arief Profil" />
                        {/* <p>Arief Wahyudi</p> */}
                      </div>
                    </div>
                    <div className="swiper__content-bottom">
                      <div className="content__1">
                        <h1>Current Bid</h1>
                          <div className="current__bid">
                            <img src={images.eth} alt="Etherum Logo" />
                            {/* <p>0.25 ETH</p> */}
                          </div>
                      </div>
                      <div className="content__2">
                        <div className="ends__in">
                              
                            </div>
                      </div>
                    </div>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_6} alt="Gradient 6" />
                  <div className="swiper__content">
                    <div className="swiper__content-top">
                      {/* <h1>Abstr Gradient NFT</h1> */}
                      <div className="swiper__content_profil">
                        <img src={images.profil} alt="Arief Profil" />
                        {/* <p>Arief Wahyudi</p> */}
                      </div>
                    </div>
                    <div className="swiper__content-bottom">
                      <div className="content__1">
                        <h1>Current Bid</h1>
                          <div className="current__bid">
                            <img src={images.eth} alt="Etherum Logo" />
                            {/* <p>0.25 ETH</p> */}
                          </div>
                      </div>
                      <div className="content__2">
                        <div className="ends__in">
                              
                            </div>
                      </div>
                    </div>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_7} alt="Gradient 7" />
                  <div className="swiper__content">
                    <div className="swiper__content-top">
                      {/* <h1>Abstr Gradient NFT</h1> */}
                      <div className="swiper__content_profil">
                        <img src={images.profil} alt="Arief Profil" />
                        {/* <p>Arief Wahyudi</p> */}
                      </div>
                    </div>
                    <div className="swiper__content-bottom">
                      <div className="content__1">
                        <h1>Current Bid</h1>
                          <div className="current__bid">
                            <img src={images.eth} alt="Etherum Logo" />
                            {/* <p>0.25 ETH</p> */}
                          </div>
                      </div>
                      <div className="content__2">
                        <div className="ends__in">
                              
                            </div>
                      </div>
                    </div>
                  </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div></>
  );
};
export default Home;