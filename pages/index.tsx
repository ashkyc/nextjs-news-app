import React from 'react';
import Article from '../components/Article';
import fetch from 'node-fetch';
import { NEXT_PUBLIC_NEWS_KEY, serverUrl } from '../config';

import styles from '../styles/Home.module.scss';

export default function Home({ articles }) {
  const [page, setPage] = React.useState<number>(0);

  return (
    <div>
      <h1>Welcome To Next.js News App</h1>
      <div className={styles['grid']}>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?_limit=6`,
  // );
  const res = await fetch(`${serverUrl}/api/articles`);
  const articles = await res.json();

  // const res = await fetch(
  //   `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page}apiKey=${NEXT_PUBLIC_NEWS_KEY}`,
  // );
  // const newsFeed = await res.json();

  return {
    props: {
      articles,
    },
  };
};
