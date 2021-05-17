import React from 'react';
import { useRouter } from 'next/router';
import fetch from 'node-fetch';
import { serverUrl } from '../../../config';

const Article = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  );
};

//fetch data at build time
export const getStaticProps = async (context) => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
  //   );
  const res = await fetch(`${serverUrl}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const res = await fetch(`${serverUrl}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((feed) => feed.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
