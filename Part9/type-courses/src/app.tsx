import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Total from './Components/Total'

const app = ()=>{
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
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

/* const App = () => {
  // const-declarations

  return (
    <div>
      <Header name={courseName} />
      <Content ... />
      <Total ... />
    </div>
  )
}; */