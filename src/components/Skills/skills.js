import React from 'react';
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return(
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>Im a skilled dev</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src='' alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills