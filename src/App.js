import { useState } from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import { NotificationMessage } from './Feedback/notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, neutral, bad };

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, curr) => acc + curr);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  const getStatisticsOptions = () => [
    ...Object.entries(state),
    ['total', countTotalFeedback()],
    ['positive feedback', countPositiveFeedbackPercentage() + `%`],
  ];

  return (
    <Section title="Please leave Feedback">
      <FeedbackOptions
        options={Object.keys(state)}
        onLeaveFeedback={handleFeedback}
      />

      {countTotalFeedback() === 0 ||
      isNaN(countPositiveFeedbackPercentage()) ? (
        <NotificationMessage />
      ) : (
        <Statistics options={getStatisticsOptions()} />
      )}
    </Section>
  );
}
