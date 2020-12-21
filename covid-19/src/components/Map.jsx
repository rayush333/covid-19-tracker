import React from 'react';
import {MapContainer,TileLayer} from "react-leaflet"; 
import {showDataOnMap} from "../util";
function Map({countries,center,zoom,casesType}) {

    return (
        <div className="map" key={center}>
        <MapContainer center = {center} zoom = {zoom}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            {showDataOnMap(countries,casesType)}
        </MapContainer>
        </div>
        
    )
}
export default Map
