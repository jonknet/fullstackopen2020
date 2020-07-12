import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])


  const selectRandom = () =>{
    let randval = Math.floor(Math.random() * 5);
    setSelected(randval);
  }

  const vote = () => {
    console.log("vote");
    const votecopy = [...votes];
    votecopy[selected]++;
    console.log(votecopy);
    setVotes(votecopy);
  }

  const returnHighestVoted = () => {
    var idx = 0;
    var lastIdx = 0;
    var lastLgst = votes[0];
    for(var i = 1; i < votes.length; i++){
      if(votes[i] > lastLgst){
        lastLgst = votes[i];
        lastIdx = i;
      }
    }
    return props.anecdotes[lastIdx];
  }

  return (
    <div>
      {props.anecdotes[selected]} Votes:{votes[selected]}
      <button onClick={() => selectRandom()}>next anecdote</button>
      <button onClick={() => vote()}>vote</button>
      <h1>Highest voted</h1>
      {returnHighestVoted()}
    </div>
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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)