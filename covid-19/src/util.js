import {Circle, Popup} from "react-leaflet";
import numeral from "numeral";
const casesTypeColors = {
    cases: {
        hex: "#fb4443",
        multiplier: 400
    },
    recovered: {
        hex: "#7DD71D",
        multiplier: 450
    },
    deaths: {
        hex: "#393e46",
        multiplier: 2000
    }
};
export const sortData = (data,sortby) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a[sortby]>=b[sortby])
        return -1;
        return 1;
    });
    return sortedData;
}
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      pathOptions={{color: casesTypeColors[casesType].hex, fillColor: casesTypeColors[casesType].hex }}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
<Popup><div className="info">
    <div  className="info-flag"><img src={country.countryInfo.flag} alt="flag" /></div>
    <div className="info-name" >{country.country}</div>
    <div className="info-cases" >Cases: {numeral(country.cases).format("0,0")}</div>
    <div className="info-recovered" >Recovered: {numeral(country.recovered).format("0,0")}</div>
    <div className="info-deaths" >Deaths: {numeral(country.deaths).format("0,0")}</div>
</div></Popup>
</Circle>
  ))
export const prettify = (data) => {
    return data? data>10000 ? "+"+numeral(data).format("0.0a"): "+" +numeral(data).format('0,0') : "+0";
}