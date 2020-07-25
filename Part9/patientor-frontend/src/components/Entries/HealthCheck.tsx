import React, {FC} from 'react';
import {HealthCheckEntry} from '../../types';
import Diagnoses from './Diagnoses';

const HealthCheck: FC< {entry: HealthCheckEntry}> = ({entry}) =>{

    return(
        <>
            <strong style ={{color: 'pink'}}>{entry.type} </strong>
            <Diagnoses diagnoses ={entry.diagnosisCodes}/>
        </>
    );
};

export default HealthCheck;