import React from 'react';
import Part from "./Part"
import {CoursePart} from '../types';

const Content: React.FC<{courses: CoursePart[]}> = ({courses}) =>{

    return(
        <>
        {courses.map(course => <Part key ={course.name} part ={course}/>) }
        </>
    )
}


export default Content;