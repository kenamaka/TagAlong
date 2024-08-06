import React from 'react'

const AddDriver = () => {
  return (
    <>
    <div className=' layout_padding width pl-3'>
        <div className='row pt-4'>
        <br/>
        <div className='col-12'>
        <div className='row  pl-0 justify-content-between align-items-center '>
        <h1 className='main-head'>
            Add Driver
        </h1>
        <button className='back-btn btn  bgblue'>
            <span className='text text-light'>Back </span>
            <svg xmlns="http://www.w3.org/2000/svg" className='back-svg' viewBox="0 0 11 10" fill="none">
<path d="M5.04797 1.01196L1.02402 4.98787L4.99993 9.01182" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0959 1.01196L6.072 4.98787L10.0479 9.01182" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
        </div>
        </div>
        <div className='col-12  border rounded-sm pl-4 mt-4 pt-3 pb-3'>
            
<span className='add-input-label'> Driver Information</span>
        </div>
        <form className=' bg-white add-input-label add-input-form pl-4 col pt-5' >
            <div className='col-12 p-0 '>
                <div className='pb-2'>Driver Name</div>
                <input   className='add-input   ' type='text' placeholder='Name' />
            </div>
            <div className='col-12 p-0 pt-4'>
                <div className='pb-2'>Email</div>
                <input   className='add-input   ' type='email' placeholder='Email' />
            </div>
            <div className='col-12 p-0 pt-4'>
                <div className='pb-2'>Phone Number</div>
                <div className='row pl-3 '>
      
      <div className='col-1 p-2 add-input input-num-2 border-rigtht'>
        <div className='row pl-3 align-items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" className='flag-svg' viewBox="0 0 22 16" fill="none">
<g clip-path="url(#clip0_4582_44841)">
<rect width="22" height="16" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H7.33333V16H0V0ZM14.6667 0H22V16H14.6667V0Z" fill="#0A6A30"/>
</g>
<defs>
<clipPath id="clip0_4582_44841">
<rect width="22" height="16" fill="white"/>
</clipPath>
</defs>
</svg> 
<span>+234</span>
</div>
        
      
      </div>
      <div className='col-11 pl-0'>
      <input className=' add-input input-num-1 border-left' type='number' placeholder='Phone Number'/>
   
      </div>
      
      </div>
            </div>

            <div className='col-12 p-0 pt-4'>
                <div className='pb-2'>Password</div>
                <input   className='add-input   ' type='password' placeholder='Password' />
            </div>

            <div className='col-12 p-0 pt-4'>
                <div className='pb-2'>Confirm Password</div>
                <input   className='add-input   ' type='password' placeholder='Password' />
            </div>
            <div className='col-12 p-0 pt-4'>
                <div className='pb-2'>City Name</div>
                <input   className='add-input   ' type='text' placeholder='City Name' />
            </div>

              <div className='col-12 p-0 pt-4 pb-5'>
                <div className='pb-2'>Profile Image</div>
                <input   className='add-input add-profile-image   ' type='file' placeholder='City Name' />
            </div>

        </form>
      
        </div>
        <div className= "row pt-4 upload-container">
            <button className='btn back-btn bgblue text-white'>Save</button>
            <button className='btn back-btn bgblue text-white'>Reset</button>
            </div>

    </div>
    </>
  )
}

export default AddDriver