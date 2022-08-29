// pages/index.tsx

import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

// Import the generated Lists API and types from Keystone
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

type Post = {
  id: string;
  title: string;
  slug: string;
};

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Hello World! 👋🏻 </h1>
      <ul>
        {/* Render each post with a link to the content page */}
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = (await query.Post.findMany({ query: 'id title slug' })) as Post[];
  return {
    props: {
      posts,
    },
  };
}