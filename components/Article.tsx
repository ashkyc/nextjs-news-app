import React from 'react';
import Link from 'next/link';
import styles from '../styles/Article.module.scss';

const Article = ({ article }) => {
  return (
    <Link href="/feed/[id]" as={`/feed/${article.id}`}>
      <div className={styles['card']}>
        <h2>{article.title} &rarr;</h2>
        <p>{article.body}</p>
      </div>
    </Link>
  );
};

export default Article;
