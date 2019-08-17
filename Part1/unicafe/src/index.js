import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistcs = (props) =>{
  const [good,neutral,bad] = props.feedback;
  let all = 0;

  props.feedback.forEach(input => {
   all = all+input
  });
  
  if(all === 0){
    return(
      <>
      <h1>statistcs </h1>
      <div>
        No feedback given
      </div>
      </>
    )

  }
  return (
    <>
      <h1>statistcs </h1>
      <table>
        <tbody>
          <tr>
            <Statistc text="good" value={good} />
          </tr>
          <tr>
            <Statistc text="neutral" value={neutral} />
          </tr>
          <tr>
            <Statistc text="bad" value={bad} />
          </tr>
          <tr>
            <Statistc text="all" value={all} />
          </tr>
          <tr>
            <Statistc text="average" value={Math.round(100 *((good - bad) / all))/100}  />
          </tr>
          <tr>
            <Statistc text="positive" value={Math.round(100 * (good / all))} percent="true" />
          </tr>
        </tbody>
      </table>
    </>
  )

}

const Statistc = (props) => {
let value = props.value

// using string comparison for conditional, should look into changing
if(props.percent === "true"){
  value = +value +"%"
}
  return(
    <>
      <td>
        {props.text}
      </td>
      <td>
        {value}
      </td>
    </>
  )

}

const Button =(props) =>{


  return(
  <button onClick ={() => props.stateSetter(props.state+1)}>
  {props.text}
  </button>

)

}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div id = "feedbackbuttons">
        <h1>give feedback</h1>
        <Button stateSetter ={setGood} state = {good} text = "good"/>
        <Button stateSetter ={setNeutral} state = {neutral} text = "neutral"/>
        <Button stateSetter ={setBad} state = {bad} text = "bad"/>
      </div>
      <Statistcs  feedback = {[good,neutral,bad]} />
    </>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)