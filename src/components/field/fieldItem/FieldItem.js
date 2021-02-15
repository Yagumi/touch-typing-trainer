import React from 'react';
import PropTypes from 'prop-types';

export const FieldItem = React.memo(({ letter, isActive, isError }) => {
  console.log(isError)
  if(isError) {
    return (
      <span
        style={{
          backgroundColor: isError ? 'red': 'white'  
        }}
      >
        {letter}
      </span>
    )
    
  } else {
    return (
      <span
        style={{
          backgroundColor: isActive ? 'green': 'white'  
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