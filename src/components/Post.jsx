import React from 'react'

const Post = () => {
  return (
      <>
                <div className="site-section layout_padding">
        <div className="container">
          <div className="row">
            <div className="content-header col-12">News and Updates </div>
            <div className="col-md-12 col-lg-4 pt-5">
              <div class="h-entry">
                <a href="single.html">
                  <img src={img1} alt="Image" class="img-fluid" />
                </a>
                <h2 class="lead-text  pt-4 ">
                  <a href="#" className="dark">
                    Micro-mobility Revolution
                  </a>
                </h2>
                <div class="meta mb-4 ">
                  Ham Brook &nbsp; Jan 18, 2019 &nbsp;
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
            <div className="col-md-12 col-lg-4 pt-5">
              <div class="h-entry">
                <a href="single.html">
                  <img src={img2} alt="Image" class="img-fluid" />
                </a>
                <h2 class="lead-text  pt-4 ">
                  <a href="#" className="dark">
                    Ride-hailing vs. Traditional Taxis
                  </a>
                </h2>
                <div class="meta mb-4 ">
                  Ham Brook &nbsp; Jan 18, 2019 &nbsp;{" "}
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
            <div className="col-md-12 col-lg-4 pt-5">
              <div class="h-entry">
                <a href="single.html">
                  <img src={img3} alt="Image" class="img-fluid" />
                </a>
                <h2 class="lead-text  pt-4 ">
                  <a href="#" className="dark">
                    Self-Driving Cars: Exploring the Future of Autonomous
                    Transportation
                  </a>
                </h2>
                <div class="meta mb-4 ">
                  Ham Brook &nbsp; Jan 18, 2019 &nbsp;{" "}
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
            <div className="col-12 text-center">
              <div className="">
                <button className="get-app  mobile bgblue btn">
                  <span className="btn-text">View all</span>
                </button>
              </div>
            </div>
            <div className="col-md-12 col-lg-4"></div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Post