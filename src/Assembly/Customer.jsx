import React from 'react'
import CustomerCard from '../Components/CustomerCard'
import './Customer.css'

function Customer() {
  return (
    <>
    <div className='customerBase'>
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
    </div>

    </>
  )
}

export default Customer