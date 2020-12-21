import React from "react";
import InfoBox from './InfoBox';
function InfoBoxes({country,onClick,casesType}){
    return <div className="infoboxes">
        <InfoBox title="Coronavirus Cases" cases={country.todayCases} total={country.cases} value="cases" onClick={onClick} active={casesType === "cases"} color = "red" />
        <InfoBox title="Recovered" cases={country.todayRecovered} total={country.recovered} value="recovered" onClick={onClick} active = {casesType === "recovered"} color = "green" />
        <InfoBox title="Deaths" cases={country.todayDeaths} total={country.deaths} value="deaths" onClick={onClick} active = {casesType === "deaths"} color = "black" />
    </div>;
}
export default InfoBoxes;