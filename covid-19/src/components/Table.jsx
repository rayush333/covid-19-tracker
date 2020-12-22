import React,{useEffect,useState} from 'react'
import {sortData} from "../util";
import numeral from "numeral";
function Table({data, sortby}) {
    const [ss,pp] = useState([]);
    useEffect(()=>{
        pp(sortData(data,sortby));
        // switch(sortby)
        // {
        //     case "cases": pp(sortData(data));
        //     break;
        //     case "active": pp(sortByActive(data));
        //     break;
        //     case "deaths" : pp(sortByDeaths(data));
        //     break;
        //     case "todayCases": pp(sortByTodayCases(data));
        //     break;
        //     case "recovered": pp(sortByRecovered(data));
        //     break;
        //     case "tests": pp(sortByTests(data));
        //     break;
        //     case "casesPerOneMillion": pp(sortByCasesPerMillion(data));
        //     break;
        //     case "todayDeaths": pp(sortByTodayDeaths(data));
        //     break;
        //     case "todayRecovered": pp(sortByTodayRecovered(data));
        //     break;
        //     case "deathsPerOneMillion": pp(sortByDeathsPerMillion(data));
        //     break;
        //     case "testsPerOneMillion": pp(sortByTestsPerMillion(data));
        //     break;
        //     default: pp(sortByRecoveredPerMillion(data));
        // }
    },[sortby]);
    useEffect(()=>{
        pp(sortData(data));
    },[]);
    return (
        <div className="table">
        
            {ss.length>0?ss.map((country,index)=>{
                return <tr><td style={{width: "10%"}}>{index+1}</td><td style={{width: "50%",display: "flex"}}><img className = "dropdown-flag" src={country.countryInfo.flag} alt="flag" />{country.country}</td><td style={{textAlign: "right"}}><strong>{numeral(country[sortby]).format('0,0')}</strong></td></tr>;
            }):data.map((country,index)=>{
                return <tr><td style={{width: "10%"}}>{index+1}</td><td style={{width: "50%",display: "flex"}}><img className = "dropdown-flag" src={country.countryInfo.flag} alt="flag" />{country.country}</td><td style={{textAlign: "right"}}><strong>{numeral(country.cases).format('0,0')}</strong></td></tr>;
            })}
        </div>
    )
}

export default Table