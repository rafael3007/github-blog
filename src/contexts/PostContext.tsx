import { ReactNode, useEffect, useState } from "react";
import { api } from "../api/axios";
import { Post } from "../@types/Post";
import { ApiResponsePost } from "../@types/ApiResponsePost";
import { createContext } from "use-context-selector";

interface PostContextType {
    loadingPosts: boolean;
    posts: Array<Post>;
    fetchPosts: (q?:string) => Promise<Array<Post>>;
}

interface PostProviderProps {
    children: ReactNode;
}

export const PostContext = createContext<PostContextType>({} as PostContextType);

export default function PostProvider({ children }: PostProviderProps) {
    
    const [loadingPosts, setLoadingPost] = useState(true);
    const [posts, setPosts] = useState<Array<Post>>([])
    
    const fetchPosts = async (query?: string): Promise<Array<Post>> => {

        setLoadingPost(true)

        const { data } :ApiResponsePost = await api.get(`/search/issues?q=${query??''}%20repo:rocketseat-education/reactjs-github-blog-challenge`)//%20repo:rafael3007/dt-money`)

        const newPosts: Array<Post> = data.items.map(item => {
            const description = item.body?.length ? item.body.substring(0,150).concat("...") : ""
            return {
                id: item.id,
                username: item.user.login,
                createdAt: item.created_at,
                quantityComments: item.comments,
                body: item.body??"",
                html_url: item.html_url,
                title: item.title,
                description,
                number:item.number
            }
        })

        setPosts(newPosts)
        setLoadingPost(false)
        return newPosts
    }

    useEffect(() => {
        setLoadingPost(true)
        fetchPosts()

    }, [])
    
    return (
        <PostContext.Provider
            value={{
                loadingPosts,
                fetchPosts,
                posts
            }}
        >
            {children}
        </PostContext.Provider>
    )
}