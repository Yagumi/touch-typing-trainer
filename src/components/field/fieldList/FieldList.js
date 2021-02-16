import React from 'react';
import PropTypes from 'prop-types';

import './fieldList.scss';

import { FieldItem } from '../fieldItem/FieldItem';

export const FieldList = ({letters}) => {
  return (
    <div className="field__list">
      {letters
        ? letters.map( item => (
          <FieldItem 
            key={item.id}
            letter={item.letter}
            isActive={item.isActive}
            isError={item.isError}
          />
        ))
        : null
      }
    </div>
  )
}

FieldList.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    letter: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
  })),
}