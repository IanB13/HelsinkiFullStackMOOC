import React, {FC} from 'react';
import {OccupationalHealthcareEntry} from '../../types';
import Diagnoses from './Diagnoses';

const OccupationalHealthcare: FC< {entry: OccupationalHealthcareEntry}> = ({entry}) =>{

    return(
        <>
            <strong>{entry.type} </strong>
            <Diagnoses diagnoses ={entry.diagnosisCodes}/>
        </>
    );
};

export default OccupationalHealthcare;