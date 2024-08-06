import React, { useState } from 'react'
import "../App.css";
import android from "../assets/playstore.png";
import ios from "../assets/appstore.png";
import { NavLink } from 'react-router-dom';

export const Mobile = () => {

  const [click, setClick] = useState(false)
  const [drop, setDrop] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrolled(true)
    } 
    else {
      setScrolled(false)
    }
}

const handleWhite = () => {
  setScrolled(true)
}


  window.addEventListener('scroll', handleScroll)
  

  const handleClick = () => {
    setClick(!click)
    setScrolled(true)
  }
  const handleDrop = () => {
    setDrop(!click)
  }
    return (
      <>
        <nav className={scrolled ? "mobile-container bgwhite mobile-scrolled" : "mobile-container"}>
    <div className="container">
    <NavLink to="/">

            <div className={scrolled ? " mobile-logo mobile-logo-scrolled " : "mobile-logo"} onClick={()=>{setClick(false)}}>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
                className={scrolled ? "logo-dtop-scrolled" : "logo-dtop"}
            viewBox="0 0 66 79"
            fill="none"
          >
            <path
                  d="M65.9207 30.1449C65.8848 29.2588 65.375 29.1471 64.6247 29.1543C59.7064 29.1795 54.7881 29.1507 49.8735 29.1867C49.2237 29.1903 48.8718 29.0246 48.6277 28.5311C47.9743 26.2943 46.8543 24.2627 45.3824 22.541C42.3273 18.9821 37.7573 16.7669 32.6739 16.9182C24.1082 17.1739 17.1688 24.2555 17.0503 32.8536C16.9247 41.8911 24.1872 49.2537 33.1657 49.2537C37.8937 49.2537 42.1478 47.2113 45.0952 43.9587C46.6712 42.2189 47.8738 40.1333 48.5775 37.8316C48.7139 37.3814 49.1231 37.0716 49.5934 37.0716C52.0274 37.0644 54.4614 37.0608 56.8954 37.0356C57.4519 37.032 57.8504 37.1292 57.7965 37.8064C57.0857 40.7348 56.1128 43.5589 54.6122 46.1847C51.0115 52.4955 43.9572 57.1962 36.77 58.1687C30.6312 58.9972 24.1692 57.5564 18.9817 54.1525C18.3606 53.7454 17.8329 53.2916 17.2657 52.8233C13.5249 49.7003 10.7104 45.9146 9.09849 41.2716C7.10247 35.5191 7.51532 29.0498 9.66931 23.3982C9.87394 23.002 10.0929 22.613 10.2832 22.2096C15.4635 11.1189 28.1936 5.33761 39.9077 8.78836C46.3984 10.701 51.3776 14.5876 54.8025 20.4626C54.9281 20.6823 55.0251 20.9344 55.1759 21.1326H63.7415C63.7379 21.0389 63.7056 20.9236 63.6482 20.7904C63.2677 19.9367 62.9194 19.065 62.4958 18.2293C56.479 6.33898 44.0469 -1.41261 29.1772 0.215513C20.3459 1.18086 12.3582 5.8599 6.8727 12.8731C1.66365 19.5368 -0.655459 28.2106 0.159466 36.6177C0.812841 43.3824 3.72788 49.7327 8.10406 54.8729C8.44152 55.2691 8.78618 55.6581 9.13441 56.0435C9.48981 56.4361 9.76623 56.8324 10.0857 57.2574C10.3191 57.5744 10.574 57.8734 10.8289 58.1723C13.1444 60.8919 15.4528 63.6186 17.7647 66.3382C20.0982 69.0829 22.4389 71.8241 24.7939 74.5472C25.0272 74.8174 25.2642 75.0911 25.5011 75.3613C29.565 80.0511 36.3177 80.1232 40.4031 75.4189C45.2783 69.8033 50.1571 64.1877 54.7809 58.356C57.5129 55.5212 60.0582 52.5495 61.8711 49.0159C62.2266 48.7674 62.3271 48.3532 62.5066 47.9966C63.8385 45.3311 64.8436 42.5575 65.3247 39.6038C66.1396 36.4953 66.0391 33.3219 65.9207 30.1449ZM41.2324 33.7793C41.2216 33.8982 41.2073 34.0134 41.1929 34.1287C40.6795 38.1198 37.2798 41.2103 33.1585 41.2103C33.1154 41.2103 33.0795 41.2067 33.0365 41.2067C28.6172 41.1383 25.0559 37.529 25.0559 33.0805C25.0559 28.614 28.6423 24.9939 33.0831 24.9507C33.1083 24.9507 33.1334 24.9471 33.1585 24.9471C37.6352 24.9471 41.2647 28.5888 41.2647 33.0805C41.2647 33.3146 41.2539 33.5488 41.2324 33.7793ZM2.0442 44.4522C2.09446 44.4053 2.14831 44.3801 2.19857 44.3585C2.1519 44.3837 2.10523 44.4161 2.0442 44.4522Z"
                  className={scrolled ? "fill-blue" : 'fill-white'}
            />
          </svg>
          
  <h2 className={scrolled ? "blue": 'white'}>TagAlong</h2>
      </div> 
      </NavLink>
            

    <ul className= {click ? " mobile-nav active" :"mobile-nav"}>
      
      <li className="nav-link my-link" >
                <div className="link-text mobile-drop"   >
                  <div className='link-container ' >
          <div>Company </div>
           <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 10"
            fill="none"
            className="dp-icon"

          >
            <path
              d="M2.38 0.0599976L8.5 6.16666L14.62 0.0599976L16.5 1.94L8.5 9.94L0.5 1.94L2.38 0.0599976Z"
              className="fill"
              
            />
                    </svg>
                    </div>
                  <ul class= "dropdown-mobile ">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/terms_and_conditions">Terms and Conditions</NavLink></li>
            </ul>
        </div>
      </li>
      <li className="nav-link my-link">
                <div className="mobile-drop link-text" >
                  <div className='link-container'>
          <div>Cities</div> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dp-icon "
            viewBox="0 0 17 10"
            fill="none"
          >
            <path
              d="M2.38 0.0599976L8.5 6.16666L14.62 0.0599976L16.5 1.94L8.5 9.94L0.5 1.94L2.38 0.0599976Z"
              className="fill"
              
            />
                    </svg>
                    </div>
          <ul class="dropdown-mobile">
              <li><a href="#">Abuja</a></li>
              <li><a href="#">Port Harcourt</a></li>
              <li><a href="#">Lagos</a></li>
            </ul>
        </div>
              </li>
              <li className="nav-link my-link">
                <div className=" mobile-drop link-text">
                  <div className='link-container   '>
          <div><NavLink to="/become_a_driver">Become a Driver</NavLink></div> 
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dp-icon "
            viewBox="0 0 17 10"
            fill="none"
          >
            <path
              d="M2.38 0.0599976L8.5 6.16666L14.62 0.0599976L16.5 1.94L8.5 9.94L0.5 1.94L2.38 0.0599976Z"
              className="fill"
              
            />
                    </svg> */}
                    </div>
          {/* <ul class="dropdown-mobile">
              <li><a href="#">Comfort</a></li>
              <li><a href="#">Executive</a></li>
              <li><a href="#">Luxury</a></li>
            </ul> */}
        </div>
              </li>
              
      <li className="nav-link my-link">
        <span className="link-text"><NavLink to="/support">Support</NavLink></span>
              </li>
              
              <li className="nav-link ">
        <span className="link-text">Download Now</span>
      </li>
      {/* <li className="nav-link">
        <div className=" d-btn">
          <img src={ios} alt="download-ios" />
        </div>
        <div className="d-btn">
          <img src={android} alt="download-android" />
        </div>
      </li>
       */}
                    </ul>
                    


  
        <div className="mobile-btn" onClick={handleClick}>
          {click ? (
            <svg  width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 39 39" fill="none">
              <path d="M19.5 0.6875C9.01875 0.6875 0.6875 9.01875 0.6875 19.5C0.6875 29.9813 9.01875 38.3125 19.5 38.3125C29.9813 38.3125 38.3125 29.9813 38.3125 19.5C38.3125 9.01875 29.9813 0.6875 19.5 0.6875ZM26.7563 28.9062L19.5 21.65L12.2438 28.9062L10.0938 26.7563L17.35 19.5L10.0938 12.2438L12.2438 10.0938L19.5 17.35L26.7563 10.0938L28.9062 12.2438L21.65 19.5L28.9062 26.7563L26.7563 28.9062Z" className='fill-blue' />
            </svg>
          ) : (
            <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.913086 1.15876C0.913086 0.870658 1.02753 0.594359 1.23125 0.390642C1.43497 0.186926 1.71126 0.0724792 1.99936 0.0724792H23.0007C23.2888 0.0724792 23.5651 0.186926 23.7688 0.390642C23.9726 0.594359 24.087 0.870658 24.087 1.15876C24.087 1.44686 23.9726 1.72315 23.7688 1.92687C23.5651 2.13059 23.2888 2.24503 23.0007 2.24503H1.99936C1.71126 2.24503 1.43497 2.13059 1.23125 1.92687C1.02753 1.72315 0.913086 1.44686 0.913086 1.15876ZM0.913086 7.31433C0.913086 7.02623 1.02753 6.74993 1.23125 6.54621C1.43497 6.3425 1.71126 6.22805 1.99936 6.22805H23.0007C23.2888 6.22805 23.5651 6.3425 23.7688 6.54621C23.9726 6.74993 24.087 7.02623 24.087 7.31433C24.087 7.60243 23.9726 7.87872 23.7688 8.08244C23.5651 8.28616 23.2888 8.4006 23.0007 8.4006H1.99936C1.71126 8.4006 1.43497 8.28616 1.23125 8.08244C1.02753 7.87872 0.913086 7.60243 0.913086 7.31433ZM1.99936 12.3836C1.71126 12.3836 1.43497 12.4981 1.23125 12.7018C1.02753 12.9055 0.913086 13.1818 0.913086 13.4699C0.913086 13.758 1.02753 14.0343 1.23125 14.238C1.43497 14.4417 1.71126 14.5562 1.99936 14.5562H23.0007C23.2888 14.5562 23.5651 14.4417 23.7688 14.238C23.9726 14.0343 24.087 13.758 24.087 13.4699C24.087 13.1818 23.9726 12.9055 23.7688 12.7018C23.5651 12.4981 23.2888 12.3836 23.0007 12.3836H1.99936Z" className={scrolled ? 'fill-blue' : "fill-white"} />
                    </svg>
          )}
      </div>
  
                </div>
</nav>

</>
  )
}
