import React from "react";
import InfoBox from './InfoBox';
function InfoBoxes({country}){
    return <div className="infoboxes">
        <InfoBox title="Coronavirus Cases" cases={country.todayCases} total={country.cases} />
        <InfoBox title="Recovered" cases={country.todayRecovered} total={country.recovered} />
        <InfoBox title="Deaths" cases={country.todayDeaths} total={country.deaths} />
        {/* <InfoBox />
        <InfoBox /> */}
    </div>;
}
export default InfoBoxes;