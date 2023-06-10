import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/FeedbackStatistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(e) {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      
      case 'bad':
        setBad(bad => bad + 1);
        break;
      
      default:
        return;
    }
  }
  
  const countTotalFeedback = (e) => {
    return Object.values(e).reduce((total, prev) => (total += prev));
  };

   const countPositiveFeedbackPercentage = totalFeedbacks => {
    if (totalFeedbacks > 0) return Math.round((good / totalFeedbacks) * 100);
    return 0;
    
  };

  const totalFeedbacks = countTotalFeedback({ good, neutral, bad });
  
  const positiveFeedbacks = countPositiveFeedbackPercentage(totalFeedbacks);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[ 'good', 'neutral', 'bad' ]}
          onLeaveFeedback={onLeaveFeedback}
        />    
      </Section>

      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positiveFeedbacks={positiveFeedbacks}
          />
        )
          : (<Notification message="There is no feedback" />)
        }
      </Section>
    </>
      
  );
};