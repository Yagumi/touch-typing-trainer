import React from 'react';
import { useSelector } from 'react-redux';

import { Modal } from './components/modal/Modal';
import { selectIsOpen, selectArticle } from './store/modalSlice';

export const App = () => {
  const article = useSelector(selectArticle);
  const isOpenModal = useSelector(selectIsOpen);

  return (
    <div className="App">
      {isOpenModal && <Modal />}
      <p>{article}</p>
    </div>
  );
}
