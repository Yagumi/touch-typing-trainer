import React from 'react';
import { useSelector } from 'react-redux';

import "./field.scss";

import { 
  selectArticle,
} from '../../store/fieldSlice';
import { FieldList } from './fieldList/FieldList';
import { Stats } from '../stats/Stats';

export const Field = () => {
  const letters = useSelector(selectArticle);

  return (
    <div className="field">
      <FieldList
        letters={letters}
      />
      <Stats />
    </div>
  )
}
