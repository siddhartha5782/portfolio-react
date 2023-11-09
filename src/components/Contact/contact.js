import React from 'react';
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import Adobe from '../../assets/adobe.png'
import FactbookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const SERVICE_ID = ''
        const TEMPLATE_ID = ''
        const PUBLIC_KEY = ''
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert('email sent')
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <section id="contactPage">
            <div id='clients'>
                <h1 className='contactPageTitle'> My clients </h1>
                <p className='clientDesc'>mera clients</p>
                <div className='clientImgs'>
                    <img className='clientsImg' src={Walmart} alt=''/>
                    <img className='clientsImg' src={Adobe} alt=''/>
                    <img className='clientsImg' src={Microsoft} alt=''/>
                    <img className='clientsImg' src={Facebook} alt=''/>
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'> Contact me</h1>
                <span className='contactDesc'>feel free to contact me</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className='name' placeholder='your name' />
                    <input type="email" name="from_email" className='email' placeholder='your email' />
                    <textarea name='message' rows='5' placeholder='Your Message' className='msg'/>
                    <button className='submitBtn' type='submit' value='send'>Submit</button>
                    <div className='links'>
                        <img src={FactbookIcon} alt='' className='link'></img>
                        <img src={TwitterIcon} alt='' className='link'></img>
                        <img src={YoutubeIcon} alt='' className='link'></img>
                        <img src={InstagramIcon} alt='' className='link'></img>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;