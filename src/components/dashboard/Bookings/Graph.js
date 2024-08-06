import React from 'react'

import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement
 } from "chart.js";
// import { type } from '@testing-library/user-event/dist/type';


 ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement,BarElement);


const Graph = () => {
  

    const data = {
        labels:["WK1", "wK2", "WK3", "WK4"],

        datasets:[{
            data:[0,200.400,600]
        }]
    }

    const options = {}
  return (
    <>
    <div>
    <Bar data={data} options={options}>
      </Bar>
      </div>  
    </>
  );
}

export default Graph