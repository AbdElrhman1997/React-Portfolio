import React from 'react';
import {FaFacebookF,FaRegCopyright} from 'react-icons/fa';
import {BsInstagram,BsGithub} from 'react-icons/bs';
import './Footer.css';

function Footer() {    
    return (
        <div className='footer'>
            <p className='text-center'>EGATOR</p>
            <ul className='ulFooter'>
                <li><a href='#header'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='row justify-content-center text-center mt-5 icons'>
                <div className='col-1'><a target='_blank' href='https://web.facebook.com/profile.php?id=100030238329399&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_transition=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_follower_visibility_disclosure=false'><FaFacebookF/></a></div>
                <div className='col-1'><a href='https://www.instagram.com/abdelrahmanmohamed7867/' target='_blank'><BsInstagram/></a></div>
                <div className='col-1'><a target='_blank' href='https://github.com/AbdElrhman1997'><BsGithub/></a></div>
            </div>
            <div className='h6 text-center txt mt-4'><FaRegCopyright/>All Rights reserved</div>
        </div>
    )
}

export default Footer;