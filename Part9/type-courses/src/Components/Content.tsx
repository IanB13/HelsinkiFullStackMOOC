import React from 'react';
import {Course} from '../types';

const Content: React.FC<{courses: Course[]}> = ({courses}) =>{

    return(
        <>
        {courses.map(course => <p key ={course.name}>{course.name} {course.exerciseCount} </p>) }
        </>
    )
}


export default Content;