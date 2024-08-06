import React from 'react'
import Footer from '../../Footer'
import Nav from '../../Nav'
import back from "../../assets/img/tag-driver11.jpg"
import phone from "../../assets/img/phone.png"
import './become.css'
import signup from "../../assets/img/signup-add.png"

const BecomeADriver = () => {
  return (
    <>
    <Nav/>
    <div className="page-hero become-page-hero" style={{ backgroundImage: `url(${back})` }}>
                <div className="container">
                  <div className='row'>
                    <div className=" align-items-center   become-hero-gap ">
                        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 ">
                            <h1 className="header-text text-left pt-3 p-top"><br/><br/>
                            Become a driver with <br/> TagAlong</h1> <br/>
            <p className="become-desc col-md-8 col-xl-10 col-lg-8 col-sm-12 p-0">
            Drive with TagAlong, set your schedule and destination and earn extra money!


            </p>

                        </div>
                        <div className='col-md-12 col-sm-12 col-lg-6 col-xl-6 p-0  '>
<div className='become-form'>
  <h2 className='become-form-head '> Drive TagAlong</h2>

  <form className='pt-3'>
    <div className='become-form-control col-12 p-0'>
      <span className='become-form-label'>Email</span>
      <input className='become-form-input' placeholder='Enter email address'/>
    </div>
    <div className='become-form-control'>
    <span className='become-form-label'>Phone Number</span>

    <div className='become-form-group col-12 p-0 '>
      
      <div className='col-3 p-0'>
        
      <select className='become-form-input become-form-select'>
          <option>
            +234
            </option>
        </select>
      </div>
      <div className='col-9'>
      <input className=' become-form-input become-form-group-phone' placeholder='Mobile Number'/>
   
      </div>
      
      </div>
       </div>
       <div className='become-form-control col-12 p-0'>
      <span className='become-form-label'>
        Cities
      </span>
      <select className='become-form-input become-form-select '>
          <option>Nyanya</option>
        </select>
    </div>
    <div className='become-form-control col-12 p-0'> <br/>
    <button className='col-12 btn btn-primary bgblue p-3'>
<span className='become-form-btn'>Sign Up now</span>
    </button>
    </div>

  </form>
  <div className='become-form-control col-12 p-0 become-form-btn-text '>
    <p >By signing up, you agree to our <span className='blue'>Terms and Conditions</span>  and <span className='blue'>Privacy policy</span> </p>
    </div>

</div>
                        </div>

                    </div>
                </div>
            </div>
            </div>


            <div className='layout_padding-top '>
              <div className='container'>
                <div className='row'>
              <div className='col-lg-8 col-xl-8 col-md-8 col-sm-12 '>
                <h1 className='content-header become-content-header'> Why drive with TagAlong</h1>
                <p className='p-text'>

                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
              </div>
              </div>
              </div>
            </div>
              <div className='container'>
              <div className='row'>

              <div className='col-lg-8 col-xl-8 col-md-8 col-sm-12 '>
                <h1 className='content-header layout_padding-top'> Get Started today</h1>
              </div>
              </div>
              
              <div className='row align-item-center'>
              <div className=' become-content col-lg-4 col-xl-4 col-md-4 col-sm-12 pl-2'>
                
                <span>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 60 60" fill="none">
<path d="M41.2976 41.2525C41.7351 40.9125 42.1326 40.515 42.9251 39.7225L52.8176 29.8275C53.0576 29.59 52.9476 29.1775 52.6301 29.065C51.0821 28.5255 49.6768 27.6416 48.5201 26.48C47.3585 25.3233 46.4746 23.918 45.9351 22.37C45.8226 22.0525 45.4101 21.9425 45.1726 22.1825L35.2751 32.075C34.4826 32.8675 34.0851 33.265 33.7451 33.7025C33.3426 34.22 32.9951 34.7775 32.7151 35.3675C32.4776 35.8675 32.3001 36.4025 31.9451 37.4675L31.4851 38.8425L30.7551 41.03L30.0726 43.08C29.9875 43.3369 29.9755 43.6124 30.0379 43.8758C30.1004 44.1392 30.2348 44.38 30.4262 44.5714C30.6175 44.7628 30.8584 44.8972 31.1217 44.9596C31.3851 45.0221 31.6606 45.0101 31.9176 44.925L33.9676 44.2425L36.1551 43.5125L37.5301 43.0525C38.5951 42.6975 39.1301 42.5225 39.6301 42.2825C40.2201 42 40.7826 41.6575 41.2976 41.2525ZM55.9151 26.73C56.4313 26.2312 56.8431 25.6346 57.1264 24.9749C57.4097 24.3153 57.5588 23.6059 57.565 22.888C57.5713 22.1702 57.4345 21.4583 57.1627 20.7938C56.8909 20.1294 56.4896 19.5257 55.982 19.018C55.4745 18.5103 54.871 18.1088 54.2066 17.8368C53.5423 17.5648 52.8304 17.4278 52.1125 17.4338C51.3947 17.4398 50.6852 17.5887 50.0255 17.8717C49.3658 18.1548 48.7691 18.5664 48.2701 19.0825L47.9526 19.4025C47.8012 19.5517 47.6885 19.7355 47.624 19.938C47.5595 20.1406 47.5453 20.3557 47.5826 20.565C47.6326 20.8325 47.7201 21.2275 47.8826 21.695C48.2076 22.6325 48.8226 23.8625 49.9801 25.02C50.915 25.9623 52.052 26.6796 53.3051 27.1175C53.7751 27.28 54.1676 27.3675 54.4351 27.4175C54.6443 27.4545 54.8594 27.4402 55.0619 27.3757C55.2644 27.3113 55.4482 27.1986 55.5976 27.0475L55.9151 26.73Z" fill="#0032BB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.43 7.93C7.5 10.8575 7.5 15.5725 7.5 25V35C7.5 44.4275 7.5 49.1425 10.43 52.07C13.3575 55 18.0725 55 27.5 55H32.5C41.9275 55 46.6425 55 49.57 52.07C52.4525 49.19 52.5 44.58 52.5 35.45L45.455 42.495C44.78 43.17 44.2275 43.7225 43.605 44.21C42.8736 44.7801 42.0823 45.2688 41.245 45.6675C40.4774 46.0117 39.6892 46.3081 38.885 46.555L33.105 48.4825C32.1875 48.7885 31.2028 48.8329 30.2615 48.6107C29.3201 48.3886 28.4592 47.9087 27.7753 47.2247C27.0913 46.5408 26.6114 45.6799 26.3893 44.7385C26.1671 43.7972 26.2115 42.8125 26.5175 41.895L27.2025 39.845L28.39 36.28L28.4425 36.115C28.745 35.21 28.9925 34.47 29.3325 33.755C29.7325 32.9175 30.22 32.1275 30.79 31.3975C31.2775 30.7725 31.83 30.2225 32.505 29.5475L42.52 19.53L45.3 16.75L45.6175 16.4325C46.4671 15.5805 47.4768 14.9049 48.5884 14.4445C49.7001 13.9841 50.8918 13.7481 52.095 13.75C51.7175 11.175 50.985 9.3425 49.57 7.93C46.6425 5 41.9275 5 32.5 5H27.5C18.0725 5 13.3575 5 10.43 7.93ZM18.125 22.5C18.125 22.0027 18.3225 21.5258 18.6742 21.1742C19.0258 20.8225 19.5027 20.625 20 20.625H36.25C36.7473 20.625 37.2242 20.8225 37.5758 21.1742C37.9275 21.5258 38.125 22.0027 38.125 22.5C38.125 22.9973 37.9275 23.4742 37.5758 23.8258C37.2242 24.1775 36.7473 24.375 36.25 24.375H20C19.5027 24.375 19.0258 24.1775 18.6742 23.8258C18.3225 23.4742 18.125 22.9973 18.125 22.5ZM18.125 32.5C18.125 32.0027 18.3225 31.5258 18.6742 31.1742C19.0258 30.8225 19.5027 30.625 20 30.625H26.25C26.7473 30.625 27.2242 30.8225 27.5758 31.1742C27.9275 31.5258 28.125 32.0027 28.125 32.5C28.125 32.9973 27.9275 33.4742 27.5758 33.8258C27.2242 34.1775 26.7473 34.375 26.25 34.375H20C19.5027 34.375 19.0258 34.1775 18.6742 33.8258C18.3225 33.4742 18.125 32.9973 18.125 32.5ZM18.125 42.5C18.125 42.0027 18.3225 41.5258 18.6742 41.1742C19.0258 40.8225 19.5027 40.625 20 40.625H23.75C24.2473 40.625 24.7242 40.8225 25.0758 41.1742C25.4275 41.5258 25.625 42.0027 25.625 42.5C25.625 42.9973 25.4275 43.4742 25.0758 43.8258C24.7242 44.1775 24.2473 44.375 23.75 44.375H20C19.5027 44.375 19.0258 44.1775 18.6742 43.8258C18.3225 43.4742 18.125 42.9973 18.125 42.5Z" fill="#0032BB"/>
</svg>
</span>
<div className=' col-12 pl-2'>
  <h1 className='lead-text become-content-lead dark pt-4'> Sign up</h1>
<p className='p-text'>
Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>
</div>
                  
                  </div>
                  <div className=' become-content col-lg-4 col-xl-4 col-md-4 col-sm-12 pl-2'>
                
                <span>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 60 60" fill="none">
<mask id="mask0_3913_771"  maskUnits="userSpaceOnUse" x="6" y="3" width="48" height="54">
<path d="M8.75 7.5C8.75 6.83696 9.01339 6.20107 9.48223 5.73223C9.95107 5.26339 10.587 5 11.25 5H48.75C49.413 5 50.0489 5.26339 50.5178 5.73223C50.9866 6.20107 51.25 6.83696 51.25 7.5V52.5C51.25 53.163 50.9866 53.7989 50.5178 54.2678C50.0489 54.7366 49.413 55 48.75 55H11.25C10.587 55 9.95107 54.7366 9.48223 54.2678C9.01339 53.7989 8.75 53.163 8.75 52.5V7.5Z" fill="#555555" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 36.25H25M20 43.75H32.5M10 6.25C10 6.25 14.7063 22.5 30 22.5C45.2937 22.5 50 6.25 50 6.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 27.5C32.7614 27.5 35 25.2614 35 22.5C35 19.7386 32.7614 17.5 30 17.5C27.2386 17.5 25 19.7386 25 22.5C25 25.2614 27.2386 27.5 30 27.5Z" fill="#555555" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 5H11.25C10.587 5 9.95107 5.26339 9.48223 5.73223C9.01339 6.20107 8.75 6.83696 8.75 7.5V15M41.25 5H48.75C49.413 5 50.0489 5.26339 50.5178 5.73223C50.9866 6.20107 51.25 6.83696 51.25 7.5V15" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</mask>
<g mask="url(#mask0_3913_771)">
<path d="M0 0H60V60H0V0Z" fill="#0032BB"/>
</g>
</svg>        
</span>
<div className=' col-12 pl-2'>
  <h1 className='lead-text become-content-lead dark pt-4'> Upload Documents</h1>
<p className='p-text'>
Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>
</div>
                  
                  </div>
                  <div className=' become-content col-lg-4 col-xl-4 col-md-4 col-sm-12 pl-2'>
                
                <span>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_3913_780)">
<path d="M29.6216 6.73635C22.6333 6.63389 12.926 6.78364 10.9275 12.1524L6.01701 23.6752C5.79891 23.4264 5.51346 23.2461 5.19512 23.1561L3.21808 22.5999C3.00071 22.5383 2.77328 22.5201 2.54887 22.5465C2.32446 22.573 2.10748 22.6435 1.91039 22.754C1.7133 22.8645 1.53998 23.0129 1.40039 23.1906C1.26079 23.3683 1.15767 23.5718 1.09693 23.7894L0.0656328 27.4519C0.00395139 27.6693 -0.0141724 27.8968 0.0123033 28.1212C0.0387791 28.3457 0.109332 28.5627 0.219911 28.7598C0.33049 28.9569 0.478915 29.1302 0.656664 29.2697C0.834412 29.4093 1.03798 29.5124 1.25568 29.5731L3.23328 30.1292C3.29971 30.1478 3.36501 30.154 3.43144 30.1641C3.05371 31.1059 2.81784 32.1417 2.81784 32.7582V46.1499C2.81784 46.8367 3.10493 47.1542 3.56316 47.3034V50.8713C3.56257 51.1879 3.62451 51.5015 3.74541 51.7941C3.86632 52.0867 4.04382 52.3526 4.26773 52.5765C4.49164 52.8003 4.75755 52.9778 5.0502 53.0986C5.34285 53.2194 5.65649 53.2813 5.9731 53.2806H12.4396C12.7561 53.2812 13.0697 53.2193 13.3623 53.0984C13.6549 52.9776 13.9207 52.8001 14.1446 52.5763C14.3684 52.3524 14.5459 52.0866 14.6668 51.794C14.7876 51.5014 14.8495 51.1878 14.8489 50.8713V47.434H45.1519V50.8713C45.1514 51.1879 45.2134 51.5015 45.3344 51.7942C45.4553 52.0868 45.6329 52.3526 45.8568 52.5765C46.0808 52.8003 46.3467 52.9778 46.6394 53.0986C46.9321 53.2194 47.2458 53.2813 47.5624 53.2806H54.0277C54.3444 53.2814 54.6582 53.2196 54.9509 53.0988C55.2436 52.978 55.5097 52.8006 55.7337 52.5767C55.9577 52.3528 56.1353 52.0869 56.2563 51.7943C56.3773 51.5016 56.4393 51.1879 56.4388 50.8713V47.3034C56.8965 47.1542 57.183 46.8361 57.183 46.1493V32.7587C57.183 32.1423 56.9471 31.1065 56.5694 30.1647C56.6358 30.1546 56.7011 30.1478 56.7676 30.1298L58.7457 29.5736C58.9634 29.5129 59.1669 29.4098 59.3446 29.2702C59.5223 29.1306 59.6706 28.9573 59.7811 28.7602C59.8917 28.5631 59.9622 28.3461 59.9886 28.1217C60.015 27.8973 59.9969 27.6698 59.9352 27.4525L58.905 23.79C58.8442 23.5723 58.7409 23.3688 58.6012 23.1911C58.4615 23.0134 58.2881 22.865 58.0909 22.7545C57.8937 22.644 57.6767 22.5735 57.4522 22.5471C57.2277 22.5206 57.0002 22.5388 56.7828 22.6005L54.8057 23.1567C54.4874 23.2467 54.2019 23.427 53.9838 23.6757L49.0733 12.1529C46.9313 6.70314 36.6099 6.83993 29.6216 6.73747V6.73635ZM49.6363 24.403C49.7522 24.7487 49.4043 24.9784 49.0401 24.9997C49.0401 24.9997 47.8495 25.1011 46.208 25.2334C44.9588 22.3145 42.0557 20.2581 38.6927 20.2581C35.0027 20.2581 31.8694 22.7362 30.8645 26.1104C30.5859 26.1144 30.2622 26.1256 30.0032 26.1256C23.646 26.1256 10.9607 24.9997 10.9607 24.9997C10.5965 24.9784 10.2486 24.7487 10.3646 24.403C15.2503 9.51051 15.3956 10.6296 29.7296 10.7861C44.0643 10.9426 44.1476 9.87867 49.6363 24.403ZM38.6927 23.0728C39.5778 23.0697 40.4498 23.287 41.2299 23.705C42.01 24.1231 42.6738 24.7288 43.1614 25.4675C40.2904 25.6803 36.9859 25.8982 33.9066 26.0249C34.3497 25.1354 35.0327 24.3875 35.8784 23.8659C36.7242 23.3442 37.699 23.0695 38.6927 23.0728ZM5.64491 27.9062C5.68826 27.9698 5.73048 28.034 5.77833 28.0965H5.59256L5.64491 27.9062ZM8.82157 31.6464C10.0792 31.6255 16.8305 33.8981 16.8305 33.8981C17.6732 34.1351 18.4157 35.7293 18.4112 36.6053C18.3988 39.5551 10.7857 38.5317 7.69569 38.5435C7.48794 38.544 7.28212 38.5035 7.09008 38.4242C6.89803 38.345 6.72352 38.2286 6.57659 38.0817C6.42966 37.9348 6.31319 37.7603 6.23387 37.5683C6.15456 37.3763 6.11396 37.1705 6.1144 36.9627V33.2276C6.1144 32.3517 7.56397 31.6672 8.82157 31.6464ZM51.1804 31.6464C52.438 31.6672 53.8876 32.3517 53.8876 33.2276V36.9627C53.888 37.1705 53.8474 37.3763 53.7681 37.5683C53.6888 37.7603 53.5723 37.9348 53.4254 38.0817C53.2784 38.2286 53.1039 38.345 52.9119 38.4242C52.7198 38.5035 52.514 38.544 52.3063 38.5435C49.2157 38.5317 41.6031 39.5551 41.5908 36.6053C41.5863 35.7293 42.3282 34.1351 43.1715 33.8981C43.1715 33.8981 49.9228 31.6255 51.1804 31.6464Z" fill="#0032BB"/>
</g>
<defs>
<clipPath id="clip0_3913_780">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs>
</svg>
</span>
<div className=' col-12 pl-2'>
  <h1 className='lead-text become-content-lead dark pt-4 '> Start Driving</h1>
<p className='p-text'>
Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>
</div>
                  
                  </div>
                  
              </div>

            </div>
{/* steps session */}

            <div className='layout_padding-top'>
                <div className='container '>
                  <div className='row grey-cont'>
                    <div className='col-12 become-content-add'>
<div className='col-12'>
  <h1 className='content-header pt-5 pb-4'>How TagAlong App Works</h1>
  </div>
  <div className='col-md-12 col-lg-12 col-sm-12 col-xl-12 '>
  <div className='row'>
    <div className='col-lg-7 col-xl-7 col-md-12 order-md-2 add-top'>
      <div className='col-12 p-0'>
        <div className='become-cont-flex'>
          <div className='become-num-circle'><span className='become-num'>1</span></div>
          <div>
          <h6 className='lead-text become-lead-title'> Set your destination </h6>
          <p className='become-lead-text lead-text'>
            citi sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          </div>
        </div>
      </div>
      <div className='col-12 p-0'>
        <div className='become-cont-flex'>
          <div className='become-num-circle'><span className='become-num'>2</span></div>
          <div>
          <h6 className='lead-text become-lead-title'> Accept ride request</h6>
          <p className='become-lead-text lead-text'>
            citi sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          </div>
        </div>
      </div>
      <div className='col-12 p-0'>
        <div className='become-cont-flex'>
          <div className='become-num-circle'><span className='become-num'>3</span></div>
          <div>
          <h6 className='lead-text become-lead-title'> Drive to different bus stop along your route </h6>
          <p className='become-lead-text lead-text'>
            citi sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          </div>
        </div>
      </div>
      <div className='col-12 p-0'>
        <div className='become-cont-flex'>
          <div className='become-num-circle'><span className='become-num'>4</span></div>
          <div>
          <h6 className='lead-text become-lead-title'> Repeat the process and earn more money</h6>
          <p className='become-lead-text lead-text'>
            citi sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          </div>
        </div>
      </div>


    </div>
    <div className='col-lg-5 col-xl-5 col-md-12 order-md-1 p-0'>
      <div className='add'>
        <img src={phone} alt='phone-add'/>
      </div>
    </div>
  </div>
</div>

                  </div></div>

            </div>
            </div>

            {/* Frequently asked questions */}
            
            <div className='layout_padding'>
              <div className='container text-center'>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-md-12 col-sm-12 col-lg-12 col-xl-12 '>
                    <h1 className='content-header '>
                      Frequently asked questions
                    </h1>
                    </div>
                    
                    <div className=' col-lg-9 col-xl-9 col-md-10 col-sm-12     pt-5'>
                    <div className=' faq  mt-4'>
                      <h2 className='become-lead-text lead-text'>Can I drive with TagAlong in my city?</h2>
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9425 20.9427C16.6924 21.1927 16.3534 21.3331 15.9998 21.3331C15.6463 21.3331 15.3072 21.1927 15.0571 20.9427L7.51447 13.4001C7.38713 13.2771 7.28555 13.1299 7.21567 12.9673C7.14579 12.8046 7.10901 12.6296 7.10747 12.4526C7.10593 12.2755 7.13967 12.1 7.20671 11.9361C7.27375 11.7723 7.37276 11.6234 7.49795 11.4982C7.62314 11.373 7.77201 11.274 7.93587 11.207C8.09973 11.1399 8.2753 11.1062 8.45234 11.1077C8.62938 11.1093 8.80434 11.146 8.96701 11.2159C9.12968 11.2858 9.27681 11.3874 9.39981 11.5147L15.9998 18.1147L22.5998 11.5147C22.8513 11.2718 23.1881 11.1374 23.5377 11.1405C23.8873 11.1435 24.2217 11.2837 24.4689 11.531C24.7161 11.7782 24.8563 12.1126 24.8594 12.4622C24.8624 12.8118 24.728 13.1486 24.4851 13.4001L16.9425 20.9427Z" fill="black"/>
</svg>
                      </span>
                      

                    </div>
                    <div className=' faq  mt-4'>
                      <h2 className='become-lead-text lead-text'>How do I sign up to drive with TagAlong?</h2>
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9425 20.9427C16.6924 21.1927 16.3534 21.3331 15.9998 21.3331C15.6463 21.3331 15.3072 21.1927 15.0571 20.9427L7.51447 13.4001C7.38713 13.2771 7.28555 13.1299 7.21567 12.9673C7.14579 12.8046 7.10901 12.6296 7.10747 12.4526C7.10593 12.2755 7.13967 12.1 7.20671 11.9361C7.27375 11.7723 7.37276 11.6234 7.49795 11.4982C7.62314 11.373 7.77201 11.274 7.93587 11.207C8.09973 11.1399 8.2753 11.1062 8.45234 11.1077C8.62938 11.1093 8.80434 11.146 8.96701 11.2159C9.12968 11.2858 9.27681 11.3874 9.39981 11.5147L15.9998 18.1147L22.5998 11.5147C22.8513 11.2718 23.1881 11.1374 23.5377 11.1405C23.8873 11.1435 24.2217 11.2837 24.4689 11.531C24.7161 11.7782 24.8563 12.1126 24.8594 12.4622C24.8624 12.8118 24.728 13.1486 24.4851 13.4001L16.9425 20.9427Z" fill="black"/>
</svg>
                      </span>
                      

                    </div>
                    <div className=' faq  mt-4'>
                      <h2 className='become-lead-text lead-text'>Do I need to pay before driving with TagAlong?</h2>
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9425 20.9427C16.6924 21.1927 16.3534 21.3331 15.9998 21.3331C15.6463 21.3331 15.3072 21.1927 15.0571 20.9427L7.51447 13.4001C7.38713 13.2771 7.28555 13.1299 7.21567 12.9673C7.14579 12.8046 7.10901 12.6296 7.10747 12.4526C7.10593 12.2755 7.13967 12.1 7.20671 11.9361C7.27375 11.7723 7.37276 11.6234 7.49795 11.4982C7.62314 11.373 7.77201 11.274 7.93587 11.207C8.09973 11.1399 8.2753 11.1062 8.45234 11.1077C8.62938 11.1093 8.80434 11.146 8.96701 11.2159C9.12968 11.2858 9.27681 11.3874 9.39981 11.5147L15.9998 18.1147L22.5998 11.5147C22.8513 11.2718 23.1881 11.1374 23.5377 11.1405C23.8873 11.1435 24.2217 11.2837 24.4689 11.531C24.7161 11.7782 24.8563 12.1126 24.8594 12.4622C24.8624 12.8118 24.728 13.1486 24.4851 13.4001L16.9425 20.9427Z" fill="black"/>
</svg>
                      </span>
                      

                    </div>
                    <div className=' faq  mt-4'>
                      <h2 className='become-lead-text lead-text'>How do I get paid from driving with TagAlong?</h2>
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9425 20.9427C16.6924 21.1927 16.3534 21.3331 15.9998 21.3331C15.6463 21.3331 15.3072 21.1927 15.0571 20.9427L7.51447 13.4001C7.38713 13.2771 7.28555 13.1299 7.21567 12.9673C7.14579 12.8046 7.10901 12.6296 7.10747 12.4526C7.10593 12.2755 7.13967 12.1 7.20671 11.9361C7.27375 11.7723 7.37276 11.6234 7.49795 11.4982C7.62314 11.373 7.77201 11.274 7.93587 11.207C8.09973 11.1399 8.2753 11.1062 8.45234 11.1077C8.62938 11.1093 8.80434 11.146 8.96701 11.2159C9.12968 11.2858 9.27681 11.3874 9.39981 11.5147L15.9998 18.1147L22.5998 11.5147C22.8513 11.2718 23.1881 11.1374 23.5377 11.1405C23.8873 11.1435 24.2217 11.2837 24.4689 11.531C24.7161 11.7782 24.8563 12.1126 24.8594 12.4622C24.8624 12.8118 24.728 13.1486 24.4851 13.4001L16.9425 20.9427Z" fill="black"/>
</svg>
                      </span>
                      

                    </div>
                    <div className=' faq  mt-4'>
                      <h2 className='become-lead-text lead-text'>Is Driving with TagAlong a good side hustle?</h2>
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9425 20.9427C16.6924 21.1927 16.3534 21.3331 15.9998 21.3331C15.6463 21.3331 15.3072 21.1927 15.0571 20.9427L7.51447 13.4001C7.38713 13.2771 7.28555 13.1299 7.21567 12.9673C7.14579 12.8046 7.10901 12.6296 7.10747 12.4526C7.10593 12.2755 7.13967 12.1 7.20671 11.9361C7.27375 11.7723 7.37276 11.6234 7.49795 11.4982C7.62314 11.373 7.77201 11.274 7.93587 11.207C8.09973 11.1399 8.2753 11.1062 8.45234 11.1077C8.62938 11.1093 8.80434 11.146 8.96701 11.2159C9.12968 11.2858 9.27681 11.3874 9.39981 11.5147L15.9998 18.1147L22.5998 11.5147C22.8513 11.2718 23.1881 11.1374 23.5377 11.1405C23.8873 11.1435 24.2217 11.2837 24.4689 11.531C24.7161 11.7782 24.8563 12.1126 24.8594 12.4622C24.8624 12.8118 24.728 13.1486 24.4851 13.4001L16.9425 20.9427Z" fill="black"/>
</svg>
                      </span>
                      

                    </div>
                    <div className=' faq  mt-4'>
                      <h2 className='become-lead-text lead-text'>Do I need to have a car to drive with TagAlong?</h2>
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9425 20.9427C16.6924 21.1927 16.3534 21.3331 15.9998 21.3331C15.6463 21.3331 15.3072 21.1927 15.0571 20.9427L7.51447 13.4001C7.38713 13.2771 7.28555 13.1299 7.21567 12.9673C7.14579 12.8046 7.10901 12.6296 7.10747 12.4526C7.10593 12.2755 7.13967 12.1 7.20671 11.9361C7.27375 11.7723 7.37276 11.6234 7.49795 11.4982C7.62314 11.373 7.77201 11.274 7.93587 11.207C8.09973 11.1399 8.2753 11.1062 8.45234 11.1077C8.62938 11.1093 8.80434 11.146 8.96701 11.2159C9.12968 11.2858 9.27681 11.3874 9.39981 11.5147L15.9998 18.1147L22.5998 11.5147C22.8513 11.2718 23.1881 11.1374 23.5377 11.1405C23.8873 11.1435 24.2217 11.2837 24.4689 11.531C24.7161 11.7782 24.8563 12.1126 24.8594 12.4622C24.8624 12.8118 24.728 13.1486 24.4851 13.4001L16.9425 20.9427Z" fill="black"/>
</svg>
                      </span>
                      

                    </div>
                    
                    
                  </div>
                </div>
              </div>

            </div>

            {/* signup add  */}

            <div className='layout_padding'>
            <div className='container '>
                  <div className='row align-items-center grey-cont'>
                  <div className=' col-12  bggrey bd-radius'>
               <div className='row align-items-center'>
<div className='col-lg-6 col-xl-6 col-md-7 col-sm-12 signup-add-text order-md-2'>
<h1 className='content-header p-0'>Be your own boss. Start driving and earn!</h1>
<p className='lead-text become-lead-text'> It takes just 2 minutes to submit your information.  </p>
<button className=" btn view-btn pl-2 pr-2 mt-5"><span className="btn-text">Sign up now</span></button>
</div>
<div className='col-lg-6 col-xl-6 col-md-5 col-sm-12 order-md-1 '>
  <div className='signup-add-img'>
    <img src={signup} alt='signup-add'/>
  </div>

</div>

                </div>     
                    
                    </div>
                    </div>
                    </div>
            </div>
            <Footer/>
    </>
  )
}

export default BecomeADriver