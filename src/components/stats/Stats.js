import React from 'react';
import { useSelector } from 'react-redux';

import './stats.scss';

import timer from '../../static/img/timer.png';
import accuracy from '../../static/img/accuracy.png';
import arrow from '../../static/img/arrow.png';

import { StatsItem } from './statsItem/StatsItem';
import { Button } from './Button/Button';

import { selectNumberOfCorrectLetters, selectNumberOfErrors } from '../../store/fieldSlice';
import { selectStartTime } from '../../store/modalSlice';

export const Stats = () => {
  const numberOfCorrectLetters = useSelector(selectNumberOfCorrectLetters);
  const numberOfErrors = useSelector(selectNumberOfErrors);
  const startTime = useSelector(selectStartTime);

  const getSpeed = () => {
    if(startTime) {
      const timeLast =  Date.now() - startTime;
      const crm = numberOfCorrectLetters / ( timeLast / 1000 / 60 );
      const result = crm - (numberOfErrors /  (timeLast / 1000 / 60));

      if(result <= 0) return '0';
      return result.toFixed();
    }
    return '0';
  }

  const getAccuracy = () => {
    if(numberOfErrors) {
      const result = 100 - numberOfErrors * 100 / numberOfCorrectLetters;
      if(result <= 0) return '0';
      return result.toFixed(2);
    }
    return '100';
  }

  return (
    <div className="stats">
      <StatsItem
        imgUrl={timer}
        imgAlt="Скорость"
        title="Скорость"
        data={getSpeed()}
        text="зн./мин."
      />
      <StatsItem
        imgUrl={accuracy}
        imgAlt="Точность"
        title="Точность"
        data={getAccuracy()}
        text="%"
      />
      <Button imgUrl={arrow} />
    </div>
  )
}
