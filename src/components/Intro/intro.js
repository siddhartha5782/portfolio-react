import React from 'react';
import './intro.css'
import bg from '../../assets/image.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello</span>
                <span className='introText'>I'm <span className='introName'>Sid</span><br/> and im great</span>
                <p className='introPara also'>Im a web dev</p>
                <Link><button className='btn'><img src={btnImg} alt='' className='btnImg'/>Hire me</button></Link>
            </div>
            <img src={bg} alt='bg' className='bg'/>
        </section>
    )
}

export default Intro