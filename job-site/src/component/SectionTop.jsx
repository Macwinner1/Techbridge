import React from 'react'
import '../index.css'
import imageUpload from '../assets/hero-image.svg'
import imageUpload1 from '../assets/paystack.png'
import imageUpload2 from '../assets/google.png'
import imageUpload3 from '../assets/kpmg.png'

function SectionTop() {
  return (
    <div className='sec-main'>
        <div className='sec-left' >
        <h2>Find a <span>job</span> easily</h2>
        <p>With verified, up-to-date job listings directly  from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>
        <div className='sec-input'>
        <input type="text" placeholder='Enter keyword, Search for a job or Skill'/>
        <input type="text" placeholder='Location'/>
        </div>

        <h5>Trusted by:</h5>
        <div className='sec-left2'>
            <img src={imageUpload1} width={'146px'} height={'33px'} alt="paystack" />
            <img src={imageUpload2} width={'103px'} height={'43px'} alt="google" />
            <img src={imageUpload3} width={'80px'} height={'33px'} alt="kpmg" />
        </div>
        </div>
        <div  className='sec-right'>
            <img src={imageUpload} alt="" />
        </div>
    </div>
  )
}

export default SectionTop
