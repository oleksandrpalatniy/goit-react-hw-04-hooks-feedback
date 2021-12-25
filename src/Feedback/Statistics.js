import React from 'react';
import styles from './feedback.module.css';

const Statistics = ({ options }) => {
  return (
    <ul className={styles.List}>
      {options.map((item, index) => (
        <li key={index} className={styles.list_item}>
          <p>{item[0]}:</p>
          <p>{item[1]}</p>
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
