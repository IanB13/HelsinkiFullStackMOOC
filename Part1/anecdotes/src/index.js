import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const RandAnecdote = (props) =>{
  return(
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdote}
      </div>
      <div>
        has {props.votes} votes
    </div>
    </>
  )
}

const TopAnecdote = (props) => {
  let MaxVote = 0;
  let MaxVoteIndex = 0;
  props.VoteArray.forEach((vote, voteIndex) => {
    if (vote > MaxVote) {
      MaxVote = vote;
      MaxVoteIndex = voteIndex;
    }
  });

  //add on conditional rendering (hex code is sad emoji) 
  //fixed warning
  if (MaxVote === 0) {
    return(
      <div> 
        no anecdote has been voted for 
        <span role ="img" aria-label="sad boi">&#x1F622;</span> 
       </div>
    )
  }

  return (
    <>
      <h1>Anecdote with the most votes</h1>
      <div>
        {props.anecdotes[MaxVoteIndex]}
      </div>
      <div>has {MaxVote} votes</div>
    </>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [selectedVote, setVote] = useState(points)

  const genRandanecdote = () => setSelected(nohistory())

  // ensures that the new anecdote is not the same as the last one
  //will break on one anecdote
  const nohistory = () => {
    let randomNum = randnum(props.anecdotes.length - 1);
    while (selected === randomNum) {
      randomNum = randnum(props.anecdotes.length - 1);
    }
    return randomNum
  }

  const voteFunction = () => {
    selectedVote[selected] = selectedVote[selected] + 1;
    const copy = [...selectedVote];
    setVote(copy)
  }

  return (
    <>
      <RandAnecdote anecdote={props.anecdotes[selected]} votes={selectedVote[selected]} />

      <button onClick={voteFunction}>
        vote
        </button>

      <button onClick={genRandanecdote}>
        next anecdote
        </button>
      <TopAnecdote VoteArray={[...selectedVote]} anecdotes={anecdotes} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

//takes maximum integer and return random int from 0 to maxInt
const randnum = (maxInt) => Math.round(maxInt*Math.random());

//generates array of 0s that is the same length as anecdotes array
const points = []
anecdotes.forEach( (anecdote,anecdoteIndex) => {
  points[anecdoteIndex] = 0
});

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)