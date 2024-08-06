import React from 'react'

const Rides = () => {
  return (
    <>
    <div className=' layout_padding width'>
        <div className='row pt-4'>
        <br/>
        <div className='col-12'>
        <div className='row  pl-0 justify-content-between align-items-center '>
        <h1 className='main-head'>
            Rides
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
        <div className='col-12  white-back pl-4 mt-4 pt-4 pb-4 '>
            <div>
            <span className='add-input-label'> Ride Details</span>

            </div>
            </div>   
      
        <div className='table-responsive custom-table-responsive\ bggrey border-0 pt-4 pl-4  pb-4 '>
                <thead >
                    <tr>
                        <th>Ride Id</th>
                        <th>Driver Name</th>
                        <th>Date </th>
                        <th>Time</th>
                        <th>Stops</th>
                    </tr>
                </thead>
            
          </div>

    </div>
            
        </div>
        


    </>
  )
}

export default Rides