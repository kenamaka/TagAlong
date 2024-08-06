import React from 'react'
import { NavLink } from 'react-router-dom'
import './Rider.css'
import profile1 from '../../assets/img/team-16.jpg'
import prof2 from '../../assets/img/male.jpg'
import prof3 from '../../assets/img/team-14.jpg'
import prof4 from '../../assets/img/team-4.jpg'
import prof5 from '../../assets/img/clare.jpg'
import prof6 from '../../assets/img/clare.jpg'

const Rider = () => {
  return (
    <>
    <div className='layout_padding-top'>
        <br/>
        <h1 className='main-head'>
            Riders
            </h1>
            <div className='col-md-12'>
            <div className='row pt-4  '>
                <div className='col-md-5 big-box bgwhite'>
                <div className='col d-flex p-0  justify-content-between align-items-center'>
                            <div className='content-heading'>
                              <span className='icon-cover'>
                                  
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
<path d="M6.51506 0.0312905C5.42287 0.167228 4.39631 0.776603 3.76819 1.65785C2.97131 2.76879 2.79319 4.19379 3.28537 5.46879C3.66506 6.45785 4.58381 7.36254 5.59162 7.74223C6.30881 8.00941 7.23694 8.06566 7.96819 7.87816C8.69006 7.69535 9.43537 7.24535 9.94631 6.68754C11.6057 4.86879 11.2401 2.00004 9.17756 0.654728C8.40412 0.148478 7.41506 -0.0812092 6.51506 0.0312905Z" fill="#0032BB"/>
<path d="M15.5151 0.0312905C14.4229 0.167228 13.3963 0.776603 12.7682 1.65785C11.9713 2.76879 11.7932 4.19379 12.2854 5.46879C12.6651 6.45785 13.5838 7.36254 14.5916 7.74223C15.3088 8.00941 16.2369 8.06566 16.9682 7.87816C17.6901 7.69535 18.4354 7.24535 18.9463 6.68754C20.6057 4.86879 20.2401 2.00004 18.1776 0.654728C17.4041 0.148478 16.4151 -0.0812092 15.5151 0.0312905Z" fill="#0032BB"/>
<path d="M5.94474 9.03594C3.34787 9.33594 1.32755 11.3797 1.03693 14.0141C0.971304 14.6 0.971304 14.9844 1.04162 15.2562C1.11662 15.5562 1.44474 15.8844 1.74474 15.9594C1.89943 16.0016 2.72912 16.0156 4.5713 16.0156C7.03224 16.0156 7.17755 16.0109 7.15412 15.9312C6.99943 15.4016 6.9713 15.0312 7.03224 14.3656C7.1963 12.5281 7.94162 10.8312 9.13693 9.58437C9.24943 9.4625 9.33849 9.35 9.32443 9.34062C9.26818 9.27969 8.37287 9.07812 7.99318 9.03125C7.4963 8.975 6.45568 8.97969 5.94474 9.03594Z" fill="#0032BB"/>
<path d="M14.5078 9.01169C12.7453 9.19919 11.2266 10.0476 10.1906 11.4211C9.47813 12.3633 9 13.7554 9 14.8945C9 15.3211 9.16875 15.6492 9.49219 15.8508L9.71719 15.9914L15.8859 16.0054C22.8563 16.0195 22.3922 16.0429 22.725 15.6633C22.9875 15.3633 23.0391 15.1289 22.9734 14.482C22.8563 13.3195 22.4859 12.3398 21.825 11.4445C20.9391 10.2492 19.6875 9.44294 18.1969 9.1195C17.7938 9.03044 17.5641 9.02106 16.2188 9.007C15.3797 9.00231 14.6109 9.00231 14.5078 9.01169Z" fill="#0032BB"/>
</svg>
                              </span>
                              <h2 className='text'>Riders</h2>
                              </div>

                              <div className='earn-year bggrey'>
                                              <span className='earn-year-text'>
                                              August
                                              </span>
                                              <span>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 19 19" fill="none">
<path d="M3.53719 6.30867C3.74798 6.09788 4.07784 6.07871 4.31028 6.25118L4.37688 6.30867L9.4987 11.4302L14.6205 6.30867C14.8313 6.09788 15.1612 6.07871 15.3936 6.25118L15.4602 6.30867C15.671 6.51947 15.6902 6.84932 15.5177 7.08177L15.4602 7.14836L9.91854 12.69C9.70775 12.9008 9.37789 12.92 9.14545 12.7475L9.07885 12.69L3.53719 7.14836C3.30531 6.91649 3.30531 6.54054 3.53719 6.30867Z" fill="#7B7B7B"/>
</svg>
                                              </span>
                                            
                                          </div>
                          </div>
                          <div className='cont-bold'>
                          12,000

                          </div>
                          <div className='d-flex col justify-content-between p-0'>
                          <h2 className='text text-foot'>
                          <span className='green'>+2.5%</span> in the last three months
                          </h2>
                          <NavLink to='#' className='text text-foot text-link'>
                          <span className='blue text-link'>view details</span> 
                          </NavLink>
                          </div>
                </div>
                <div className='col-md-7'>
                    <div className='d-flex'>
                        <div className=' bgwhite small-ride  '>
                          <h2 className='text green text-foot'>
                          Online riders
                          </h2>
                          <div className='cont-bold line-h'>
                          11,320
                          </div>

                        </div>
                        <div className=' bgwhite small-ride  ml-3'>

                        <h2 className='text text-foot grey'>
                          Offline riders
                          </h2>
                          <div className='cont-bold line-h grey'>
                          680
                          </div>

                        </div>
                    </div>
                </div>
            </div>
                </div>
    </div>

    {/* tables container */}
    
    <div className='layout_padding-bottom bg-white table-cont mt-5'>
      <div className='table-header pt-3 pb-3' >
        <div className='col-md-6 '> 
        <div className='earn-year bggrey'>
                                              <span className='earn-year-text'>
                                              August
                                              </span>
                                              <span>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 19 19" fill="none">
<path d="M3.53719 6.30867C3.74798 6.09788 4.07784 6.07871 4.31028 6.25118L4.37688 6.30867L9.4987 11.4302L14.6205 6.30867C14.8313 6.09788 15.1612 6.07871 15.3936 6.25118L15.4602 6.30867C15.671 6.51947 15.6902 6.84932 15.5177 7.08177L15.4602 7.14836L9.91854 12.69C9.70775 12.9008 9.37789 12.92 9.14545 12.7475L9.07885 12.69L3.53719 7.14836C3.30531 6.91649 3.30531 6.54054 3.53719 6.30867Z" fill="#7B7B7B"/>
</svg>
                                              </span>
                                            
                                          </div>
        </div>
        <div className='col-md-6 '>            
                <div className="rider-search">
                  <div className='rider-search-input pl-3'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M6.48437 0.0218925C5.11874 0.140643 3.85937 0.631268 2.73437 1.47814C2.41249 1.72189 1.72187 2.41252 1.47812 2.73439C0.209367 4.41564 -0.256258 6.41564 0.143742 8.43752C0.543742 10.45 1.86562 12.2438 3.67812 13.225C6.12499 14.5563 9.07812 14.3344 11.2969 12.6594L11.5469 12.4688L13.25 14.1656C14.1875 15.1 14.9937 15.8875 15.0406 15.9188C15.175 16 15.4125 16.0188 15.575 15.9563C15.7406 15.8938 15.9156 15.7125 15.9687 15.5469C16.0156 15.4031 15.9906 15.1594 15.9187 15.0406C15.8875 14.9938 15.1 14.1875 14.1656 13.25L12.4687 11.5469L12.6594 11.2969C15.3219 7.76877 14.1344 2.72814 10.1719 0.740643C9.07187 0.187518 7.67812 -0.0843563 6.48437 0.0218925ZM7.83437 1.36252C10.6875 1.77814 12.7812 4.18439 12.7812 7.04689C12.7812 10.2156 10.2156 12.7813 7.04687 12.7813C4.87499 12.7813 2.91562 11.575 1.92499 9.62502C1.21562 8.23127 1.11249 6.58752 1.64687 5.10939C2.07812 3.90939 2.93124 2.85002 3.99374 2.19064C4.49062 1.88127 5.10624 1.61564 5.62499 1.48127C6.27187 1.31564 7.18437 1.26564 7.83437 1.36252Z" fill="#9D9D9D"/>
</svg>
                    
                  </span>
                  
                  &nbsp; <input type="text" placeholder="Search" />
                </div>
                </div>
            </div>
      </div>
        <div className='table-responsive custom-table-responsive'>
          <table className='table custom-table'>
            <thead>
              <tr>
                <th> <span className=' gray'>N0</span></th>
                <th> <span className=' gray'>NAME</span></th>
                <th> <span className=' gray'>EMAIL</span></th>
                <th> <span className=' gray'>PHONE N0</span></th>
                <th> <span className=' gray'>DATE</span></th>
                <th> <span className=' gray'>RIDES</span></th>
                <th> <span className=' gray'>ACTION</span></th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td><span className=' gray sum'>1</span></td>
                <td className='d-flex align-items-center'>
                  <div>
                  <div className='img' style={{ backgroundImage:`url(${profile1})` }}>
                  <span className='elipse'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='svg' viewBox="0 0 18 18" fill="none">
<circle cx="9" cy="9" r="7.5" fill="#099A4F" stroke="white" stroke-width="3"/>
</svg>
                  </span>
                  </div>
                  </div>
                  <div className='pl-3'>
                <h2 className='ride-text gray'>Chinonso Marco</h2>
                <div className='pt-0 d-flex '>
                    <h6 className='card-text text blue'>4.5</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" className='star-svg'  viewBox="0 0 10 10" fill="none">
<path d="M5 8.28747L2.38869 9.93321C2.31381 9.98219 2.23426 10.0042 2.15002 9.99933C2.06578 9.99444 1.99091 9.96749 1.92539 9.91852C1.85987 9.86953 1.81074 9.80586 1.77798 9.72749C1.74522 9.64912 1.7382 9.56096 1.75692 9.463L2.44485 6.34785L0.142399 4.24659C0.0675224 4.17802 0.0230646 4.1021 0.00902526 4.01884C-0.00501405 3.93557 -0.00267414 3.85475 0.0160449 3.77638C0.034764 3.69801 0.0768819 3.63189 0.142399 3.57801C0.207915 3.52413 0.287472 3.4923 0.381067 3.4825L3.4276 3.20331L4.6069 0.264494C4.64434 0.176329 4.70049 0.110206 4.77537 0.0661233C4.85025 0.022041 4.92512 0 5 0C5.07488 0 5.14975 0.022041 5.22463 0.0661233C5.2995 0.110206 5.35566 0.176329 5.3931 0.264494L6.5724 3.20331L9.61893 3.4825C9.71253 3.4923 9.79208 3.52413 9.8576 3.57801C9.92312 3.63189 9.96524 3.69801 9.98396 3.77638C10.0027 3.85475 10.005 3.93557 9.99098 4.01884C9.97694 4.1021 9.93248 4.17802 9.8576 4.24659L7.55515 6.34785L8.24308 9.463C8.2618 9.56096 8.25478 9.64912 8.22202 9.72749C8.18926 9.80586 8.14013 9.86953 8.07461 9.91852C8.00909 9.96749 7.93422 9.99444 7.84998 9.99933C7.76574 10.0042 7.68619 9.98219 7.61131 9.93321L5 8.28747Z" fill="#FFCA28"/>
</svg>
                </div>
                </div>

                </td>
                <td><span className=' gray'>ciromaosas@gmail.com</span></td>
                <td><span className=' gray'>
                08034668265
                  </span></td>
                <td><span className=' gray'>04 DEC 22</span></td>
                <td><span className=' gray'>2347</span></td>
                <td className='text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='edit' viewBox="0 0 19 19" fill="none">
<path d="M8.3125 1.20947H6.6875C2.625 1.20947 1 2.87614 1 7.04281V12.0428C1 16.2095 2.625 17.8761 6.6875 17.8761H11.5625C15.625 17.8761 17.25 16.2095 17.25 12.0428V10.3761" stroke="#0032BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4076 2.05936L6.00505 8.62602C5.7613 8.87602 5.51755 9.36769 5.4688 9.72602L5.11943 12.2344C4.98943 13.1427 5.61505 13.776 6.50068 13.651L8.9463 13.2927C9.28755 13.2427 9.76693 12.9927 10.0188 12.7427L16.4213 6.17602C17.5263 5.04269 18.0463 3.72602 16.4213 2.05936C14.7963 0.392691 13.5126 0.926024 12.4076 2.05936Z" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4894 3.00098C12.0338 4.99264 13.5531 6.55098 15.5031 7.11764" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </td>
              </tr>
              
              <tr >
                <td><span className=' gray sum'>2</span></td>
                <td className='d-flex align-items-center'>
                  <div className='img' style={{ backgroundImage:`url(${prof2})` }}>
                  <span className='elipse'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='svg' viewBox="0 0 18 18" fill="none">
<circle cx="9" cy="9" r="7.5" fill="#099A4F" stroke="white" stroke-width="3"/>
</svg>
                  </span>
                  </div>
                  <div className='pl-3'>
                <h2 className='ride-text gray'>Willson Andy</h2>
                <div className='pt-0 d-flex '>
                    <h6 className='card-text text blue'>4.7</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" className='star-svg'  viewBox="0 0 10 10" fill="none">
<path d="M5 8.28747L2.38869 9.93321C2.31381 9.98219 2.23426 10.0042 2.15002 9.99933C2.06578 9.99444 1.99091 9.96749 1.92539 9.91852C1.85987 9.86953 1.81074 9.80586 1.77798 9.72749C1.74522 9.64912 1.7382 9.56096 1.75692 9.463L2.44485 6.34785L0.142399 4.24659C0.0675224 4.17802 0.0230646 4.1021 0.00902526 4.01884C-0.00501405 3.93557 -0.00267414 3.85475 0.0160449 3.77638C0.034764 3.69801 0.0768819 3.63189 0.142399 3.57801C0.207915 3.52413 0.287472 3.4923 0.381067 3.4825L3.4276 3.20331L4.6069 0.264494C4.64434 0.176329 4.70049 0.110206 4.77537 0.0661233C4.85025 0.022041 4.92512 0 5 0C5.07488 0 5.14975 0.022041 5.22463 0.0661233C5.2995 0.110206 5.35566 0.176329 5.3931 0.264494L6.5724 3.20331L9.61893 3.4825C9.71253 3.4923 9.79208 3.52413 9.8576 3.57801C9.92312 3.63189 9.96524 3.69801 9.98396 3.77638C10.0027 3.85475 10.005 3.93557 9.99098 4.01884C9.97694 4.1021 9.93248 4.17802 9.8576 4.24659L7.55515 6.34785L8.24308 9.463C8.2618 9.56096 8.25478 9.64912 8.22202 9.72749C8.18926 9.80586 8.14013 9.86953 8.07461 9.91852C8.00909 9.96749 7.93422 9.99444 7.84998 9.99933C7.76574 10.0042 7.68619 9.98219 7.61131 9.93321L5 8.28747Z" fill="#FFCA28"/>
</svg>
                </div>
                </div>

                </td>
                <td><span className=' gray'>ngozichen@gmail.com</span></td>
                <td><span className=' gray'>
                08034668265
                  </span></td>
                <td><span className=' gray'>04 DEC 22</span></td>
                <td><span className=' gray'>2347</span></td>
                <td className='text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='edit' viewBox="0 0 19 19" fill="none">
<path d="M8.3125 1.20947H6.6875C2.625 1.20947 1 2.87614 1 7.04281V12.0428C1 16.2095 2.625 17.8761 6.6875 17.8761H11.5625C15.625 17.8761 17.25 16.2095 17.25 12.0428V10.3761" stroke="#0032BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4076 2.05936L6.00505 8.62602C5.7613 8.87602 5.51755 9.36769 5.4688 9.72602L5.11943 12.2344C4.98943 13.1427 5.61505 13.776 6.50068 13.651L8.9463 13.2927C9.28755 13.2427 9.76693 12.9927 10.0188 12.7427L16.4213 6.17602C17.5263 5.04269 18.0463 3.72602 16.4213 2.05936C14.7963 0.392691 13.5126 0.926024 12.4076 2.05936Z" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4894 3.00098C12.0338 4.99264 13.5531 6.55098 15.5031 7.11764" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </td>
              </tr>
              <tr >
                <td><span className=' gray sum'>3</span></td>
                <td className='d-flex align-items-center'>
                  <div className='img' style={{ backgroundImage:`url(${prof3})` }}>

                  <span className='elipse'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='svg' viewBox="0 0 18 18" fill="none">
<circle cx="9" cy="9" r="7.5" fill="#9D9D9D" stroke="white" stroke-width="3"/>
</svg>
                  </span>
                  </div>
                  <div className='pl-3'>
                <h2 className='ride-text gray'>Ikenna Okorie</h2>
                <div className='pt-0 d-flex '>
                    <h6 className='card-text text blue'>4.2</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" className='star-svg'  viewBox="0 0 10 10" fill="none">
<path d="M5 8.28747L2.38869 9.93321C2.31381 9.98219 2.23426 10.0042 2.15002 9.99933C2.06578 9.99444 1.99091 9.96749 1.92539 9.91852C1.85987 9.86953 1.81074 9.80586 1.77798 9.72749C1.74522 9.64912 1.7382 9.56096 1.75692 9.463L2.44485 6.34785L0.142399 4.24659C0.0675224 4.17802 0.0230646 4.1021 0.00902526 4.01884C-0.00501405 3.93557 -0.00267414 3.85475 0.0160449 3.77638C0.034764 3.69801 0.0768819 3.63189 0.142399 3.57801C0.207915 3.52413 0.287472 3.4923 0.381067 3.4825L3.4276 3.20331L4.6069 0.264494C4.64434 0.176329 4.70049 0.110206 4.77537 0.0661233C4.85025 0.022041 4.92512 0 5 0C5.07488 0 5.14975 0.022041 5.22463 0.0661233C5.2995 0.110206 5.35566 0.176329 5.3931 0.264494L6.5724 3.20331L9.61893 3.4825C9.71253 3.4923 9.79208 3.52413 9.8576 3.57801C9.92312 3.63189 9.96524 3.69801 9.98396 3.77638C10.0027 3.85475 10.005 3.93557 9.99098 4.01884C9.97694 4.1021 9.93248 4.17802 9.8576 4.24659L7.55515 6.34785L8.24308 9.463C8.2618 9.56096 8.25478 9.64912 8.22202 9.72749C8.18926 9.80586 8.14013 9.86953 8.07461 9.91852C8.00909 9.96749 7.93422 9.99444 7.84998 9.99933C7.76574 10.0042 7.68619 9.98219 7.61131 9.93321L5 8.28747Z" fill="#FFCA28"/>
</svg>
                </div>
                </div>

                </td>
                <td><span className=' gray'>ekammaonot@gmail.com</span></td>
                <td><span className=' gray'>
                08034668265
                  </span></td>
                <td><span className=' gray'>04 DEC 22</span></td>
                <td><span className=' gray'>2347</span></td>
                <td className='text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='edit' viewBox="0 0 19 19" fill="none">
<path d="M8.3125 1.20947H6.6875C2.625 1.20947 1 2.87614 1 7.04281V12.0428C1 16.2095 2.625 17.8761 6.6875 17.8761H11.5625C15.625 17.8761 17.25 16.2095 17.25 12.0428V10.3761" stroke="#0032BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4076 2.05936L6.00505 8.62602C5.7613 8.87602 5.51755 9.36769 5.4688 9.72602L5.11943 12.2344C4.98943 13.1427 5.61505 13.776 6.50068 13.651L8.9463 13.2927C9.28755 13.2427 9.76693 12.9927 10.0188 12.7427L16.4213 6.17602C17.5263 5.04269 18.0463 3.72602 16.4213 2.05936C14.7963 0.392691 13.5126 0.926024 12.4076 2.05936Z" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4894 3.00098C12.0338 4.99264 13.5531 6.55098 15.5031 7.11764" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </td>
              </tr>
              <tr >
                <td><span className=' gray sum'>4</span></td>
                <td className='d-flex align-items-center'>
                  <div className='img' style={{ backgroundImage:`url(${prof4})` }}>
                  <span className='elipse'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='svg' viewBox="0 0 18 18" fill="none">
<circle cx="9" cy="9" r="7.5" fill="#099A4F" stroke="white" stroke-width="3"/>
</svg>
                  </span>
                  </div>
                  <div className='pl-3'>
                <h2 className='ride-text gray'>Tunde Williams</h2>
                <div className='pt-0 d-flex '>
                    <h6 className='card-text text blue'>4.5</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" className='star-svg'  viewBox="0 0 10 10" fill="none">
<path d="M5 8.28747L2.38869 9.93321C2.31381 9.98219 2.23426 10.0042 2.15002 9.99933C2.06578 9.99444 1.99091 9.96749 1.92539 9.91852C1.85987 9.86953 1.81074 9.80586 1.77798 9.72749C1.74522 9.64912 1.7382 9.56096 1.75692 9.463L2.44485 6.34785L0.142399 4.24659C0.0675224 4.17802 0.0230646 4.1021 0.00902526 4.01884C-0.00501405 3.93557 -0.00267414 3.85475 0.0160449 3.77638C0.034764 3.69801 0.0768819 3.63189 0.142399 3.57801C0.207915 3.52413 0.287472 3.4923 0.381067 3.4825L3.4276 3.20331L4.6069 0.264494C4.64434 0.176329 4.70049 0.110206 4.77537 0.0661233C4.85025 0.022041 4.92512 0 5 0C5.07488 0 5.14975 0.022041 5.22463 0.0661233C5.2995 0.110206 5.35566 0.176329 5.3931 0.264494L6.5724 3.20331L9.61893 3.4825C9.71253 3.4923 9.79208 3.52413 9.8576 3.57801C9.92312 3.63189 9.96524 3.69801 9.98396 3.77638C10.0027 3.85475 10.005 3.93557 9.99098 4.01884C9.97694 4.1021 9.93248 4.17802 9.8576 4.24659L7.55515 6.34785L8.24308 9.463C8.2618 9.56096 8.25478 9.64912 8.22202 9.72749C8.18926 9.80586 8.14013 9.86953 8.07461 9.91852C8.00909 9.96749 7.93422 9.99444 7.84998 9.99933C7.76574 10.0042 7.68619 9.98219 7.61131 9.93321L5 8.28747Z" fill="#FFCA28"/>
</svg>
                </div>
                </div>

                </td>
                <td><span className=' gray'>davoupam@gmail.com</span></td>
                <td><span className=' gray'>
                08034668265
                  </span></td>
                <td><span className=' gray'>04 DEC 22</span></td>
                <td><span className=' gray'>2347</span></td>
                <td className='text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='edit' viewBox="0 0 19 19" fill="none">
<path d="M8.3125 1.20947H6.6875C2.625 1.20947 1 2.87614 1 7.04281V12.0428C1 16.2095 2.625 17.8761 6.6875 17.8761H11.5625C15.625 17.8761 17.25 16.2095 17.25 12.0428V10.3761" stroke="#0032BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4076 2.05936L6.00505 8.62602C5.7613 8.87602 5.51755 9.36769 5.4688 9.72602L5.11943 12.2344C4.98943 13.1427 5.61505 13.776 6.50068 13.651L8.9463 13.2927C9.28755 13.2427 9.76693 12.9927 10.0188 12.7427L16.4213 6.17602C17.5263 5.04269 18.0463 3.72602 16.4213 2.05936C14.7963 0.392691 13.5126 0.926024 12.4076 2.05936Z" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4894 3.00098C12.0338 4.99264 13.5531 6.55098 15.5031 7.11764" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </td>
              </tr>
              <tr >
                <td><span className=' gray sum'>5</span></td>
                <td className='d-flex align-items-center'>
                  <div className='img' style={{ backgroundImage:`url(${prof5})` }}>
                  <span className='elipse'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='svg' viewBox="0 0 18 18" fill="none">
<circle cx="9" cy="9" r="7.5" fill="#099A4F" stroke="white" stroke-width="3"/>
</svg>
                  </span>
                  </div>
                  <div className='pl-3'>
                <h2 className='ride-text gray'>Ekpe Emmanuel</h2>
                <div className='pt-0 d-flex '>
                    <h6 className='card-text text blue'>4.0</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" className='star-svg'  viewBox="0 0 10 10" fill="none">
<path d="M5 8.28747L2.38869 9.93321C2.31381 9.98219 2.23426 10.0042 2.15002 9.99933C2.06578 9.99444 1.99091 9.96749 1.92539 9.91852C1.85987 9.86953 1.81074 9.80586 1.77798 9.72749C1.74522 9.64912 1.7382 9.56096 1.75692 9.463L2.44485 6.34785L0.142399 4.24659C0.0675224 4.17802 0.0230646 4.1021 0.00902526 4.01884C-0.00501405 3.93557 -0.00267414 3.85475 0.0160449 3.77638C0.034764 3.69801 0.0768819 3.63189 0.142399 3.57801C0.207915 3.52413 0.287472 3.4923 0.381067 3.4825L3.4276 3.20331L4.6069 0.264494C4.64434 0.176329 4.70049 0.110206 4.77537 0.0661233C4.85025 0.022041 4.92512 0 5 0C5.07488 0 5.14975 0.022041 5.22463 0.0661233C5.2995 0.110206 5.35566 0.176329 5.3931 0.264494L6.5724 3.20331L9.61893 3.4825C9.71253 3.4923 9.79208 3.52413 9.8576 3.57801C9.92312 3.63189 9.96524 3.69801 9.98396 3.77638C10.0027 3.85475 10.005 3.93557 9.99098 4.01884C9.97694 4.1021 9.93248 4.17802 9.8576 4.24659L7.55515 6.34785L8.24308 9.463C8.2618 9.56096 8.25478 9.64912 8.22202 9.72749C8.18926 9.80586 8.14013 9.86953 8.07461 9.91852C8.00909 9.96749 7.93422 9.99444 7.84998 9.99933C7.76574 10.0042 7.68619 9.98219 7.61131 9.93321L5 8.28747Z" fill="#FFCA28"/>
</svg>
                </div>
                </div>

                </td>
                <td><span className=' gray'>ekpemmanuel001@gmail.com</span></td>
                <td><span className=' gray'>
                08034668265
                  </span></td>
                <td><span className=' gray'>04 DEC 22</span></td>
                <td><span className=' gray'>2347</span></td>
                <td className='text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='edit' viewBox="0 0 19 19" fill="none">
<path d="M8.3125 1.20947H6.6875C2.625 1.20947 1 2.87614 1 7.04281V12.0428C1 16.2095 2.625 17.8761 6.6875 17.8761H11.5625C15.625 17.8761 17.25 16.2095 17.25 12.0428V10.3761" stroke="#0032BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4076 2.05936L6.00505 8.62602C5.7613 8.87602 5.51755 9.36769 5.4688 9.72602L5.11943 12.2344C4.98943 13.1427 5.61505 13.776 6.50068 13.651L8.9463 13.2927C9.28755 13.2427 9.76693 12.9927 10.0188 12.7427L16.4213 6.17602C17.5263 5.04269 18.0463 3.72602 16.4213 2.05936C14.7963 0.392691 13.5126 0.926024 12.4076 2.05936Z" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4894 3.00098C12.0338 4.99264 13.5531 6.55098 15.5031 7.11764" stroke="#0032BB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

    </div>
    <div className='col-12'>
    <div className='row  pt-4 pb-5 justify-content-between align-items-center' >
        <div className='col-md-6 p-0'> 
        <h2 className='text gray '>Showing data 1 to 5 of 10 entries</h2>
        
        </div>
        <div className='col-md-6 p-0'> 
        <div className='rider-search '>           
                <div className="arrow-bar ">
                  <button className='btn nav-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='arrow' viewBox="0 0 16 16" fill="none">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#0032BB"/>
</svg>
                  </button>
                  <button className='btn nav-btn active'>
                 <span className='ride-text white'>1</span>
                  </button>

                  <button className='btn nav-btn '>
                 <span className='ride-text gray'>2</span>
                  </button>
                  <button className='btn nav-btn '>
                 <span className='ride-text gray'>3</span>
                  </button>

                  <div className='btn'>
                 <span className='ride-text dark'>.....</span>
                  </div>

                  <button className='btn nav-btn '>
                 <span className='ride-text gray'>267</span>
                  </button>

                  <button className='btn nav-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='arrow' viewBox="0 0 16 16" fill="none">
<path d="M-6.11959e-07 9L12.17 9L6.58 14.59L8 16L16 8L8 6.99382e-07L6.59 1.41L12.17 7L-7.86805e-07 7L-6.11959e-07 9Z" fill="#0032BB"/>
</svg>
                  </button>



                </div>
            </div>
            </div>
      </div>
      </div>
    </>
  )
}

export default Rider