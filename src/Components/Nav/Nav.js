import React, { useState } from 'react';
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import './Nav.css';

// forEach(e => {
//     return e.classList.remove('active');
// });

function Nav() {
    
    const [activeNav,setActiveNav]=useState('#');
    
    return (
        <nav className='d-flex justify-content-center'>
            <div className='nav'>
                <a href='#' onClick={()=>{setActiveNav('#')}} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
                <a href='#about' onClick={()=>{setActiveNav('#about')}} className={activeNav==='#about'?'active':''} ><AiOutlineUser/></a>
                <a href='#exprience' onClick={()=>{setActiveNav('#exprience')}} className={activeNav==='#exprience'?'active':''} ><BiBook/></a>
                <a href='#services' onClick={()=>{setActiveNav('#services')}} className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
                <a href='#contact' onClick={()=>{setActiveNav('#contact')}} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
            </div>
        </nav>
    )
}

export default Nav

// FaRegCheckCircle 
// BsFillPersonFill
// MdStars
// AiFillProject
// GiCircle
// HiOutlineMail
// BsMessenger
// BsWhatsapp