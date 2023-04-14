import React from "react";
import "./style.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Category = () => {
  return (
    <div>
      <header>
        <h2>Categories</h2>
      </header>
      <Carousel>
        <div>
          <img src="https://images.all-free-download.com/images/graphiclarge/jewellery_184026.jpg" alt="" width={"50px"} />
          
        </div>
        <div>
          <img src="https://images.all-free-download.com/images/graphiclarge/jewellery_184026.jpg" alt="" />
          
        </div>
        <div>
          <img src="https://images.all-free-download.com/images/graphiclarge/jewellery_184026.jpg" alt="" />
          
        </div>
      </Carousel>
    </div>
  );
};

export default Category;
