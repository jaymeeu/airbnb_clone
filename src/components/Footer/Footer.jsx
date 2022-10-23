import React from 'react'
import './Footer.css'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import {BsCurrencyDollar} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer_container space_between'>
        <div className='space_between footer_left'>
            <span className="each_left">
                &#169; 2022 Airbnb, Inc.
            </span>
            <span className="each_left">
            &#8729;
            </span>
            <span className="each_left">
                Privacy
            </span>
            <span className="each_left">
            &#8729;
            </span>
            <span className="each_left">
                Terms
            </span>
            <span className="each_left">
            &#8729;
            </span>
            <span className="each_left">
                Sitemap
            </span>
            <span className="each_left">
                &#8729;
            </span>
            <span className="each_left">
                Destinations
            </span>
            
        </div>
        <div className='space_between footer_right'>
            <div className="each_right">
                <HiOutlineGlobeAlt size={20}/>
                <span>English (US)</span>
            </div>
            <div className="each_right">
                <BsCurrencyDollar size={20}/>
                <span>USD</span>
            </div>
            <div className="each_right">
                <span>Support & resources</span>
            </div>
        </div>
    </div>
  )
}

export default Footer