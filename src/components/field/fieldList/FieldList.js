import React from 'react';
import PropTypes from 'prop-types';

import './fieldList.scss';

import { FieldItem } from '../fieldItem/FieldItem';

export const FieldList = ({letters, currentIndex}) => {
  return (
    <div className="field__list">
      {
        letters.map((letter, index) => (
          <FieldItem 
            key={index}
            letter={letter}
            isActive={currentIndex === index && true}
          />
        ))
      }
    </div>
  )
}

FieldList.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string),
  currentIndex: PropTypes.number,
}