import React, { useEffect, useState } from 'react'
import "../App.css";
import android from "../assets/playstore.png";
import ios from "../assets/appstore.png";
import { NavLink, useLocation } from 'react-router-dom';


const Destop = ({white}) => {
  const [scrolled, setScrolled] = useState(false)

  console.log(white)
  const handleScroll = () => { 
    if (window.scrollY >= 50) {
      setScrolled(true)
      // console.log("scrolled")
    }
    else {
      setScrolled(false)
    }
  }
  

window.addEventListener("scroll",handleScroll)



// const handleWhite = () => {
// if (white)
//   setScrolled(true)
//   console.log("I was clicked, cheers")
// }


  return (
      <>
      <nav className={scrolled || white ? "header bgwhite header-scrolled" : "header "}>
          <div className="container">
                  <div className=" desktop-logo">

              <span className="link-text">
              <NavLink to="/" >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="logo-dtop"
                  viewBox="0 0 66 79"
                  fill="none"
                >
                  <path
                  d="M65.9207 30.1449C65.8848 29.2588 65.375 29.1471 64.6247 29.1543C59.7064 29.1795 54.7881 29.1507 49.8735 29.1867C49.2237 29.1903 48.8718 29.0246 48.6277 28.5311C47.9743 26.2943 46.8543 24.2627 45.3824 22.541C42.3273 18.9821 37.7573 16.7669 32.6739 16.9182C24.1082 17.1739 17.1688 24.2555 17.0503 32.8536C16.9247 41.8911 24.1872 49.2537 33.1657 49.2537C37.8937 49.2537 42.1478 47.2113 45.0952 43.9587C46.6712 42.2189 47.8738 40.1333 48.5775 37.8316C48.7139 37.3814 49.1231 37.0716 49.5934 37.0716C52.0274 37.0644 54.4614 37.0608 56.8954 37.0356C57.4519 37.032 57.8504 37.1292 57.7965 37.8064C57.0857 40.7348 56.1128 43.5589 54.6122 46.1847C51.0115 52.4955 43.9572 57.1962 36.77 58.1687C30.6312 58.9972 24.1692 57.5564 18.9817 54.1525C18.3606 53.7454 17.8329 53.2916 17.2657 52.8233C13.5249 49.7003 10.7104 45.9146 9.09849 41.2716C7.10247 35.5191 7.51532 29.0498 9.66931 23.3982C9.87394 23.002 10.0929 22.613 10.2832 22.2096C15.4635 11.1189 28.1936 5.33761 39.9077 8.78836C46.3984 10.701 51.3776 14.5876 54.8025 20.4626C54.9281 20.6823 55.0251 20.9344 55.1759 21.1326H63.7415C63.7379 21.0389 63.7056 20.9236 63.6482 20.7904C63.2677 19.9367 62.9194 19.065 62.4958 18.2293C56.479 6.33898 44.0469 -1.41261 29.1772 0.215513C20.3459 1.18086 12.3582 5.8599 6.8727 12.8731C1.66365 19.5368 -0.655459 28.2106 0.159466 36.6177C0.812841 43.3824 3.72788 49.7327 8.10406 54.8729C8.44152 55.2691 8.78618 55.6581 9.13441 56.0435C9.48981 56.4361 9.76623 56.8324 10.0857 57.2574C10.3191 57.5744 10.574 57.8734 10.8289 58.1723C13.1444 60.8919 15.4528 63.6186 17.7647 66.3382C20.0982 69.0829 22.4389 71.8241 24.7939 74.5472C25.0272 74.8174 25.2642 75.0911 25.5011 75.3613C29.565 80.0511 36.3177 80.1232 40.4031 75.4189C45.2783 69.8033 50.1571 64.1877 54.7809 58.356C57.5129 55.5212 60.0582 52.5495 61.8711 49.0159C62.2266 48.7674 62.3271 48.3532 62.5066 47.9966C63.8385 45.3311 64.8436 42.5575 65.3247 39.6038C66.1396 36.4953 66.0391 33.3219 65.9207 30.1449ZM41.2324 33.7793C41.2216 33.8982 41.2073 34.0134 41.1929 34.1287C40.6795 38.1198 37.2798 41.2103 33.1585 41.2103C33.1154 41.2103 33.0795 41.2067 33.0365 41.2067C28.6172 41.1383 25.0559 37.529 25.0559 33.0805C25.0559 28.614 28.6423 24.9939 33.0831 24.9507C33.1083 24.9507 33.1334 24.9471 33.1585 24.9471C37.6352 24.9471 41.2647 28.5888 41.2647 33.0805C41.2647 33.3146 41.2539 33.5488 41.2324 33.7793ZM2.0442 44.4522C2.09446 44.4053 2.14831 44.3801 2.19857 44.3585C2.1519 44.3837 2.10523 44.4161 2.0442 44.4522Z"
                  className={scrolled || white ? 'fill-blue' : "fill-white"}
                  />
                </svg>
                </NavLink>

            </span> 
            <h2 className={scrolled || white ? 'dark ' : "white"}>Never stranded</h2>
            </div> 
                  
        <div className="navigation">



           <ul className=" navig-link">
            
            <li className="nav-link my-link">
                <span className={scrolled || white ? "link-text dropdown-container dark" : "link-text dropdown-container white "}>
                Company &nbsp;
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 10"
                  fill="none"
                  className="dp-icon"

                >
                  <path
                      d="M2.38 0.0599976L8.5 6.16666L14.62 0.0599976L16.5 1.94L8.5 9.94L0.5 1.94L2.38 0.0599976Z"
                      className={scrolled || white ?  "fill-dark" : "fill-white"}
                    
                  />
                    </svg>
                    <ul class="dropdown">
                    <li><NavLink to="/about" >About</NavLink></li>
                    <li><NavLink to="/terms_and_conditions">Terms and Conditions</NavLink></li>
                    {/* <li><NavLink to="about">About</NavLink></li> */}
                  </ul>
              </span>
            </li>
            <li className="nav-link my-link ">
                <span className={scrolled || white ? "link-text dropdown-container dark" : "link-text dropdown-container white"}>
                Cities &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dp-icon"
                  viewBox="0 0 17 10"
                  fill="none"
                >
                  <path
                    d="M2.38 0.0599976L8.5 6.16666L14.62 0.0599976L16.5 1.94L8.5 9.94L0.5 1.94L2.38 0.0599976Z"
                    className={scrolled || white ? "fill-dark" : "fill-white"}
                    
                  />
                </svg>
                <ul class="dropdown">
                    <li><a href="#">Abuja</a></li>
                    <li><a href="#">Port Harcourt</a></li>
                    <li><a href="#">Lagos</a></li>
                  </ul>
              </span>
            </li>
            <li className="nav-link my-link">
              <NavLink to="/become_a_driver">
              <span className={scrolled || white ? "link-text dark" : "link-text white"}>Become A Driver</span>

              </NavLink>
            </li>
            <li className="nav-link my-link">
              <NavLink to="/support">
              <span className={scrolled || white ? "link-text dark" : "link-text white"}>Support</span>

              </NavLink>
            </li>
                          </ul>
        </div>
        <div className="navig-link">
            <li className="nav-link ">
              <span className={scrolled || white ? "top-down dark" : "top-down white"}>Download Now</span>
            </li>
            <li className="nav-link navig-link">
              <div className=" d-btn">
                <img src={ios} alt="download-ios" />
              </div>
              <div className="d-btn">
                <img src={android} alt="download-android" />
                {/* <img src={ios} alt='download-ios' /> */}
              </div>
            </li>
              </div>
                      </div>
    </nav>
      
      </>
  )
}

export default Destop