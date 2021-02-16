import React from 'react';
import PropTypes from 'prop-types';

import './fieldItem.scss';

export const FieldItem = React.memo(({ letter, isActive, isError }) => {
  if(isError) {
    return (
      <span
        className="field__item"
        style={{
          backgroundColor: isError ? '#F36747': 'white',
          color: isError && '#fff',  
        }}
      >
        {letter}
      </span>
    )
    
  } else {
    return (
      <span
        className="field__item"
        style={{
          backgroundColor: isActive ? '#5bc538': 'white',
          color: isActive && '#fff',    
        }}
      >
        {letter}
      </span>
    )
  }
  
})

FieldItem.propTypes = {
  letter: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isError: PropTypes.bool,
}