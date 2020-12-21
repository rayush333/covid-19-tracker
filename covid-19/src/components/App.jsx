import React,{useState,useEffect} from "react";
import {FormControl, MenuItem, Select} from "@material-ui/core";
import axios from "axios"; 
import InfoBoxes from "./InfoBoxes";
import Map from "./Map";
import {Card,CardContent,Typography} from "@material-ui/core";
import Table from "./Table";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";
function App(){
    const [countries,setCountries] = useState(['']);
    const [currentcountry,setcountry] = useState("worldwide");
    const [info,updateinfo] = useState({});
    const [table,settable] = useState([]);
    const [sortby,setsort] = useState("none");
    const options = [{name: "Total Cases", value: "cases" },{name: "Active Cases", value: "active"},{name: "Total Deaths", value: "deaths"},{name: "Recovered" , value: "recovered"},{name: "Total Tests", value: "tests"},{name: "Cases Today", value: "todayCases"},{name: 'Recovered Today', value: "todayRecovered"},{name: "Deaths Today", value: 'todayDeaths'},{name: "Cases per million",value: "casesPerOneMillion"},{name:"Recovered per million",value: "recoveredPerOneMillion"},{name:"Deaths per million",value: "deathsPerOneMillion"},{name:"Tests per million",value: "testsPerOneMillion"}];
    const [mapCenter,setMapCenter] = useState([30,0]);
    const [mapZoom,setMapZoom] = useState(2);
    const [casesType,setCasesType] = useState('cases');
    useEffect(()=>{
        getCountries();
        initialize();
    },[]);
    async function initialize(){
        const init = await axios.get("https://disease.sh/v3/covid-19/all");
        updateinfo(init.data);
    }
    async function getCountries(){
        const res = await axios.get("https://disease.sh/v3/covid-19/countries");
        const array = res.data;
        settable(res.data);
        const obj = array.map((country) => {
            return {
                country: country.country,
                value: country.countryInfo.iso3,
                flag: country.countryInfo.flag
            };
        
        });
        setCountries(obj);
    }
        async function handleChange(event){
        const code = event.target.value;
        setcountry(code);
        let res;
        if(code === "worldwide")
        res=await axios.get("https://disease.sh/v3/covid-19/all");
        else
        res = await axios.get("https://disease.sh/v3/covid-19/countries/"+code);
        console.log(res.data);
        updateinfo(res.data);
        setMapCenter([res.data.countryInfo.lat,res.data.countryInfo.long]);
        setMapZoom(4);
        }
        function handleSort(event){
        setsort(event.target.value);
    }
    function handleCardClick(c){
        setCasesType(c);
    }
    return <div className="app">
    <div className="app-left">
     <div className="heading">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="heading-dropdown">
            <Select variant="outlined" value={currentcountry} onChange={handleChange}>
            <MenuItem value = "worldwide"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg" className="dropdown-flag" alt="flag" />Worldwide</MenuItem>
                {countries.map((country,index)=>{
                    return <MenuItem value={country.value} key={index}><img src={country.flag} className="dropdown-flag" alt="flag" />{country.country}</MenuItem>;
                })}
            </Select>
        </FormControl>
    </div>
        <InfoBoxes country={info} onClick={handleCardClick} casesType={casesType} />
            <Map countries={table} center={mapCenter} zoom={mapZoom} casesType={casesType} />
        </div>
        <Card className="app-right">
        <CardContent>
        <div className="table-heading">
        <h3>Live Cases By Country</h3>
        <h4>Sort By:</h4>
        <FormControl>
            <Select variant="outlined" value={sortby} onChange={handleSort}>
            {options.map((option,index) =>{
                return <MenuItem key={index} value={option.value}>{option.name}</MenuItem>
            })}
            </Select>
        </FormControl>
        </div>
           <Table data={table} sortby={sortby} />
           <h3 className="graph-heading">{info.country || "Worldwide"} New {casesType==='cases'? "Cases" : casesType === 'recovered' ? "Recoveries" : "Deaths"}</h3>
           <div className="line-graph">
           <LineGraph casesType = {casesType} country = {currentcountry} />
           </div>
        </CardContent>
        </Card>
    </div>;
}

export default App;