import React from 'react';
import { useSelector } from 'react-redux';

import { Modal } from './components/modal/Modal';
import { selectArticle } from './store/modalSlice';

export const App = () => {
  const article = useSelector(selectArticle);
  return (
    <div className="App">
      <Modal />
      <p>{article}</p>
    </div>
  );
}
