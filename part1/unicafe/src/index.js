import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text,value}) => {
  return (
    <>
    <tr><td>{text}</td><td>{value}</td></tr>
    </>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const getAllVotes = () => good + neutral + bad
  const getAvgVotes = () => {
    if(getAllVotes() < 1)
      return 0;
    else
      return (good - bad) / getAllVotes();
  }
  const getPositive = () => {
    if(getAllVotes() < 1)
      return 0;
    else
      return good / getAllVotes();
  }

  if(getAllVotes() < 1){
    return ( 
      <>
      <h1>statistics</h1>
      There is no data
      </>
    )
  } else {
    return (
      <>
      <h1>statistics</h1>
      <table><tbody>
        <Statistic text="good" value={good}/>  
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={getAllVotes()}/>
        <Statistic text="avg" value={getAvgVotes()}/>
        <Statistic text="positive" value={getPositive()*100 + ' %'}/>
      </tbody></table>
      </>
    )
  }
}

const FeedbackButton = ({cbfunc,text}) => {
  return (
    <button onClick={cbfunc}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good+1)
  const neutralFeedback = () => setNeutral(neutral+1)
  const badFeedback = () => setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1><br/>
      <FeedbackButton cbfunc={goodFeedback} text="Good"/>
      <FeedbackButton cbfunc={neutralFeedback} text="Neutral"/>
      <FeedbackButton cbfunc={badFeedback} text="Bad"/>
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


