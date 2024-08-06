import React from 'react'
import driverdoc from '../../assets/img/driversdoc.jpg'
import licenedoc from '../../assets/img/vehicle.png'
const DriverDoc = () => {
  return (
    <>
        <div className=' layout_padding width'>
        <div className='row pt-4'>
        <br/>
        <div className='col-12'>
        <div className='row  pl-0 justify-content-between align-items-center '>
        <h1 className='main-head'>
        Documents of Emmanuel Hudson
        </h1>
        <div className='upload-container'>
        <button className='back-btn btn  bgblue'>
            <span className='text text-light'>Download </span>
            <svg xmlns="http://www.w3.org/2000/svg" className='back-svg' viewBox="0 0 12 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4 8.4C11.7077 8.4 11.9613 8.63162 11.996 8.93003L12 9V10.2C12 11.1586 11.2506 11.9422 10.3058 11.9969L10.2 12H1.8C0.841392 12 0.0578034 11.2506 0.00305557 10.3058L0 10.2V9C0 8.66863 0.268629 8.4 0.6 8.4C0.907702 8.4 1.1613 8.63162 1.19596 8.93003L1.2 9V10.2C1.2 10.5077 1.43162 10.7613 1.73003 10.796L1.8 10.8H10.2C10.5077 10.8 10.7613 10.5684 10.796 10.27L10.8 10.2V9C10.8 8.66863 11.0686 8.4 11.4 8.4ZM6 0C6.33137 0 6.6 0.268629 6.6 0.6V6.351L7.37574 5.57574C7.59203 5.35945 7.93237 5.34281 8.16774 5.52582L8.22426 5.57574C8.44055 5.79203 8.45719 6.13237 8.27418 6.36774L8.22426 6.42426L6.42426 8.22426L6.39789 8.2491L6.35718 8.2822L6.29044 8.3252L6.2228 8.35727L6.1596 8.37849L6.07049 8.3959L6 8.4L5.95486 8.39833L5.87956 8.38786L5.81271 8.37016L5.74607 8.3438L5.68757 8.3124L5.62995 8.27233C5.61092 8.2574 5.59282 8.24134 5.57574 8.22426L3.77574 6.42426C3.54142 6.18995 3.54142 5.81005 3.77574 5.57574C3.99203 5.35945 4.33237 5.34281 4.56774 5.52582L4.62426 5.57574L5.4 6.351V0.6C5.4 0.268629 5.66863 0 6 0Z" fill="white"/>
</svg>
            </button>
        <button className='back-btn btn  bgblue'>
            <span className='text text-light'>Back </span>
            <svg xmlns="http://www.w3.org/2000/svg" className='back-svg' viewBox="0 0 11 10" fill="none">
<path d="M5.04797 1.01196L1.02402 4.98787L4.99993 9.01182" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0959 1.01196L6.072 4.98787L10.0479 9.01182" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
            </div>
        </div>
        </div>
        <div className='col-12   rounded-sm pl-4 mt-4 pt-4 pb-3 bg-white'>
            
<div className='row pt-4 justify-content-between pl-4  pr-4 pb-5'>
<div className='add-input-label col-12 pl-0 pb-5'> Driver Information</div> 

    <div className=' doc-container' >
        <div className='doc-header justify-content-center align-items-center'>Vehicle Licence</div>

        <div className='doc-img' style={{ backgroundImage:`url(${licenedoc})` }}>

</div>
    </div>
    <div className=' doc-container' >
    <div className='doc-header justify-content-center align-items-center'>Driving Licence</div>

    <div className='doc-img' style={{ backgroundImage:`url(${driverdoc})` }}>


    </div>

    </div>

</div>

<div className='pl-2 mb-3'>
          <button className='btn add-btn bgblue '> <span className='text text-light'>Approve</span></button>
        </div>
        </div>
        
      
        </div>

    </div>

    
    </>
  )
}

export default DriverDoc