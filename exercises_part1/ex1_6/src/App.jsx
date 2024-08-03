import { useState } from 'react'


const Button = ({ onClick, text }) =>
  <button onClick={onClick}>{text}</button>


const Feedback = ({ onClickGood, onClickNeutral, onClickBad }) =>
(
  <>
    <h1>Give Feedback</h1>
    <Button onClick={onClickGood} text={'good'} />
    <Button onClick={onClickNeutral} text={'neutral'} />
    <Button onClick={onClickBad} text={'bad'} />
  </>
)

const Statistic = ({ goodClicks, neutralClicks, badClicks }) => (
  <>
    <h1>Statistics</h1>
    <p>good {goodClicks}</p>
    <p>neutral {neutralClicks}</p>
    <p>bad {badClicks}</p>
  </>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Feedback
        onClickGood={handleGoodClick}
        onClickNeutral={handleNeutralClick}
        onClickBad={handleBadClick}
      />
      <Statistic
        goodClicks={good}
        neutralClicks={neutral}
        badClicks={bad}
      />
    </div>
  )
}

export default App