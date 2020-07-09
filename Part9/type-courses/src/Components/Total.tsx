import React from 'react';
import {CoursePart} from '../types';

const Total: React.FC<{courses: CoursePart[]}> = ({courses}) =>{

    return(
        <p>
        Number of exercises{" "}
        {courses.reduce((acc,num) =>acc + num.exerciseCount,0)}
        </p>
    )
}

export default Total;