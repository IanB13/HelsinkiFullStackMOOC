import React, {FC} from 'react';
import {HealthCheckEntry} from '../../types';

const HealthCheck: FC< {entry: HealthCheckEntry}> = ({entry}) =>{

    return(
        <>
            <strong style ={{color: 'pink'}}>{entry.type} </strong>
        </>
    );
};

export default HealthCheck;