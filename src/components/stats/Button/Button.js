import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './button.scss';

import { restart } from '../../../store/fieldSlice';
import { toggleModalStart } from '../../../store/modalSlice';

export const Button = ({ imgUrl }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(restart());
    dispatch(toggleModalStart());
  }
  return (
    <button
      className="stats__btn"
      onClick={handleClick}
    >
      <img
        className="stats__img"
        src={imgUrl}
        alt="Заново"
      />
      Заново
    </button>
  )
}

Button.propTypes = ({
  imgUrl: PropTypes.string.isRequired,
})

