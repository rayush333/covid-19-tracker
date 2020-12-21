import React from "react";
import {prettify} from "../util";
import {Card,CardContent,Typography} from "@material-ui/core";
function InfoBox({title,cases,total,value,onClick,active,color}){
    return <Card className={"infobox "+color+" "+(active && color+"--selected")} onClick={()=>{
        onClick(value)
    }} >
        <CardContent>
            <Typography className="infobox-title" color="textSecondary">
                {title}
            </Typography>
            <h2 className="infobox-cases">{prettify(cases)}</h2>
            <Typography className="infobox-total" color="textSecondary">
                {prettify(total)} Total
            </Typography>
        </CardContent>
    </Card>
}
export default InfoBox;
