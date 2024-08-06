import React, { useEffect, useRef } from "react";

import { Line,  } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Earnings = () => {
    


    const data = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],

        // labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
            data: [200000, 350000, 450000, 300000, 250000, 400000, 300000],
            backgroundColor: 'transparent',
            borderColor: '#1D45D2',
            pointBorderColor: 'transparent',
            borderWidth: 5,
            tension:0.5,
            fill: 'linear - gradient(180deg, rgba(29, 69, 210, 0.12) 0 %, rgba(29, 69, 210, 0.00) 100 %)',
     
        }]
    };

    
    const hillyGradientPlugin = {
        id: 'hillyGradient',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          const chartArea = chart.chartArea;
    
          // Create a gradient for the background
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, '#DCE5FF');
          gradient.addColorStop(0.3, '#B6CFFF');
          gradient.addColorStop(0.6, '#7A97F0');
          gradient.addColorStop(1, '#4A6BDB');
    
          // Fill the background with the gradient
          ctx.fillStyle = gradient;
          ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        },
      };
    
    const options = {
        responsive: true,
        plugins: {
            legend:false
        },

        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0)',
                    // color: false,
                    drawerBorder:false,
                }
            },
            y: {
                grid: {
                    // display:false
                    color: 'rgba(0, 0, 0, 0)', // Make the Y-axis grid lines transparent
                drawBorder: false, 
                },
                min: 0,
                max: 600000,
                ticks: {
                    stepSize: 200000,
                    
                },
               
            }
        }
    }


    return <>
    <Line data={data} options={options} width={800} 
        height={400}  />
    </>;
};

export default Earnings;
