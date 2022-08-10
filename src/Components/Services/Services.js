import React from 'react';
import {TiStarburst} from 'react-icons/ti';
import './Services.css';

function Services() {
    return (
        <div className='services'id='services'>
            <p className='text-center h6 text-white-50' data-aos='fade-left'>What I Offer</p>
            <p className='text-center h3 text-info' data-aos='fade-left'>Services</p>
            <div className='row justify-content-evenly text-center'>
                <div className='col-lg-4 col-9 cardServices' data-aos='fade-right' data-aos-delay='100'>
                    <div className='head'>FrontEnd</div>
                    <ul className='ul'>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>Responsive Web Apps</p></li>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>React App with Function Component and Hooks</p></li>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>Dynamic Web Apps using RestFull API</p></li>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>React Apps with state management system like Redux</p></li>
                        <li className='lh-lg'><TiStarburst className='me-2 fs-5'/><p>Web Apps With Mui or TailwindCSS or Bootstrap</p></li>
                    </ul>
                </div>
                <div className='col-lg-4 col-9 cardServices' data-aos='fade-left' data-aos-delay='200'>
                    <div className='head'>BackEnd</div>
                    <ul className='ul'>
                        <li><TiStarburst className='me-2 fs-5'/><p>Build API using NodeJs</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>Build API using ExpressJs</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>Build DB using MongonDB</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>Build DB using SQL Server</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>Build FakeAPI using JWT</p></li>
                        <li><TiStarburst className='me-2 fs-5'/><p>Build Server Side With FireBase</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;