import React from 'react';
import styles from '../styles/Article.module.scss';

const Article = ({ article }) => {
  return (
    <div className={styles['card']}>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};

export default Article;
