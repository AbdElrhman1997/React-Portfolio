import React from 'react';
import {TiStarburst} from 'react-icons/ti';
import './Services.css';

function Services() {
    return (
        <div className='services min-h-vh-100 my-5'id='services'>
            <p className='text-center h6 text-white-50'>What I Offer</p>
            <p className='text-center h3 text-info'>Services</p>
            <div className='row justify-content-evenly text-center'>
                <div className='col-lg-4 col-9'>
                    <div className='head'>FrontEnd</div>
                    <ul className='ul'>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>Responsive Web Apps</p></li>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>React Apps with class Component</p></li>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>React App with Function Component and Hooks</p></li>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>Redux ToolKit</p></li>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>NextJs Apps</p></li>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>Web Apps With Mui or TailwindCSS or Bootstrap</p></li>
                    </ul>
                </div>
                <div className='col-lg-4 col-9'>
                    <div className='head'>Web Development</div>
                    <ul className='ul'>
                        <li><TiStarburst className='me-2 fs-5'/><p>lorem dmcn dklvxc kdmvkd kdvmn</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>lorem dmcn dklvxc kdmvkd kdvmn</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>lorem dmcn dklvxc kdmvkd kdvmn</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>lorem dmcn dklvxc kdmvkd kdvmn</p></li>
                    </ul>
                </div>
                <div className='col-lg-4 col-9'>
                    <div className='head'>Web Development</div>
                    <ul className='ul'>
                        <li><TiStarburst className='me-2 fs-5'/><p>lorem dmcn dklvxc kdmvkd kdvmn</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>lorem dmcn dklvxc kdmvkd kdvmn</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>lorem dmcn dklvxc kdmvkd kdvmn</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>lorem dmcn dklvxc kdmvkd kdvmn</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;