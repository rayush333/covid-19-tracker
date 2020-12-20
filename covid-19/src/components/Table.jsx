import React,{useEffect,useState} from 'react'
import {sortData,sortByActive,sortByDeaths,sortByTodayCases,sortByRecovered,sortByTests,sortByCasesPerMillion,sortByTodayDeaths,sortByTodayRecovered} from "../util";
function Table({data, sortby}) {
    const [ss,pp] = useState([]);
    useEffect(()=>{
        switch(sortby)
        {
            case "cases": pp(sortData(data));
            break;
            case "active": pp(sortByActive(data));
            break;
            case "deaths" : pp(sortByDeaths(data));
            break;
            case "todayCases": pp(sortByTodayCases(data));
            break;
            case "recovered": pp(sortByRecovered(data));
            break;
            case "tests": pp(sortByTests(data));
            break;
            case "casesPerOneMillion": pp(sortByCasesPerMillion(data));
            break;
            case "todayDeaths": pp(sortByTodayDeaths(data));
            break;
            case "todayRecovered": pp(sortByTodayRecovered(data));
            break;
        }
    },[sortby]);
    useEffect(()=>{
        pp(sortData(data));
    },[]);
    return (
        <div className="table">
        
            {ss.length>0?ss.map((country,index)=>{
                return <tr><td style={{width: "10%"}}>{index+1}</td><td style={{width: "50%",display: "flex"}}><img className = "dropdown-flag" src={country.countryInfo.flag} alt="flag" />{country.country}</td><td style={{textAlign: "right"}}><strong>{sortby === "cases" ? country.cases : sortby === "active" ? country.active :sortby === "deaths" ? country.deaths : sortby === "todayCases" ? country.todayCases:  sortby === "recovered" ? country.recovered : sortby === "tests" ? country.tests : sortby === "casesPerOneMillion" ? country.casesPerOneMillion : sortby === "todayDeaths" ? country.todayDeaths : sortby === "todayRecovered" ? country.todayRecovered : null}</strong></td></tr>;
            }):data.map((country,index)=>{
                return <tr><td style={{width: "10%"}}>{index+1}</td><td style={{width: "50%",display: "flex"}}><img className = "dropdown-flag" src={country.countryInfo.flag} alt="flag" />{country.country}</td><td style={{textAlign: "right"}}><strong>{country.cases}</strong></td></tr>;
            })}
        </div>
    )
}

export default Table
// import React,{useState,useEffect} from 'react';
// import {FormControl,Select,MenuItem} from "@material-ui/core";
// import {sortData,sortByActive} from "../util";
// function Table(props) {


//     const [data,setdata] = useState([...props.data]);
//     function handleChange(event){
//         setsort(event.target.value);
//     }
//     useEffect(()=>{
//         loadCountries();
//     },[]);
//     async function loadCountries(){
//         await setdata(props.data);
//     }
//     useEffect(()=>{
//         switch(sortby){
//             case "cases": setdata(sortData(data));
//             break;
//             case "active": setdata(sortByActive(data));
//             break;
//             // case "active": setdata(sortByActive(data));
//             // break;
//         }
//         console.log(data);
//     },[sortby]);
//     return (
//         <div>
 
//         <div className="table">
//                      {data.map((country,index)=>{
//                          return <tr key={index}><td style={{width: "10%"}}>{index+1}</td><td style={{width: "50%",display: "flex"}}><img className = "dropdown-flag" src={country.countryInfo.flag} alt="flag" />{country.country}</td><td style={{textAlign: "right"}}><strong>{sortby === "cases" ? country.cases : country.active}</strong></td></tr>;
//                      })}
//                  </div>
//         </div>
//     )
// }

// export default Table;
