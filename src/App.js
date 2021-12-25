import React from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import { NotificationMessage } from './Feedback/notification';

class App extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, curr) => acc + curr);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  getStatisticsOptions = () => [
    ...Object.entries(this.state),
    ['total', this.countTotalFeedback()],
    ['positive feedback', this.countPositiveFeedbackPercentage() + `%`],
  ];

  render() {
    return (
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        />

        {this.countTotalFeedback() === 0 ||
        isNaN(this.countPositiveFeedbackPercentage()) ? (
          <NotificationMessage />
        ) : (
          <Statistics options={this.getStatisticsOptions()} />
        )}
      </Section>
    );
  }
}

export default App;
