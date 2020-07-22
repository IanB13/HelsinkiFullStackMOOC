import React, {FC} from 'react';
import {OccupationalHealthcareEntry} from '../../types';

const OccupationalHealthcare: FC< {entry: OccupationalHealthcareEntry}> = ({entry}) =>{

    return(
        <>
            <strong>{entry.type} </strong>
        </>
    );
};

export default OccupationalHealthcare;