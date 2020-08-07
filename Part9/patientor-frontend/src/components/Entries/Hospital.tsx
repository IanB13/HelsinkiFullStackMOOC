import React, {FC} from 'react';
import {HospitalEntry} from '../../types';
import Diagnoses from './Diagnoses';

const Hospital: FC< {entry: HospitalEntry}> = ({entry}) =>{

    return(
        <>
            <strong style = {{color: "green",}}>{entry.type} </strong>
            <Diagnoses diagnoses ={entry.diagnosisCodes}/>
        </>
    );
};

export default Hospital;