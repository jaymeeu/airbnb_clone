import React, { useState } from 'react'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'

function CardV2({ data }) {
    return (
        <div className='card' >
            <span className='heart'>
                <FiHeart color="white" size={20} />
            </span>
            <div className='main_cont_card'>
                <Swiper
                    spaceBetween={0}
                    className="mySwiper"
                >
                    {
                        data?.images?.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img className='imagesv2' src={img} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className='space_between' style={{ marginTop: '12px' }}>
                <span className='place_name'>{data?.title}</span>
                <div className='stars'>
                    <AiFillStar color='black' />
                    <span>{data?.rating}</span>
                </div>
            </div>
            <div className='price'>
                ${data?.price} <span>night</span> &#8729; <span className='greyer'>{data?.period}</span>
            </div>
        </div>
    )
}

export default CardV2
