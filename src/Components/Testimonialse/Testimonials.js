import React, { useRef } from 'react';
import './Testimonials.css';
import img from '../../Images/avatar.jpg';
import img2 from '../../Images/avatar3.png';
import img3 from '../../Images/avatar4.jpg';
import img4 from '../../Images/atia.jpg';
import {FaRegCircle} from 'react-icons/fa';

function Testimonialse() {
    const clients =useRef();
    const handleClient = (e)=> {
        for (let i=0;i<e.target.parentElement.children.length;i++) {
            e.target.parentElement.children[i].classList.remove('selected');
            clients.current.children[i].style.display='none';
            if(e.target.id===`${i+1}`) {
                clients.current.children[i].classList.remove('d-none');
                clients.current.children[i].style.display='block';
            }
        }
        e.target.classList.add('selected');
    }
    return (
        <div className='testimonials my-5' id='testimonials'>
            <p className='text-center h6 text-white-50' data-aos='fade-left'>Review From Clients</p>
            <p className='text-center h2 text-info mb-5' data-aos='fade-left'>Testimonials</p>
            <div className='row' ref={clients} data-aos='fade-right' data-aos-delay='100'>
                <div className='col-lg-6 col-8 clients p-4 text-center'>
                    <div className='client my-2'><img src={img4}/></div>
                    <div className='my-1 fw-bold'>Mahmoud Atia </div>
                    <p className='m-auto w-75 my-3'>سعدت بالعمل مع عبد الرحمن فقد كان حريصا على تسليم المشروع في وقته رغم التعديلات الكثيره التي أجريناها على المشروع أنصح أي شخص بالتعامل معه وحظا سعيدا</p>
                </div>
                <div className='col-lg-6 col-8 clients p-4 d-none text-center'>
                    <div className='client my-2'><img src={img3}/></div>
                    <div className='my-1 fw-bold'>Omar Mansor</div>
                    <p className='m-auto w-75 my-3'>سعدت بالعمل مع عبد الرحمن فقد كان حريصا على تسليم المشروع في وقته رغم التعديلات الكثيره التي أجريناها على المشروع أنصح أي شخص بالتعامل معه وحظا سعيدا</p>
                </div>
                <div className='col-lg-6 col-8 clients p-4 d-none text-center'>
                    <div className='client my-2'><img src={img2}/></div>
                    <div className='my-1 fw-bold'>Esam</div>
                    <p className='m-auto w-75 my-3'>سعدت بالعمل مع عبد الرحمن فقد كان حريصا على تسليم المشروع في وقته رغم التعديلات الكثيره التي أجريناها على المشروع أنصح أي شخص بالتعامل معه وحظا سعيدا</p>
                </div>
                <div className='col-lg-6 col-8 clients p-4 d-none text-center'>
                    <div className='client my-2'><img src={img3}/></div>
                    <div className='my-1 fw-bold'>Ghannam</div>
                    <p className='w-75 m-auto my-3'>سعدت بالعمل مع عبد الرحمن فقد كان حريصا على تسليم المشروع في وقته رغم التعديلات الكثيره التي أجريناها على المشروع أنصح أي شخص بالتعامل معه وحظا سعيدا</p>
                </div>
                <div className='col-lg-6 col-8 clients p-4 d-none text-center'>
                    <div className='client my-2'><img src={img}/></div>
                    <div className='my-1 fw-bold'>Abd Elrhman Ashraf</div>
                    <p className='w-75 m-auto my-3'>سعدت بالعمل مع عبد الرحمن فقد كان حريصا على تسليم المشروع في وقته رغم التعديلات الكثيره التي أجريناها على</p>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                    <FaRegCircle className='mx-2 selected size' onClick={handleClient} id='1'/>
                    <FaRegCircle className='mx-2 size' onClick={handleClient} id='2'/>
                    <FaRegCircle className='mx-2 size' onClick={handleClient} id='3'/>
                    <FaRegCircle className='mx-2 size' onClick={handleClient} id='4'/>
                    <FaRegCircle className='mx-2 size' onClick={handleClient} id='5'/>
            </div>
        </div>
    )
}

export default Testimonialse;