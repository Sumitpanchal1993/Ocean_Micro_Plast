import React from 'react'
import PetBottle from '../Media/Images/Bottle.png'

function ProductCard() {
  return (
    <>
    <div className="prdCard">
        <img src={PetBottle} alt="" />
        <h3>Bottle Name</h3>
        <h6>Detail of Bottle:</h6>
        <p>It is used to store Water</p>
        <h6>Available Sizes:</h6>
        <p>1L | 500ml | 250ml | 100ml</p>
        <h6>Available Colours</h6>
        <p>White | transparent | Golden</p>
      
        <button>Know More</button>
    </div>
    </>
  )
}

export default ProductCard