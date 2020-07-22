import React,{FC} from 'react';
import OccupationalHealthcare from './OccupationalHealthcare';
import HealthCheck from './HealthCheck';
import Hospital from './Hospital';

import {Entry as EntryProps} from "../../types";

const Entry: FC< {entries: EntryProps[]}> = ({entries}) => {

return(
    <div>
       {entries.map(entry => {
        switch (entry.type) {
            case "Hospital":
            return(<div key = {entry.id}> 
                <Hospital entry = {entry} />
             </div>);
            
            case "OccupationalHealthcare":
            return(<div key = {entry.id}> 
                <OccupationalHealthcare entry = {entry} />
                 </div>);

            case "HealthCheck":
            return (<div key = {entry.id}> 
                <HealthCheck entry = {entry} />
             </div>);

            default:
                return null;
       }})}
    </div>
);
};

export default Entry;