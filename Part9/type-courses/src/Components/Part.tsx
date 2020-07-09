import React from 'react';
import {CoursePart} from '../types';

const Part: React.FC<{part: CoursePart}> = ({part}) =>{

    const assertNever = (value: never): never => {
        throw new Error(
          `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
      }
switch(part.name){
    case("Fundamentals"):{
        return (<p> {part.name} {part.exerciseCount} <br/>
        Description: {part.description}
        </p>)
    }
    case("Using props to pass data"):{
        return(<p> {part.name} {part.exerciseCount} <br/>
            Group Projects: {part.groupProjectCount}
            </p>)
    }
    case("Deeper type usage"):{
        return(<p> {part.name} {part.exerciseCount} <br/>
            Description: {part.description} <br/>
            Submit exercises <a href = {part.exerciseSubmissionLink}> here </a>
            </p>)
    }
    case("cool course"):{
        return(<p> {part.name} {part.exerciseCount} <br/>
            Description: {part.description}
            </p>)
    }
    default:{
        return assertNever(part)
    }
}



} 

export default Part