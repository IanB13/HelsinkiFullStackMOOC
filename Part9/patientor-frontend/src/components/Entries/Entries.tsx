import React,{FC} from 'react';

import {Entry as EntryProps} from "../../types";

const Entry: FC< {entries: EntryProps[]}> = ({entries}) => {

return(
    <div>
       {entries.map(entry => {
        switch (entry.type) {
            case "Hospital":
            return(<div key = {entry.id}> Hospital </div>);
            
            case "OccupationalHealthcare":
            return(<div key = {entry.id}> OccupationalHealthcare </div>);

            case "HealthCheck":
            return (<div key = {entry.id}> HealthCheck </div>);

            default:
                break;
       }})}
    </div>
);
};

export default Entry;