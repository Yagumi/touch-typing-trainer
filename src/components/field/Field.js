import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectArticle } from '../../store/modalSlice';

import "./field.scss";

import { FieldList } from './fieldList/FieldList';

export const Field = () => {
  const article = useSelector(selectArticle);
  const [letters, setLetters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(article.length !== 0) {
      const splitArticle = () => {
        setLetters(article.split(''));
      }
      splitArticle()
    }
  }, [article]);

  return (
    <div className="field">
      <FieldList
        letters={letters}
        currentIndex={currentIndex}
      />
    </div>
  )
}
