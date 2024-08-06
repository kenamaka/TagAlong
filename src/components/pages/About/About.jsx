import React, { useEffect, useState } from 'react'
import Footer from '../../Footer'
import Nav from '../../Nav'
import bigview from '../../assets/img/team.jpg'
import './about.css'
import { useLocation } from 'react-router-dom'

import staff1 from "../../assets/img/staff.jpg"
import staff2 from "../../assets/img/staff1.jpg"
import staff3 from "../../assets/img/staff2.jpg"
import team1 from "../../assets/img/team-10.jpg"
import team2 from "../../assets/img/team-2.jpg"
import team3 from "../../assets/img/team-3.jpg"
import team4 from "../../assets/img/team-4.jpg"
import team5 from "../../assets/img/team-1.jpg"
import team6 from "../../assets/img/team-16.jpg"
import team7 from "../../assets/img/team-11.jpg"
import team8 from "../../assets/img/team-5.jpg"
import team9 from "../../assets/img/team-14.jpg"



const About = () => {

  const location = useLocation()
  let link = location.pathname.split("/")[1];
  const [white, setWhite] = useState(false)



  useEffect(() => {
    if (link = "about") {

      setWhite(true)
      console.log(white)

    }
  }, [])


  console.log(link)

  return (
    <>
      <Nav white={white} />

      <div className="page-hero terms-page-hero content-show" style={{ backgroundImage: `url(${bigview})` }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center ">
                        <div class="col-12 "><br /><br /><br />
                            <h1 className="header-text text-left ">
                                About us
                                </h1>
                                 <p className="description col-md-8 col-xl-10 col-lg-8 col-sm-12 p-0">

            tellus. Sed dignissim, metus nec fringilla accumsan, ris
            </p>



                        </div>

                    </div>
                </div>
            </div>
      <div className='layout_padding-top'>

      <div className="container ">
          <div className=''>
            <div className="row header-content   ">
              <div className='col-lg-3 col-xl-3 col-md-3 col-sm-12 text-left content-hide '>
                <h2 className='lead-text content-header  about-lead-text dark '>About us <br /> Our Team</h2>
              </div>
              <div class="col-lg-9 col-xl-9 col-md-9 col-sm-12  text-left">
                <h2 className="term-header content-header text-left dark align">
                  About us
                </h2>

                <p className='p-text'>
                  Horem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam eu turpis molestie, dictum est a, mattis tellus.
                  Sed dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                  Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                  Morbi convallis convallis diam sit amet lacinia.
                </p>
                <p className='p-text content-hide'>
                  Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.

                </p>
<div className='content-show '>
<button className= ' btn read-btn disabled'> <span className='btn-text'>Read more </span></button>
</div>
            </div>

            </div>
          </div>
        </div>
        </div>

        {/* about group image */}

      <div className='layout_padding content-hide'>
        <div className='container-fliud'>
          <div className='team'>

          </div>
        </div>
      </div>

      <div className='layout_padding-top'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 p-0 content-hide '>
              <div className='col-xl-12 col-lg-12'>
                <div className='staff' style={{ backgroundImage: `url(${staff1})` }}>

                </div>
              </div>

              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 '>
                <div className='staff' style={{ backgroundImage: `url(${staff2})` }}>

                </div>
              </div>

            </div>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 content-hide '>

              <div className='staff' style={{ backgroundImage: `url(${staff3})` }}>

              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6  col-sm-12'>
              <h2 className="content-header text-left content-center dark  p-0">
                The Team
              </h2>

              <p className='p-text content-hide'>
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam eu turpis molestie, dictum est a, mattis tellus.
                Sed dignissim, metus nec fringilla accumsan, risus sem
                sollicitudin lacus, ut interdum tellus elit sed risus.
                Maecenas eget condimentum velit, sit amet feugiat lectus.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                Morbi convallis convallis diam sit amet lacinia.
              </p>
              <p className='p-text content-hide '>
                Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.

              </p>

              <div className='row justify-content-center scores align-items-center   col-12 p-0'>
                <div className='col-4 col-xl-3 col-lg-3 col-md-3' ><h6>100</h6><p>Million Users</p></div>
                <div className='col-4 col-xl-3 col-lg-3 col-md-3'  ><h6>50</h6><p>Thousand Certified Employees</p></div>
                <div className='col-4 col-xl-3 col-lg-3 col-md-3'><h6>1.3</h6><p>Million NetWorks</p></div>
                <div className='col-4 col-xl-3 col-lg-3 col-md-3'><h6>153</h6><p>Thousand Drivers</p></div>
              </div>


            </div>
          </div>
        </div>
      </div>

{/* people session */}

      <div className='layout_padding-top content-hide'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-7 col-sm-12 col-lg-7 col-xl-7 team-nav pb-4 content-hide'>
              <ul >
                <li className='nav-active'>Designers</li>
                <li>Developers</li>
                <li>Marketing</li>
                <li>Admins</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='layout_padding-bottom '>
        <div className='grayback'>
          <div className='container'>
            <div className='row justify-content-center align-items-center layout_padding'>
              <div className='col-lg-3 col-xl-3 col-md-3 col-12 '>
                <div className='people '>
                  <h2 className='lead-text white pb-3'> Our People</h2>
                  <p className=' white ' >
                    Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis t
                    ellus. 
                    Sed dignissim, metus nec fringilla accumsan,
                     risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                     sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                     per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 
                  </p>

                </div>
              </div>
              <div className='col-lg-9 col-xl-9 col-md-9 col-12'>
              <div className='col-6  mt-5 content-show team-nav-mobile '>
                    <select className='blue'>
                      <option > Designers </option>
                      <option> Developers  </option>
                      <option> Marketing  </option>
                      <option> Admins  </option>
                    </select>
                    
                  </div>
                <div className='row '>
           
                  <div className='col-lg-4 col-xl-4 top-pad   col-md-4 col-6'>
                    <div className='team-image' style={{ backgroundImage: `url(${team1})` }} >
                    </div>
                    <div className='team-image-disc'>
                      <h2 className=' text-center lead-text dark p-2 ' style={{ fontSize: '95%' }}> Markson Anderson</h2>
                    </div>
                  </div>
                  <div className='col-lg-4 col-xl-4 col-md-4 top-pad col-6'>
                    <div className='team-image' style={{ backgroundImage: `url(${team2})` }} >
                    </div>
                    <div className='team-image-disc'>
                      <h2 className=' text-center lead-text dark p-2 ' style={{ fontSize: '95%' }}> Bisola Chinenye</h2>
                    </div>
                  </div>
                  <div className='col-lg-4 col-xl-4 col-md-4 top-pad col-6'>
                    <div className='team-image' style={{ backgroundImage: `url(${team3})` }} >
                    </div>
                    <div className='team-image-disc'>
                      <h2 className=' text-center lead-text dark p-2 ' style={{ fontSize: '95%' }}> Onome Judith</h2>
                    </div>
                  </div>
                  <div className='col-lg-4 col-xl-4 col-md-4 top-pad col-6'>
                    <div className='team-image' style={{ backgroundImage: `url(${team4})` }} >
                    </div>
                    <div className='team-image-disc'>
                      <h2 className=' text-center lead-text dark p-2 ' style={{ fontSize: '95%' }}> Harry Stones</h2>
                    </div>
                  </div>
                  <div className='col-lg-4 col-xl-4 col-md-4 top-pad col-6'>
                    <div className='team-image' style={{ backgroundImage: `url(${team5})` }} >
                    </div>
                    <div className='team-image-disc'>
                      <h2 className=' text-center lead-text dark p-2 ' style={{ fontSize: '95%' }}> Onyinyechi Claire</h2>
                    </div>
                  </div>

                  <div className='col-lg-4 col-xl-4 col-md-4 top-pad col-6'>
                    <div className='team-image' style={{ backgroundImage: `url(${team6})` }} >
                    </div>
                    <div className='team-image-disc'>
                      <h2 className=' text-center lead-text dark p-2 ' style={{ fontSize: '95%' }}> Chidiebere Kelvin </h2>
                    </div>
                  </div>

                  <div className='col-lg-4 col-xl-4 col-md-4 top-pad col-6'>
                    <div className='team-image' style={{ backgroundImage: `url(${team7})` }} >
                    </div>
                    <div className='team-image-disc'>
                      <h2 className=' text-center lead-text dark p-2 ' style={{ fontSize: '95%' }}> Adebayo Yetunde</h2>
                    </div>
                  </div>

                  <div className='col-lg-4 col-xl-4 col-md-4 top-pad col-6'>
                    <div className='team-image' style={{ backgroundImage: `url(${team8})` }} >
                    </div>
                    <div className='team-image-disc'>
                      <h2 className=' text-center lead-text dark p-2 ' style={{ fontSize: '95%' }}> Yemisi Susan</h2>
                    </div>
                  </div>

                  <div className='col-lg-4 col-xl-4 col-md-4 top-pad col-6'>
                    <div className='team-image' style={{ backgroundImage: `url(${team9})` }} >
                    </div>
                    <div className='team-image-disc'>
                      <h2 className=' text-center lead-text dark p-2 ' style={{ fontSize: '95%' }}> Haruna Danjuma</h2>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About