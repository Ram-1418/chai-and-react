import { Link } from 'react-router-dom';

const dummyPosts = [
  { id: 1, title: 'React Router Basics' },
  { id: 2, title: 'Hooks in React' },
  { id: 3, title: 'React Performance Tips' },
];

export default function Posts() {
  return (
    <>
      <h1>📝 Blog Posts</h1>
      <ul>
        {dummyPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
