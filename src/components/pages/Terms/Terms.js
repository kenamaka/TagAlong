import React from 'react'
import bigview from '../../assets/img/tag-driver8.jpg'
import './terms.css'
import Footer from '../../Footer'
import Nav from '../../Nav'
const Terms = () => {
    return (
        <>
        
            <Nav />
            <div className="page-hero terms-page-hero" style={{ backgroundImage: `url(${bigview})` }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center ">
                        <div class="col-12 "><br /><br /><br />
                            <h1 className="header-text text-center ">
                                Terms and Conditions</h1>


                        </div>

                    </div>
                </div>
            </div>
            <div className='layout_padding'>
                <div className='container'>
                    <div className='term-display' >
                        <div className='col-lg-4 col-xl-4 col-md-4 term-aside p-0'>

                            <h1 className='content-header '>
                                Table of Contents
                            </h1>
                            <div className='term-menu-cont'>
                                <div className='term-menu'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M19.9999 3.33334C10.7949 3.33334 3.33325 10.795 3.33325 20C3.33325 29.205 10.7949 36.6667 19.9999 36.6667C29.2049 36.6667 36.6666 29.205 36.6666 20C36.6666 10.795 29.2049 3.33334 19.9999 3.33334ZM19.9999 33.3333L23.3333 30L24.9999 28.3333V25H21.6666V23.3333L19.9999 21.6667H14.9999V26.6667L18.3333 30V33.2183C11.7666 32.3933 6.66659 26.7867 6.66659 20L8.33325 21.6667H11.6666V18.3333H14.9999L19.9999 13.3333V10H16.6666L14.9999 8.33334V7.64834C18.2051 6.34131 21.7947 6.34131 24.9999 7.64834V10L23.3333 11.6667V15L24.9999 16.6667L30.2166 11.45C31.4856 12.9682 32.4001 14.7504 32.8933 16.6667H29.9999L26.6666 20V23.3333L28.3333 25H31.6666L32.1433 25.4767C30.0483 30.1017 25.3983 33.3333 19.9999 33.3333Z" fill="black" />
                                        </svg>
                                    </span>

                                    <span className='term-menu-item'>General Terms</span>
                                </div>
                                <div className='term-menu'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <g clip-path="url(#clip0_3840_15550)">
                                                <path d="M7.77783 13.3333H26.6667V15.1111H7.77783V13.3333Z" fill="black" />
                                                <path d="M7.77783 17.7778H20.0001V19.5555H7.77783V17.7778Z" fill="black" />
                                                <path d="M7.77783 25.5555H18.8889V27.3333H7.77783V25.5555Z" fill="black" />
                                                <path d="M30.5112 19.1444C29.0894 19.1332 27.6972 19.5511 26.5166 20.3435C25.336 21.136 24.4219 22.2662 23.8939 23.5864C23.3658 24.9066 23.2482 26.3554 23.5566 27.7435C23.865 29.1315 24.5849 30.3943 25.6223 31.3667L23.4668 34L24.4668 38.0111L28.5334 33.0556C29.8207 33.4362 31.1906 33.4362 32.4779 33.0556L36.5445 38.0111L37.5445 34L35.389 31.3667C36.4264 30.3943 37.1463 29.1315 37.4547 27.7435C37.7631 26.3554 37.6455 24.9066 37.1174 23.5864C36.5894 22.2662 35.6753 21.136 34.4947 20.3435C33.3141 19.5511 31.922 19.1332 30.5001 19.1444H30.5112ZM30.5112 31.0111C29.567 30.998 28.6478 30.706 27.8691 30.1718C27.0903 29.6377 26.4869 28.8853 26.1347 28.0091C25.7824 27.133 25.697 26.1723 25.8893 25.2478C26.0815 24.3232 26.5428 23.4762 27.2151 22.8131C27.8874 22.15 28.7408 21.7005 29.6679 21.5211C30.5949 21.3416 31.5544 21.4403 32.4256 21.8046C33.2967 22.1689 34.0408 22.7827 34.5641 23.5687C35.0874 24.3547 35.3667 25.2779 35.3668 26.2222C35.355 27.5002 34.8376 28.7216 33.9276 29.6191C33.0177 30.5165 31.7893 31.017 30.5112 31.0111Z" fill="black" />
                                                <path d="M35.5557 14.6889V18.4C36.3998 18.9464 37.1502 19.6255 37.7779 20.4111V13.7444C37.0873 14.1662 36.3386 14.4844 35.5557 14.6889Z" fill="black" />
                                                <path d="M4.44439 31.1111V8.88888H25.3111C25.1075 8.16558 25.0029 7.41805 24.9999 6.66666H4.44439C3.85502 6.66666 3.28979 6.90078 2.87304 7.31753C2.45629 7.73428 2.22217 8.29951 2.22217 8.88888V31.1111C2.22217 31.7005 2.45629 32.2657 2.87304 32.6824C3.28979 33.0992 3.85502 33.3333 4.44439 33.3333H21.1111L21.7444 32.5555L22.7777 31.2889L22.6777 31.1111H4.44439Z" fill="black" />
                                                <path d="M33.3334 12.2222C36.4016 12.2222 38.8889 9.73492 38.8889 6.66667C38.8889 3.59842 36.4016 1.11111 33.3334 1.11111C30.2651 1.11111 27.7778 3.59842 27.7778 6.66667C27.7778 9.73492 30.2651 12.2222 33.3334 12.2222Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3840_15550">
                                                    <rect width="40" height="40" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>

                                    <span className='term-menu-item'>License</span>
                                </div>
                                <div className='term-menu'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M4 20C3.99922 17.5796 4.54757 15.1906 5.60378 13.0128C6.65998 10.835 8.19651 8.92522 10.0977 7.42724C11.9988 5.92927 14.2151 4.88215 16.5795 4.36471C18.9439 3.84727 21.3949 3.87301 23.748 4.43999C23.9226 4.48143 24.0828 4.56907 24.2118 4.69373C24.3408 4.81838 24.434 4.97545 24.4814 5.14848C24.5289 5.32151 24.5289 5.50412 24.4815 5.67716C24.4341 5.8502 24.341 6.0073 24.212 6.13199C23.6955 6.63457 23.3243 7.26729 23.1376 7.96333C22.9509 8.65938 22.9556 9.39293 23.1513 10.0865C23.3469 10.7801 23.7262 11.408 24.249 11.9039C24.7719 12.3998 25.419 12.7453 26.122 12.904C26.371 12.9598 26.5937 13.0988 26.7532 13.298C26.9128 13.4972 26.9998 13.7448 27 14C26.9998 14.8133 27.2475 15.6074 27.7102 16.2764C28.1728 16.9453 28.8284 17.4573 29.5895 17.7441C30.3506 18.0309 31.1811 18.0789 31.9702 17.8816C32.7592 17.6844 33.4694 17.2512 34.006 16.64C34.1299 16.4985 34.2913 16.3949 34.4715 16.341C34.6516 16.287 34.8434 16.285 35.0246 16.3351C35.2059 16.3853 35.3694 16.4855 35.4963 16.6243C35.6232 16.7632 35.7083 16.9349 35.742 17.12C36.1393 19.3057 36.0771 21.5501 35.5594 23.7104C35.0417 25.8708 34.0798 27.8996 32.735 29.6678C31.3901 31.4359 29.6918 32.9047 27.7481 33.9804C25.8045 35.0562 23.6582 35.7155 21.4458 35.9162C19.2334 36.1169 17.0034 35.8548 14.8979 35.1464C12.7924 34.438 10.8574 33.2989 9.21631 31.8016C7.57519 30.3044 6.26383 28.4818 5.36575 26.45C4.46767 24.4181 4.00255 22.2215 4 20ZM14 16C14 15.4696 13.7893 14.9608 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9608 10 15.4696 10 16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16ZM20 22C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20C22 19.4696 21.7893 18.9608 21.4142 18.5858C21.0391 18.2107 20.5304 18 20 18C19.4696 18 18.9609 18.2107 18.5858 18.5858C18.2107 18.9608 18 19.4696 18 20C18 20.5304 18.2107 21.0391 18.5858 21.4142C18.9609 21.7893 19.4696 22 20 22ZM26 28C26 27.4696 25.7893 26.9608 25.4142 26.5858C25.0391 26.2107 24.5304 26 24 26C23.4696 26 22.9609 26.2107 22.5858 26.5858C22.2107 26.9608 22 27.4696 22 28C22 28.5304 22.2107 29.0391 22.5858 29.4142C22.9609 29.7893 23.4696 30 24 30C24.5304 30 25.0391 29.7893 25.4142 29.4142C25.7893 29.0391 26 28.5304 26 28ZM14 28C14.5304 28 15.0391 27.7893 15.4142 27.4142C15.7893 27.0391 16 26.5304 16 26C16 25.4696 15.7893 24.9608 15.4142 24.5858C15.0391 24.2107 14.5304 24 14 24C13.4696 24 12.9609 24.2107 12.5858 24.5858C12.2107 24.9608 12 25.4696 12 26C12 26.5304 12.2107 27.0391 12.5858 27.4142C12.9609 27.7893 13.4696 28 14 28Z" fill="black" />
                                        </svg>
                                    </span>

                                    <span className='term-menu-item'>Cookies</span>
                                </div>    
                                <div className='term-menu'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M19.9999 3.33334C10.7949 3.33334 3.33325 10.795 3.33325 20C3.33325 29.205 10.7949 36.6667 19.9999 36.6667C29.2049 36.6667 36.6666 29.205 36.6666 20C36.6666 10.795 29.2049 3.33334 19.9999 3.33334ZM19.9999 33.3333L23.3333 30L24.9999 28.3333V25H21.6666V23.3333L19.9999 21.6667H14.9999V26.6667L18.3333 30V33.2183C11.7666 32.3933 6.66659 26.7867 6.66659 20L8.33325 21.6667H11.6666V18.3333H14.9999L19.9999 13.3333V10H16.6666L14.9999 8.33334V7.64834C18.2051 6.34131 21.7947 6.34131 24.9999 7.64834V10L23.3333 11.6667V15L24.9999 16.6667L30.2166 11.45C31.4856 12.9682 32.4001 14.7504 32.8933 16.6667H29.9999L26.6666 20V23.3333L28.3333 25H31.6666L32.1433 25.4767C30.0483 30.1017 25.3983 33.3333 19.9999 33.3333Z" fill="black" />
                                        </svg>
                                    </span>

                                    <span className='term-menu-item'>General Terms</span>
                                </div>    
                                <div className='term-menu'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M20.0001 0C14.0847 0 9.23086 4.85385 9.23086 10.7692V12.3077H7.6924C6.00009 12.3077 4.61548 13.6923 4.61548 15.3846V33.8462C4.61548 35.5385 6.00009 36.9231 7.6924 36.9231H32.3078C34.0001 36.9231 35.3847 35.5385 35.3847 33.8462V15.3846C35.3847 13.6923 34.0001 12.3077 32.3078 12.3077H30.7693V10.7692C30.7693 4.85385 25.9155 0 20.0001 0ZM20.0001 3.07692C24.2386 3.07692 27.6924 6.53077 27.6924 10.7692V12.3077H12.3078V10.7692C12.3078 6.53077 15.7616 3.07692 20.0001 3.07692ZM20.0001 16.9231C24.3078 16.9231 27.6924 20.3077 27.6924 24.6154C27.6924 28.9231 24.3078 32.3077 20.0001 32.3077C15.6924 32.3077 12.3078 28.9231 12.3078 24.6154C12.3078 20.3077 15.6924 16.9231 20.0001 16.9231ZM20.0001 20C17.3847 20 15.3847 22 15.3847 24.6154C15.3847 27.2308 17.3847 29.2308 20.0001 29.2308C22.6155 29.2308 24.6155 27.2308 24.6155 24.6154C24.6155 24.1538 24.4709 23.6831 24.4709 23.2215C24.0093 23.9908 23.2309 24.6154 22.3078 24.6154C21.077 24.6154 20.0001 23.5385 20.0001 22.3077C20.0001 21.3846 20.6247 20.6062 21.3939 20.1446C20.9324 20.1446 20.4616 20 20.0001 20Z" fill="black" />
                                        </svg>
                                    </span>

                                    <span className='term-menu-item'>Privacy</span>
                                </div>    
                                <div className='term-menu'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M35.4799 5.52002C37.094 7.13982 38.0003 9.33331 38.0003 11.62C38.0003 13.9067 37.094 16.1002 35.4799 17.72L32.4199 20.76C30.1799 23 27.0199 23.7 24.1399 22.94L29.3799 17.72L30.8999 16.18L32.4199 14.66C34.0999 12.98 34.0999 10.26 32.4199 8.58002C32.0234 8.17607 31.5503 7.8552 31.0283 7.63616C30.5063 7.41713 29.946 7.30431 29.3799 7.30431C28.8138 7.30431 28.2535 7.41713 27.7315 7.63616C27.2095 7.8552 26.7364 8.17607 26.3399 8.58002L24.7999 10.1L18.0399 16.86C17.2999 13.98 17.9999 10.82 20.2399 8.58002L23.2799 5.52002C24.8997 3.90594 27.0932 2.99963 29.3799 2.99963C31.6666 2.99963 33.8601 3.90594 35.4799 5.52002ZM17.1799 26.86L27.8599 16.18C28.6999 15.34 28.6999 13.98 27.8599 13.14C26.9799 12.28 25.5999 12.36 24.7999 13.14L14.1399 23.82C13.2999 24.66 13.2999 26.02 14.1399 26.86C15.0199 27.72 16.3999 27.64 17.1799 26.86ZM15.6599 31.44L23.9399 23.14C24.6999 26.02 23.9999 29.18 21.7599 31.42L18.7199 34.48C17.1001 36.0941 14.9066 37.0004 12.6199 37.0004C10.3332 37.0004 8.1397 36.0941 6.5199 34.48C4.90581 32.8602 3.99951 30.6667 3.99951 28.38C3.99951 26.0933 4.90581 23.8998 6.5199 22.28L9.5799 19.24C11.8199 17 14.9799 16.3 17.8599 17.04L9.5799 25.34C7.8799 27.02 7.8799 29.74 9.5799 31.44C11.2599 33.12 13.9799 33.12 15.6599 31.44Z" fill="black" />
                                        </svg>
                                    </span>

                                    <span className='term-menu-item'>Links</span>
                                </div>
                                <div className='term-menu'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M10.8334 18.3333H6.66675V11.25C6.66675 10.0833 7.58341 9.16667 8.75008 9.16667C9.91675 9.16667 10.8334 10.0833 10.8334 11.25V18.3333ZM16.6667 18.3333H12.5001V6.25C12.5001 5.08333 13.4167 4.16667 14.5834 4.16667C15.7501 4.16667 16.6667 5.08333 16.6667 6.25V18.3333ZM22.5001 18.3333H18.3334V4.58333C18.3334 3.41667 19.2501 2.5 20.4167 2.5C21.5834 2.5 22.5001 3.41667 22.5001 4.58333V18.3333ZM28.3334 18.3333H24.1667V7.08333C24.1667 5.91667 25.0834 5 26.2501 5C27.4167 5 28.3334 5.91667 28.3334 7.08333V18.3333ZM26.7501 35.8333L22.5834 31.6667L30.9167 23.3333C32.0834 22.1667 33.9167 22.1667 35.0001 23.3333C36.1667 24.5 36.1667 26.3333 35.0001 27.4167L26.7501 35.8333Z" fill="black" />
                                            <path d="M24.1667 17.5C24.1667 18 23.8334 18.3333 23.3334 18.3333C22.8334 18.3333 22.5001 18 22.5001 17.5H18.3334C18.3334 18 18.0001 18.3333 17.5001 18.3333C17.0001 18.3333 16.6667 18 16.6667 17.5H12.5001C12.5001 18 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8334 18 10.8334 17.5H6.66675V30.8333C6.66675 34.5 9.66675 37.5 13.3334 37.5H22.6667C25.7501 37.5 28.3334 35 28.3334 31.8333V17.5H24.1667Z" fill="black" />
                                            <path d="M12.844 24.1425L14.9057 22.0808L23.7432 30.9183L21.6815 32.98L12.844 24.1425Z" fill="white" />
                                            <path d="M21.6607 22.0867L23.7232 24.1483L14.8857 32.9858L12.8232 30.9242L21.6607 22.0867Z" fill="white" />
                                        </svg>
                                    </span>

                                    <span className='term-menu-item'>Disclamer</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-xl-8 col-md-8 col-sm-12  term-content p-0 '>
                            <div className='pb-5'>
                            <h1 className='content-header content-hide'>
                                Welcome to TagAlong!
                            </h1>
                            <div className='term-menu'>
                                    <span className='content-show'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M19.9999 3.33334C10.7949 3.33334 3.33325 10.795 3.33325 20C3.33325 29.205 10.7949 36.6667 19.9999 36.6667C29.2049 36.6667 36.6666 29.205 36.6666 20C36.6666 10.795 29.2049 3.33334 19.9999 3.33334ZM19.9999 33.3333L23.3333 30L24.9999 28.3333V25H21.6666V23.3333L19.9999 21.6667H14.9999V26.6667L18.3333 30V33.2183C11.7666 32.3933 6.66659 26.7867 6.66659 20L8.33325 21.6667H11.6666V18.3333H14.9999L19.9999 13.3333V10H16.6666L14.9999 8.33334V7.64834C18.2051 6.34131 21.7947 6.34131 24.9999 7.64834V10L23.3333 11.6667V15L24.9999 16.6667L30.2166 11.45C31.4856 12.9682 32.4001 14.7504 32.8933 16.6667H29.9999L26.6666 20V23.3333L28.3333 25H31.6666L32.1433 25.4767C30.0483 30.1017 25.3983 33.3333 19.9999 33.3333Z" fill="black" />
                                        </svg>
                                    </span>

                                    <span className=' content-header content-show '>General Terms</span>
                                </div> 

                            
                            <span className='term-content-p p-text'>
                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo. Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
</div>
<div>
                            <h1 className='content-header content-hide'>
                                License
                            </h1>

                            {/* mobile contents */}
                            <div className='term-menu'>
                                    <span className='content-show'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <g clip-path="url(#clip0_3840_15550)">
                                                <path d="M7.77783 13.3333H26.6667V15.1111H7.77783V13.3333Z" fill="black" />
                                                <path d="M7.77783 17.7778H20.0001V19.5555H7.77783V17.7778Z" fill="black" />
                                                <path d="M7.77783 25.5555H18.8889V27.3333H7.77783V25.5555Z" fill="black" />
                                                <path d="M30.5112 19.1444C29.0894 19.1332 27.6972 19.5511 26.5166 20.3435C25.336 21.136 24.4219 22.2662 23.8939 23.5864C23.3658 24.9066 23.2482 26.3554 23.5566 27.7435C23.865 29.1315 24.5849 30.3943 25.6223 31.3667L23.4668 34L24.4668 38.0111L28.5334 33.0556C29.8207 33.4362 31.1906 33.4362 32.4779 33.0556L36.5445 38.0111L37.5445 34L35.389 31.3667C36.4264 30.3943 37.1463 29.1315 37.4547 27.7435C37.7631 26.3554 37.6455 24.9066 37.1174 23.5864C36.5894 22.2662 35.6753 21.136 34.4947 20.3435C33.3141 19.5511 31.922 19.1332 30.5001 19.1444H30.5112ZM30.5112 31.0111C29.567 30.998 28.6478 30.706 27.8691 30.1718C27.0903 29.6377 26.4869 28.8853 26.1347 28.0091C25.7824 27.133 25.697 26.1723 25.8893 25.2478C26.0815 24.3232 26.5428 23.4762 27.2151 22.8131C27.8874 22.15 28.7408 21.7005 29.6679 21.5211C30.5949 21.3416 31.5544 21.4403 32.4256 21.8046C33.2967 22.1689 34.0408 22.7827 34.5641 23.5687C35.0874 24.3547 35.3667 25.2779 35.3668 26.2222C35.355 27.5002 34.8376 28.7216 33.9276 29.6191C33.0177 30.5165 31.7893 31.017 30.5112 31.0111Z" fill="black" />
                                                <path d="M35.5557 14.6889V18.4C36.3998 18.9464 37.1502 19.6255 37.7779 20.4111V13.7444C37.0873 14.1662 36.3386 14.4844 35.5557 14.6889Z" fill="black" />
                                                <path d="M4.44439 31.1111V8.88888H25.3111C25.1075 8.16558 25.0029 7.41805 24.9999 6.66666H4.44439C3.85502 6.66666 3.28979 6.90078 2.87304 7.31753C2.45629 7.73428 2.22217 8.29951 2.22217 8.88888V31.1111C2.22217 31.7005 2.45629 32.2657 2.87304 32.6824C3.28979 33.0992 3.85502 33.3333 4.44439 33.3333H21.1111L21.7444 32.5555L22.7777 31.2889L22.6777 31.1111H4.44439Z" fill="black" />
                                                <path d="M33.3334 12.2222C36.4016 12.2222 38.8889 9.73492 38.8889 6.66667C38.8889 3.59842 36.4016 1.11111 33.3334 1.11111C30.2651 1.11111 27.7778 3.59842 27.7778 6.66667C27.7778 9.73492 30.2651 12.2222 33.3334 12.2222Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3840_15550">
                                                    <rect width="40" height="40" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>

                                    <span className='content-header content-show'>License</span>
                                </div>
                            <span className='term-content-p '>
                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo. Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span> <br/>
                            <div className=' pt-4 '>
                                <span className='term-content-p'>You Must not:</span>
                                <ul className='term-list'>
                                <li className=''>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                </ul>
                                </div>
                                <div className='pb-4'>
                                    <span className='term-content-p'>
                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo. Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.

                                    </span>
                                    <div className=' pt-4 '>
                                <ul className='term-list'>
                                <li className=''>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                </ul>
                                </div>
                                <span className='term-content-p'>
                scipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.

                                    </span>
                                </div>
                                <div className='pb-5'>
                            <h1 className='content-header content-hide'>
                                Cookies
                            </h1>
                            <div className='term-menu'>
                                    <span className='content-show'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M4 20C3.99922 17.5796 4.54757 15.1906 5.60378 13.0128C6.65998 10.835 8.19651 8.92522 10.0977 7.42724C11.9988 5.92927 14.2151 4.88215 16.5795 4.36471C18.9439 3.84727 21.3949 3.87301 23.748 4.43999C23.9226 4.48143 24.0828 4.56907 24.2118 4.69373C24.3408 4.81838 24.434 4.97545 24.4814 5.14848C24.5289 5.32151 24.5289 5.50412 24.4815 5.67716C24.4341 5.8502 24.341 6.0073 24.212 6.13199C23.6955 6.63457 23.3243 7.26729 23.1376 7.96333C22.9509 8.65938 22.9556 9.39293 23.1513 10.0865C23.3469 10.7801 23.7262 11.408 24.249 11.9039C24.7719 12.3998 25.419 12.7453 26.122 12.904C26.371 12.9598 26.5937 13.0988 26.7532 13.298C26.9128 13.4972 26.9998 13.7448 27 14C26.9998 14.8133 27.2475 15.6074 27.7102 16.2764C28.1728 16.9453 28.8284 17.4573 29.5895 17.7441C30.3506 18.0309 31.1811 18.0789 31.9702 17.8816C32.7592 17.6844 33.4694 17.2512 34.006 16.64C34.1299 16.4985 34.2913 16.3949 34.4715 16.341C34.6516 16.287 34.8434 16.285 35.0246 16.3351C35.2059 16.3853 35.3694 16.4855 35.4963 16.6243C35.6232 16.7632 35.7083 16.9349 35.742 17.12C36.1393 19.3057 36.0771 21.5501 35.5594 23.7104C35.0417 25.8708 34.0798 27.8996 32.735 29.6678C31.3901 31.4359 29.6918 32.9047 27.7481 33.9804C25.8045 35.0562 23.6582 35.7155 21.4458 35.9162C19.2334 36.1169 17.0034 35.8548 14.8979 35.1464C12.7924 34.438 10.8574 33.2989 9.21631 31.8016C7.57519 30.3044 6.26383 28.4818 5.36575 26.45C4.46767 24.4181 4.00255 22.2215 4 20ZM14 16C14 15.4696 13.7893 14.9608 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9608 10 15.4696 10 16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16ZM20 22C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20C22 19.4696 21.7893 18.9608 21.4142 18.5858C21.0391 18.2107 20.5304 18 20 18C19.4696 18 18.9609 18.2107 18.5858 18.5858C18.2107 18.9608 18 19.4696 18 20C18 20.5304 18.2107 21.0391 18.5858 21.4142C18.9609 21.7893 19.4696 22 20 22ZM26 28C26 27.4696 25.7893 26.9608 25.4142 26.5858C25.0391 26.2107 24.5304 26 24 26C23.4696 26 22.9609 26.2107 22.5858 26.5858C22.2107 26.9608 22 27.4696 22 28C22 28.5304 22.2107 29.0391 22.5858 29.4142C22.9609 29.7893 23.4696 30 24 30C24.5304 30 25.0391 29.7893 25.4142 29.4142C25.7893 29.0391 26 28.5304 26 28ZM14 28C14.5304 28 15.0391 27.7893 15.4142 27.4142C15.7893 27.0391 16 26.5304 16 26C16 25.4696 15.7893 24.9608 15.4142 24.5858C15.0391 24.2107 14.5304 24 14 24C13.4696 24 12.9609 24.2107 12.5858 24.5858C12.2107 24.9608 12 25.4696 12 26C12 26.5304 12.2107 27.0391 12.5858 27.4142C12.9609 27.7893 13.4696 28 14 28Z" fill="black" />
                                        </svg>
                                    </span>

                                    <span className=' content-header content-show'>Cookies</span>
                                </div>  
                            <span className='term-content-p '>
            nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
</div>
<div className='pb-3'>
                            <h1 className='content-header content-hide'>
                                Privacy
                            </h1>
                            <div className='term-menu'>
                                    <span className='content-show'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M20.0001 0C14.0847 0 9.23086 4.85385 9.23086 10.7692V12.3077H7.6924C6.00009 12.3077 4.61548 13.6923 4.61548 15.3846V33.8462C4.61548 35.5385 6.00009 36.9231 7.6924 36.9231H32.3078C34.0001 36.9231 35.3847 35.5385 35.3847 33.8462V15.3846C35.3847 13.6923 34.0001 12.3077 32.3078 12.3077H30.7693V10.7692C30.7693 4.85385 25.9155 0 20.0001 0ZM20.0001 3.07692C24.2386 3.07692 27.6924 6.53077 27.6924 10.7692V12.3077H12.3078V10.7692C12.3078 6.53077 15.7616 3.07692 20.0001 3.07692ZM20.0001 16.9231C24.3078 16.9231 27.6924 20.3077 27.6924 24.6154C27.6924 28.9231 24.3078 32.3077 20.0001 32.3077C15.6924 32.3077 12.3078 28.9231 12.3078 24.6154C12.3078 20.3077 15.6924 16.9231 20.0001 16.9231ZM20.0001 20C17.3847 20 15.3847 22 15.3847 24.6154C15.3847 27.2308 17.3847 29.2308 20.0001 29.2308C22.6155 29.2308 24.6155 27.2308 24.6155 24.6154C24.6155 24.1538 24.4709 23.6831 24.4709 23.2215C24.0093 23.9908 23.2309 24.6154 22.3078 24.6154C21.077 24.6154 20.0001 23.5385 20.0001 22.3077C20.0001 21.3846 20.6247 20.6062 21.3939 20.1446C20.9324 20.1446 20.4616 20 20.0001 20Z" fill="black" />
                                        </svg>
                                    </span>

                                    <span className='content-header content-show'>Privacy</span>
                                </div> 
                            <span className='term-content-p '>
            neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
                            
</div>
<span className='term-content-p pl-5'>
            denisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
                            <br/>
                            <span className='term-content-p pl-5'>
            pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
                            <br/>
                            
</div>
<div className='pt-3'>
<span className='term-content-p '>
            pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
</div>
<div className='pb-5 pt-4'>
                            <h1 className='content-header content-hide'>
                                Links
                            </h1>
                            <div className='term-menu'>
                                    <span className='content-show'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M35.4799 5.52002C37.094 7.13982 38.0003 9.33331 38.0003 11.62C38.0003 13.9067 37.094 16.1002 35.4799 17.72L32.4199 20.76C30.1799 23 27.0199 23.7 24.1399 22.94L29.3799 17.72L30.8999 16.18L32.4199 14.66C34.0999 12.98 34.0999 10.26 32.4199 8.58002C32.0234 8.17607 31.5503 7.8552 31.0283 7.63616C30.5063 7.41713 29.946 7.30431 29.3799 7.30431C28.8138 7.30431 28.2535 7.41713 27.7315 7.63616C27.2095 7.8552 26.7364 8.17607 26.3399 8.58002L24.7999 10.1L18.0399 16.86C17.2999 13.98 17.9999 10.82 20.2399 8.58002L23.2799 5.52002C24.8997 3.90594 27.0932 2.99963 29.3799 2.99963C31.6666 2.99963 33.8601 3.90594 35.4799 5.52002ZM17.1799 26.86L27.8599 16.18C28.6999 15.34 28.6999 13.98 27.8599 13.14C26.9799 12.28 25.5999 12.36 24.7999 13.14L14.1399 23.82C13.2999 24.66 13.2999 26.02 14.1399 26.86C15.0199 27.72 16.3999 27.64 17.1799 26.86ZM15.6599 31.44L23.9399 23.14C24.6999 26.02 23.9999 29.18 21.7599 31.42L18.7199 34.48C17.1001 36.0941 14.9066 37.0004 12.6199 37.0004C10.3332 37.0004 8.1397 36.0941 6.5199 34.48C4.90581 32.8602 3.99951 30.6667 3.99951 28.38C3.99951 26.0933 4.90581 23.8998 6.5199 22.28L9.5799 19.24C11.8199 17 14.9799 16.3 17.8599 17.04L9.5799 25.34C7.8799 27.02 7.8799 29.74 9.5799 31.44C11.2599 33.12 13.9799 33.12 15.6599 31.44Z" fill="black" />
                                        </svg>
                                    </span>

                                    <span className='content-header content-show'>Links</span>
                                </div>
                            <span className='term-content-p '>
            nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
                                     <div className=' pt-4 '>
                                <ol className=' new'>
                                <li className=''>
                                 neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.

                                    </li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=''>
                                 neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.

                                    </li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=''>
                                 neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.

                                    </li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                <li className=' '>eque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vita</li>
                                </ol>
                                </div>
                                <span className='term-content-p '>
            Nam neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
</div>
<div className='pb-5 pt-4'>
                            <h1 className='content-header content-hide'>
                                Disclamer
                            </h1>
                            <div className='term-menu'>
                                    <span className='content-show'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path d="M10.8334 18.3333H6.66675V11.25C6.66675 10.0833 7.58341 9.16667 8.75008 9.16667C9.91675 9.16667 10.8334 10.0833 10.8334 11.25V18.3333ZM16.6667 18.3333H12.5001V6.25C12.5001 5.08333 13.4167 4.16667 14.5834 4.16667C15.7501 4.16667 16.6667 5.08333 16.6667 6.25V18.3333ZM22.5001 18.3333H18.3334V4.58333C18.3334 3.41667 19.2501 2.5 20.4167 2.5C21.5834 2.5 22.5001 3.41667 22.5001 4.58333V18.3333ZM28.3334 18.3333H24.1667V7.08333C24.1667 5.91667 25.0834 5 26.2501 5C27.4167 5 28.3334 5.91667 28.3334 7.08333V18.3333ZM26.7501 35.8333L22.5834 31.6667L30.9167 23.3333C32.0834 22.1667 33.9167 22.1667 35.0001 23.3333C36.1667 24.5 36.1667 26.3333 35.0001 27.4167L26.7501 35.8333Z" fill="black" />
                                            <path d="M24.1667 17.5C24.1667 18 23.8334 18.3333 23.3334 18.3333C22.8334 18.3333 22.5001 18 22.5001 17.5H18.3334C18.3334 18 18.0001 18.3333 17.5001 18.3333C17.0001 18.3333 16.6667 18 16.6667 17.5H12.5001C12.5001 18 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8334 18 10.8334 17.5H6.66675V30.8333C6.66675 34.5 9.66675 37.5 13.3334 37.5H22.6667C25.7501 37.5 28.3334 35 28.3334 31.8333V17.5H24.1667Z" fill="black" />
                                            <path d="M12.844 24.1425L14.9057 22.0808L23.7432 30.9183L21.6815 32.98L12.844 24.1425Z" fill="white" />
                                            <path d="M21.6607 22.0867L23.7232 24.1483L14.8857 32.9858L12.8232 30.9242L21.6607 22.0867Z" fill="white" />
                                        </svg>
                                    </span>

                                    <span className='content-header content-show'>Disclamer</span>
                                </div>
                            <span className='term-content-p '>
            nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
            nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, <br/>tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            
                            </span> 
                            <span className='term-content-p '>
            nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
                            </div>
                            <span className='term-content-p '>
            nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Terms