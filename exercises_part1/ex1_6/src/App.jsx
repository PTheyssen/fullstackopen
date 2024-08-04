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

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistic = ({ goodClicks, neutralClicks, badClicks }) => {
  const totalClicks = goodClicks + neutralClicks + badClicks;
  if (totalClicks === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>no feedback given</p>
      </>
    )
  } else {
    const average = (goodClicks - badClicks) / totalClicks
    const postivePercentage = goodClicks / totalClicks * 100
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text={'good'} value={goodClicks} />
            <StatisticsLine text={'neutral'} value={neutralClicks} />
            <StatisticsLine text={'bad'} value={badClicks} />
            <StatisticsLine text={'all'} value={totalClicks} />
            <StatisticsLine text={'average'} value={isNaN(average) ? 'not available with no votes' : average} />
            <StatisticsLine text={'positive'} value={isNaN(postivePercentage) ? 'not available with no votes' : postivePercentage + '%'} />
          </tbody>
        </table>
      </>
    )
  }
}

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