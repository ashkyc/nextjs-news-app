import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import fetch from 'node-fetch';
import { NEXT_PUBLIC_NEWS_KEY } from '../config';

export default function Home({ newsFeed }) {
  console.log(newsFeed);
  return (
    <div>
      <h1>Welcome To Next.js News App</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?_limit=6`,
  // );
  // const articles = await res.json();

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${NEXT_PUBLIC_NEWS_KEY}`,
  );
  const newsFeed = await res.json();

  return {
    props: {
      newsFeed,
    },
  };
};
