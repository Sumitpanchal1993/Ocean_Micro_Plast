import React from "react";
import ProductCard from "../Components/ProductCard";
import "./Product.css";
import P1 from "../Media/Product/01.png";
import P2 from "../Media/Product/02.png";
import P3 from "../Media/Product/03.png";
import P4 from "../Media/Product/04.png";
import P5 from "../Media/Product/05.png";
import P6 from "../Media/Product/06.png";
import P7 from "../Media/Product/07.png";
import P8 from "../Media/Product/08.png";
import P9 from "../Media/Product/09.png";
import P10 from "../Media/Product/10.png";
import P11 from "../Media/Product/11.png";
import P12 from "../Media/Product/12.png";
import P13 from "../Media/Product/13.png";
import P14 from "../Media/Product/14.png";
import P15 from "../Media/Product/15.png";
import P16 from "../Media/Product/16.png";
import P17 from "../Media/Product/17.png";

function Product() {
  return (
    <div className="productBase">
      <ProductCard photo={P1} />
      <ProductCard photo={P2} />
      <ProductCard photo={P3} />
      <ProductCard photo={P4} />
      <ProductCard photo={P5} />
      <ProductCard photo={P6} />
      <ProductCard photo={P7} />
      <ProductCard photo={P8} />
      <ProductCard photo={P9} />
      <ProductCard photo={P10} />
      <ProductCard photo={P11} />
      <ProductCard photo={P12} />
      <ProductCard photo={P13} />
      <ProductCard photo={P14} />
      <ProductCard photo={P15} />
      <ProductCard photo={P16} />
      <ProductCard photo={P17} />
    </div>
  );
}

export default Product;
