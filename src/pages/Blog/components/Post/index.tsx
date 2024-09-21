import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostContainer, PostDescription, PostHeader } from "./styles";
import ReactMarkdown from "react-markdown";

interface PostProps {
    title: string;
    created_at: string;
    description: string;
    number: number;
}

export default function Post({ title, created_at, description, number }:PostProps) {
    return (
        <PostContainer to={`/post/${number}`}>
            <PostHeader>
                <h1>{title}</h1>
                <span>{formatDistanceToNow(new Date(created_at), {
                    addSuffix: true,
                    locale: ptBR
                })}</span>
            </PostHeader>
            <PostDescription>
                <p><ReactMarkdown>{ description }</ReactMarkdown></p>
            </PostDescription>
      </PostContainer>
  )
}
