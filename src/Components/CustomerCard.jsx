import React from 'react'
import industry from '../Media/Images/Cleaning Ind.jpeg'
function CustomerCard() {
  return (
    <div className='custCard'>
        <h2>Customer Type</h2>
        <img src={industry} alt="Image" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis qui consectetur quaerat laborum ipsa.</p>
    </div>
  )
}

export default CustomerCard