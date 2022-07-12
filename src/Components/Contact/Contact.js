import * as React from 'react';
import '../Bootstrap/bootstrap.min.css';
import {BsWhatsapp,BsMessenger} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import './Contact.css';

function Contact() {

    return (
        <section className='text-white my-5' id='contact'>
            <p className='text-center h6 text-white-50'>Get In Touch</p>
            <p className='text-center h3 text-info'>Contact Me</p>
            <div className='row justify-content-around'>
                <div className='col-lg-4 col-10'>
                    <div className='contact-card'>
                            <HiOutlineMail className='fs-4'/>
                            <div className='fw-bold'>Email</div>
                            <div>abdo30000000000@gmail.com</div>
                        <a href='mailto:abdo30000000000@gmail.com' target='_blank'>
                            <div className='text-white-50'>Send a Message</div>
                        </a>
                    </div>
                    <div className='contact-card'>
                        <BsMessenger className='fs-4'/>
                        <div className='fw-bold'>Messenger</div>
                        <div>abdo</div>
                        <a href='https://web.facebook.com/abdomo7amed11' target='_blank'>
                            <div className='text-white-50'>Send a Message</div>
                        </a>    
                    </div>
                    <div className='contact-card'>
                            <BsWhatsapp className='fs-4'/>
                            <div className='fw-bold'>WhatsApp</div>
                            <div className='m-auto'>01030370838</div>
                        <a href='https://api.whatsapp.com/send?phone+01030370838' target='_blank'>
                            <div className='text-white-50'>Send a Message</div>
                        </a>
                    </div>
                </div>
                <div className='col-6'>
                    <input type='text' placeholder='Your Name'/>
                    <input type='text' placeholder='Your Email'/>
                    <textarea placeholder='Your Message'/>
                    <div className='lh-lg'><a href='#' className='send-btn btn btn-primary-s'>Send Message</a></div>
                </div>
            </div>
        </section>
    )
}

export default Contact;





{/* <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={top100Films}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Movie" />}
/>
<Button variant='Contained' sx={{bgcolor:'rgb(0,255,0)'}} fullWidth className='text-dark'>Click Me</Button>
<Typography variant='h3' sx={{color:'rgb(0,255,0)'}} component='div'>Abdoooo</Typography>
<Box component='div' sx={{width:'200px',height:'200px',bgcolor:'blueviolet'}}>أهلا وسهلا</Box> */}