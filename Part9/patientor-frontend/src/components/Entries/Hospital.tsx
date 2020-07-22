import React, {FC} from 'react';
import {HospitalEntry} from '../../types';

const Hospital: FC< {entry: HospitalEntry}> = ({entry}) =>{

    return(
        <>
            <strong style = {{color: "green",}}>{entry.type} </strong>
        </>
    );
};

export default Hospital;