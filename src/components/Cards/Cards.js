import React, { useState } from 'react'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { AiFillStar } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'

function Cards({ data }) {

    const [showPagination, setshowPagination] = useState(false)
    return (
        <div className='card'
            onMouseEnter={() => setshowPagination(true)}
            onMouseLeave={() => setshowPagination(false)}>
            <span className='heart'>
                <FiHeart color="white" size={20} />
            </span>
            <div className='main_cont_card' id='main_cont_card'>
                <Swiper
                    spaceBetween={0}
                    navigation={showPagination}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[
                        Navigation,
                        Pagination]}
                    className="mySwiper"
                >
                    {
                        data?.images?.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img className='images' src={img} />
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
            <div className='greyer'>
                Hosted by {data?.host}
            </div>
            <div className='greyer'>
                {data?.period}
            </div>
            <div className='price'>
                ${data?.price} <span>night</span>
            </div>
        </div>
    )
}

export default Cards
