import React from 'react'

function ProductCard({photo}) {
  return (
    <>
    <div className="prdCard">
        <img src={photo} alt="" />
        <h2>Bottle Name</h2>
        <h5>Detail of Bottle:</h5>
        <p>It is used to store Water</p>
        <h5>Available Sizes:</h5>
        <p>1L | 500ml | 250ml | 100ml</p>
        <h5>Available Colours</h5>
        <p>White | transparent | Golden</p>
      
        <button>Know More</button>
    </div>
    </>
  )
}

export default ProductCard