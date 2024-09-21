import { useEffect } from 'react';
import Post from './components/Post';
import Profile from './components/Profile';
import { BlogContainer, PostsContainer } from './styles';
import { PostContext } from '../../contexts/PostContext';
import { useContextSelector } from 'use-context-selector';
import { Loading } from '../../components/Loading';
import { SearchForm } from './components/SearchForm';

export default function Blog() {
  const posts = useContextSelector(PostContext, (context) => context.posts);
  const loadingPosts = useContextSelector(
    PostContext,
    (context) => context.loadingPosts
  );
  const fetchPosts = useContextSelector(
    PostContext,
    (context) => context.fetchPosts
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BlogContainer>
      <Profile />
      <SearchForm quantityPosts={posts.length} />
      <PostsContainer>
        {!loadingPosts ? (
          posts.map((post) => (
            <Post
              key={post.id}
              number={post.number}
              created_at={post.createdAt}
              description={post.description}
              title={post.title}
            />
          ))
        ) : (
          <Loading size={32} />
        )}
      </PostsContainer>
    </BlogContainer>
  );
}
