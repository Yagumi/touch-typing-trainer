import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

export const Modal = ({ imgUrl, imgAlt, title, handleToggle, buttonText, children }) => {
  return (
    <div className="modal__wrapper">
      <section className="modal">
        <div className="modal__img">
          <img src={imgUrl} alt={imgAlt}/>
        </div>
        <h1 className="modal__title">{title}</h1>
        {children}
        <button
          className="modal__btn"
          onClick={handleToggle}
        >
          {buttonText}
        </button>
      </section> 
    </div>
  )
}

Modal.propTypes = ({
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node,
})