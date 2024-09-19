import Post from "./components/Post";
import Profile from "./components/Profile";
import SearchForm from "./components/SearchForm";
import { BlogContainer, PostsContainer } from "./styles";

export default function Blog() {
    const posts = [1,2,3,4,5,6,7]

    return (
        <BlogContainer>
            <Profile />
            <SearchForm />
            <PostsContainer>
            {
                posts.map(post => (
                    <Post key={post} />
                ))
            }
            </PostsContainer>
        </BlogContainer>
    )
}