import React from 'react';
import PropTypes from 'prop-types';

export const FieldItem = ({ letter, isActive }) => {
  return (
    <span style={{backgroundColor: isActive ? 'green' : 'none'}}>{letter}</span>
  )
}

FieldItem.propTypes = {
  letter: PropTypes.string,
  isActive: PropTypes.bool,
}