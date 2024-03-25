import React from 'react'
import './Contactus.css'

function Contactus() {
  return (
    <>
      <div className="contactBase">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div className="contact">

          <div className="contactform">
          <h4>Get in Touch with us</h4>
            <p>We would love to work for you.</p>
            <form action="" className='enquiry'>
              <input type="text" placeholder='Your Name'/>
              <input type="email" placeholder='Your Email'/>
              <input type="number" placeholder='Mobile or Phone Number'/>
              <input type="text" placeholder='Company Name'/>
              <textarea name="" id="" cols="60" rows="20" placeholder='Describe your Requiremnets in Detail'></textarea>
            </form>
            <div>
              <button>Send Enquiry</button>
            </div>

          </div>
          <div className="contactdetail">
            <h4>Corporate Office</h4>
            <p>We would love to hear from you.</p>
            
            <div>
              <div>
              <span class="material-symbols-outlined">location_on</span>
                <address>Plot No.  45-46, Deep Palace, Nipania Road Near Dewas Naka, Indore-452010 M.P </address>
              </div>
              <div>
              <span class="material-symbols-outlined">mail</span>
                <p>ocean.microplast@gmail.com </p>
              </div>
              <div>
              <span class="material-symbols-outlined">smartphone</span>
              <p>Dilip R. Singh</p>
                <p>+91 9977621122</p>
              </div>
              <div>
                <span class="material-symbols-outlined">smartphone</span>
                <p>Jitendra Singh</p>
                <p>+91 9806618800</p>
              </div>
            </div>
            <div>
            <h4>Follow Us on:</h4>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Linkedin</li>
                <li>Instaram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus