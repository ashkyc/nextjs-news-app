import React from 'react';
import { useRouter } from 'next/router';
import fetch from 'node-fetch';

const Feed = ({ feed }) => {
  return (
    <>
      <h1>{feed.title}</h1>
      <p>{feed.body}</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
  );
  const feed = await res.json();

  return {
    props: {
      feed,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const feeds = await res.json();

  const ids = feeds.map((feed) => feed.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Feed;
