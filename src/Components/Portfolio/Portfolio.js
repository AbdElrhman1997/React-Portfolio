import React from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';

import './Portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio my-5' id='portfolio'>
            <p className='text-center h6 text-white-50'>My Reacent Work</p>
            <p className='text-center h3 text-info mb-4'>Portfolio</p>
            <div className='row justify-content-evenly gap-4'>
                <div className='card col-lg-4 col-md-8 col-9'>
                    <div className='row jusify-content-evenly'>
                    <a href='https://www.google.com' target='_blank'><img src={img1} className='card-img'/></a>
                        <div className='mt-2 ms-2 fw-bold'>Crypto Currency Dashboard& Financial Visulizatin</div>
                        <div className='col-4'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://www.google.com'>Github</a></div>
                        <div className='col-5 my-3 mx-3'><a className='btn btn-info lh-lg w-100 fit' href='#' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='card col-lg-4 col-md-8 col-9'>
                    <div className='row jusify-content-evenly'>
                    <a href='https://www.google.com' target='_blank'><img src={img2} className='card-img'/></a>
                        <div className='mt-2 ms-2 fw-bold'>Crypto Currency Dashboard& Financial Visulizatin</div>
                        <div className='col-4'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://www.google.com'>Github</a></div>
                        <div className='col-5 my-3 mx-3'><a className='btn btn-info lh-lg w-100 fit' href='#' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='card col-lg-4 col-md-8 col-9'>
                    <div className='row jusify-content-evenly'>
                    <a href='https://www.google.com' target='_blank'><img src={img3} className='card-img'/></a>
                        <div className='mt-2 ms-2 fw-bold'>Crypto Currency Dashboard& Financial Visulizatin</div>
                        <div className='col-4'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://www.google.com'>Github</a></div>
                        <div className='col-5 my-3 mx-3'><a className='btn btn-info lh-lg w-100 fit' href='#' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='card col-lg-4 col-md-8 col-9'>
                    <div className='row jusify-content-evenly'>
                    <a href='https://www.google.com' target='_blank'><img src={img4} className='card-img'/></a>
                        <div className='mt-2 ms-2 fw-bold'>Crypto Currency Dashboard& Financial Visulizatin</div>
                        <div className='col-4'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://www.google.com'>Github</a></div>
                        <div className='col-5 my-3 mx-3'><a className='btn btn-info lh-lg w-100 fit' href='#' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='card col-lg-4 col-md-8 col-9'>
                    <div className='row jusify-content-evenly'>
                    <a href='https://www.google.com' target='_blank'><img src={img5} className='card-img'/></a>
                        <div className='mt-2 ms-2 fw-bold'>Crypto Currency Dashboard& Financial Visulizatin</div>
                        <div className='col-4'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://www.google.com'>Github</a></div>
                        <div className='col-5 my-3 mx-3'><a className='btn btn-info lh-lg w-100 fit' href='#' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='card col-lg-4 col-md-8 col-9'>
                    <div className='row jusify-content-evenly'>
                    <a href='https://www.google.com' target='_blank'><img src={img6} className='card-img'/></a>
                        <div className='mt-2 ms-2 fw-bold'>Crypto Currency Dashboard& Financial Visulizatin</div>
                        <div className='col-4'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' target='_blank' href='https://www.google.com'>Github</a></div>
                        <div className='col-5 my-3 mx-3'><a className='btn btn-info lh-lg w-100 fit' href='#' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;