import React from 'react';
import styles from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.button_container}>
      {options.map((item, index) => (
        <li key={index}>
          <button type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
