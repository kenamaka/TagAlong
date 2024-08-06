import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlidingSession = ({ blogPosts }) => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow:2,
    slidesToScroll:1,
  }
  return (
      <>
          <div className='sliding-session'>
              <Slider {...settings}>
                  {blogPosts.map((post, index) => {
                       <div className="col-md-12 col-lg-4 pt-5 " key = {index}>
                       <div class="h-entry">
                         <a href="#">
                           <img src={post.image} alt="Image" class="img-fluid" />
                         </a>
                         <h2 class="lead-text  pt-4 ">
                                   <a href="#" className="dark">
                                       {post.title}
                               </a>
                         </h2>
                         <div class="meta mb-4 ">
                           {post.author} &nbsp; {post.date} &nbsp;{" "}
                                   <a href="#">{ post.category}</a>
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
                  })}
              </Slider>
              
          </div>

      </>
  )
}

export default SlidingSession