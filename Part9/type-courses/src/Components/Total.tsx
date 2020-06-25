import React from 'react';
import {Course} from '../types';

const Total: React.FC<{courses: Course[]}> = ({courses}) =>{

    return(
        <p>
        Number of exercises{" "}
        {courses.reduce((acc,num) =>acc + num.exerciseCount,0)}
        </p>
    )
}

export default Total;