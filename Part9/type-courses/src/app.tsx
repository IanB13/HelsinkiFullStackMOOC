import React from 'react';
import Header from './Header';

const app = ()=>{
  const courseName = "Half Stack application development";

    return (
      <>
            <Header title ={courseName}/>
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