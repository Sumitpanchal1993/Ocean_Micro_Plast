import React from 'react'
import './Home.css'
import P1 from '../Media/Product/01.png'
import P2 from '../Media/Product/02.png'
import P3 from '../Media/Product/03.png'
import P4 from '../Media/Product/04.png'
import P5 from '../Media/Product/05.png'
import P6 from '../Media/Product/06.png'
import P7 from '../Media/Product/07.png'
import P8 from '../Media/Product/08.png'
import P9 from '../Media/Product/09.png'
import P10 from '../Media/Product/10.png'
import P11 from '../Media/Product/11.png'
import P12 from '../Media/Product/12.png'
import P13 from '../Media/Product/13.png'
import P14 from '../Media/Product/14.png'
import P15 from '../Media/Product/15.png'
import P16 from '../Media/Product/16.png'
import P17 from '../Media/Product/17.png'



function Home() {
  return (
    <>
    <div className="homeBase">

    <div className='homeTitle'>
      <h1> Welcome to World of PET Bottle </h1>
      <p>Ocean Micro Plast</p>
      <h3>We are the Leading Suppliers of PET bottles</h3>
      <h3>Manufactureres of HDPE & PET Packaging Bottles</h3>
      <button>
        Scroll Down
        <span class="material-symbols-outlined">arrow_downward</span>
      </button>
    </div>
    </div>
    <div className="product">    
    <h1>Our Products Range</h1>    
        <div className='list'>
        <img src={P1} alt="" />
        <img src={P2} alt="" />
        <img src={P3} alt="" />
        <img src={P4} alt="" />
        <img src={P5} alt="" />
        <img src={P6} alt="" />
        <img src={P7} alt="" />
        <img src={P8} alt="" />
        <img src={P9} alt="" />
        <img src={P10} alt="" />
        <img src={P11} alt="" />
        <img src={P12} alt="" />
        <img src={P13} alt="" />
        <img src={P14} alt="" />
        <img src={P15} alt="" />
        <img src={P16} alt="" />
        <img src={P17} alt="" />
        </div>
    


    </div>
    </>
  )
}

export default Home