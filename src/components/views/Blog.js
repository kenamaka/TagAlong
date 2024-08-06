import React from "react";
import img1 from "../assets/img/mobil.jpg";
import img2 from "../assets/img/man1.jpg";
import img3 from "../assets/img/man.jpg";
import img4 from "../assets/img/babe.jpg";
import img5 from "../assets/img/post3.jpg";
import img6 from "../assets/img/girl3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css'


const Blog = () => {

  
  return (
    <>
    
    <div className="site-section layout_padding">
        <div className="container">
          <div className="row">
            <div className="content-header col-md-12">
              News and Updates
            </div>
              </div>
            <div className="row">
            {/* <div className="blog-wrapper"> */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-5">
              <div class="h-entry">
                <a href="#">
                  <img src={img1} alt="Image" class="img-fluid" />
                </a>
                <h2 class="lead-text  pt-4 ">
                  <a href="#" className="dark">
                    Micro-mobility Revolution
                  </a>
                </h2>
                <div class="meta mb-4 ">
                  Ham Brook &nbsp; Jul 28, 2023 &nbsp;
                  <a href="#">News and Updates</a>
                </div>
                <p>
                  
                </p>
                <p>
                  <a href="#">Continue Reading...</a>
                </p>
              </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-5">
              <div class="h-entry">
                <a href="#">
                  <img src={img4} alt="Image" class="img-fluid" />
                </a>
                <h2 class="lead-text  pt-4 ">
                  <a href="#" className="dark">
                    Micro-mobility Revolution
                  </a>
                </h2>
                <div class="meta mb-4 ">
                  Ham Brook &nbsp; Jul 28, 2023 &nbsp;
                  <a href="#">News and Updates</a>
                </div>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehenderit
                  suscipit quaerat rerum voluptatibus a eius. */}
                </p>
                <p>
                  <a href="#">Continue Reading...</a>
                </p>
              </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-5">
              <div class="h-entry">
                <a href="#">
                  <img src={img5} alt="Image" class="img-fluid" />
                </a>
                <h2 class="lead-text  pt-4 ">
                  <a href="#" className="dark">
                    Easy movement from one point to another
                  </a>
                </h2>
                <div class="meta mb-4 ">
                  Ham Brook &nbsp; Jul 28, 2023 &nbsp;
                  <a href="#">News and Updates</a>
                </div>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehenderit
                  suscipit quaerat rerum voluptatibus a eius. */}
                </p>
                <p>
                  <a href="#">Continue Reading...</a>
                </p>
              </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-5">
              <div class="h-entry">
                <a href="#">
                  <img src={img6} alt="Image" class="img-fluid" />
                </a>
                <h2 class="lead-text  pt-4 ">
                  <a href="#" className="dark">
                  End the long wait at Bus stops
                                      </a>
                </h2>
                <div class="meta mb-4 ">
                  Ham Brook &nbsp; Jul 28, 2023 &nbsp;
                  <a href="#">News and Updates</a>
                </div>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehenderit
                  suscipit quaerat rerum voluptatibus a eius. */}
                </p>
                <p>
                  <a href="#">Continue Reading...</a>
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-5">
              <div class="h-entry">
                <a href="#">
                  <img src={img2} alt="Image" class="img-fluid" />
                </a>
                <h2 class="lead-text  pt-4 ">
                  <a href="#" className="dark">
                    Ride-hailing vs. Traditional Taxis
                  </a>
                </h2>
                <div class="meta mb-4 ">
                  Ham Brook &nbsp; Jul 28, 2023 &nbsp;{" "}
                  <a href="#">News and Updates</a>
                </div>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehenderit
                  suscipit quaerat rerum voluptatibus a eius. */}
                </p>
                <p>
                  <a href="#">Continue Reading...</a>
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-5">
              <div class="h-entry">
                <a href="#">
                  <img src={img3} alt="Image" class="img-fluid" />
                </a>
                <h2 class="lead-text  pt-4 ">
                  <a href="#" className="dark">
                    Exploring the Future of Autonomous
                    Transportation
                  </a>
                </h2>
                <div class="meta mb-4 ">
                  Ham Brook &nbsp; Jul 28, 2023 &nbsp;{" "}
                  <a href="#">News and Updates</a>
                </div>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehenderit
                  suscipit quaerat rerum voluptatibus a eius. */}
                </p>
                <p>
                  <a href="#">Continue Reading...</a>
                </p>
              </div>
              </div>
            </div>
            
            <div className="col-md-12 text-center">
              <div className="">
              <br/>
                <button className="get-app  mobile bgblue btn disabled" >
                  <span className="btn-text">View all</span>
                </button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Blog;
