import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostContainer, PostDecription, PostHeader } from "./styles";

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
            <PostDecription>
                <p>{ description }</p>
            </PostDecription>
      </PostContainer>
  )
}
