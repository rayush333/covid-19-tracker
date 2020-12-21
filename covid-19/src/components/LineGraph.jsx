import React,{useState,useEffect} from 'react';
import {Line} from "react-chartjs-2";
import axios from "axios";
import numeral from "numeral";
const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem,data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 16,
                }
            },
        ],
        yAxes: [{
            gridLines: {
                display: false,
            },
            ticks: {
                autoSkip: true,
                maxTicksLimit: 8,
                callback: function(value,index,values) {
                    return numeral(value).format("0a");
                },
            },
            },
        ],
    },
}
const casesTypeColors = {
    deaths: {
      hex: "#393e46",
      rgb: "rgb(57,62,70)",
      half_op: "rgba(57,62,70, 0.5)"
    },
    recovered: {
      hex: "#7dd71d",
      half_op: "rgba(125, 215, 29, 0.5)"
    },
    cases: {
      hex: "#fb4443",
      half_op: "rgba(251, 68, 67, 0.5)"
    },
  };
function LineGraph({casesType,country}) {
    const [data,updatedata] = useState({});
    useEffect(()=>{
        async function getData(casesType,country){
            let res,chartData;
            if(country === 'worldwide')
            {res = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=120");
            chartData = buildChartData(res.data,casesType);
            }
            else
            {
            res = await axios.get("https://disease.sh/v3/covid-19/historical/"+country+"?lastdays=120");
            console.log(res.data.timeline);
            chartData = buildChartData(res.data.timeline,casesType);
            }
            updatedata(chartData);
            console.log(chartData);
        }
        getData(casesType,country);
    },[casesType,country]);
    
    function buildChartData(data,casesType = 'cases'){
        let chartData = [];
         let lastDataPoint;
         for(let date in data.cases){
             if(lastDataPoint){
                 let newDataPoint = {
                     x: date,
                     y: data[casesType][date] - lastDataPoint,
                 };
                 chartData.push(newDataPoint);
             }
             lastDataPoint = data[casesType][date];
         }
         return chartData;
    }
    return (
        <div>
           {data?.length>0?<Line options = {options} data = {{
               datasets: [{
                   data: data,
                   backgroundColor: casesTypeColors[casesType].half_op,
                   borderColor: casesTypeColors[casesType].hex
               }]
           }} />:null}
        </div>
    )
}

export default LineGraph;
