import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { BiSearch, BiMenu } from 'react-icons/bi'
import {  HiOutlineGlobeAlt } from 'react-icons/hi'
import { FaUserCircle} from 'react-icons/fa'

const Header = () => {
    return (
        <div className='header_container space_between'>
            <img src={logo} alt="airbnb logo" className='logo_image' />

            <div className='center_div'>
                <div className='text_filter'>Anywhere</div>
                <div className="divider"></div>
                <span className='text_filter'>Any week</span>
                <div className="divider"></div>
                <span className='text_filterv2'>Add guests</span>
                <div className="cirle_red" style={{ backgroundColor: "var(--redish)" }}>
                    <BiSearch color='white' />
                </div>
            </div>

            <div className='right_user'>
                <div className="text_filter">
                    Become a Host
                </div>
                <HiOutlineGlobeAlt size={20}/>
                <div className="_user">
                    <BiMenu size={20} color="#222222"/>
                    <FaUserCircle color='#717171' size={30} />
                </div>
            </div>
        </div>
    )
}

export default Header