import React from 'react';
import PropTypes from 'prop-types';

import './statsItem.scss';

export const StatsItem = ({ imgUrl, imgAlt, title, data, text }) => {
  return (
    <div className='stat'>
      <div className='stat__img-wrapper'>
        <img
          className='stat__img'
          src={imgUrl}
          alt={imgAlt} />
        <span className="stat__title">{title}</span>
      </div>
      <div className="stat__main-info">
        <span className='stat__data'>{data}</span>
        <span className='stat__text'>{text}</span>
      </div>
    </div>
  )
}

StatsItem.propTypes = ({
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
})
