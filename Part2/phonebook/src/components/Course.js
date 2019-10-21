import React from 'react'

const Header = (props) => {
    return( <h1>
       {props.course}
    </h1> )
}

const Content = (props) =>{
   const content = props.parts;

   return(
    <ul>
    {content.map(part =>{ 
    return <Part name = {part.name} exercises = {part.exercises} key= {part.id}/>})}
    </ul>
    )
}


const Part = (props) =>{
    
    return(
        <li> {props.name} {props.exercises }</li>
    )

}


const Total = (props)=>{
    const parts = props.parts; 

    const sum = parts.reduce((sum, current) => {
      sum = sum + current.exercises;
      return sum 
    },0)
    return(
        <p>Number of exercises: {sum}</p>
    )


}

const Course = (props) =>{
  const course = props.input;
  

  return(
    <>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts ={course.parts} />
    </>
  )


}

export default Course