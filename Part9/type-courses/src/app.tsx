import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Total from './Components/Total'
import {CoursePart} from "./types"

const app = ()=>{
  const courseName = "Half Stack application development";
  // this is the new coursePart variable
const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
  },
  {
    name: "cool course",
    exerciseCount: 8,
    description: "fun fun fun"
  }
];


    return (
      <>
            <Header title ={courseName}/>
            <Content courses = {courseParts}/>
            <Total courses = {courseParts}/>
      </>
      )

}

export default app;
