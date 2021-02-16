import React from 'react';
import { useSelector } from 'react-redux';

import './stats.scss';

import timerImg from '../../static/img/timer.png';
import accuracyImg from '../../static/img/accuracy.png';
import arrow from '../../static/img/arrow.png';

import { StatsItem } from './statsItem/StatsItem';
import { Button } from './Button/Button';

import { selectSpeed, selectAccuracy } from '../../store/fieldSlice';

export const Stats = () => {
  const speed = useSelector(selectSpeed);
  const accuracy = useSelector(selectAccuracy);

  return (
    <div className="stats">
      <StatsItem
        imgUrl={timerImg}
        imgAlt="Скорость"
        title="Скорость"
        data={speed}
        text="зн./мин."
      />
      <StatsItem
        imgUrl={accuracyImg}
        imgAlt="Точность"
        title="Точность"
        data={accuracy}
        text="%"
      />
      <Button imgUrl={arrow} />
    </div>
  )
}
