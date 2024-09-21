import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterInformationsProfile, PostContainer, PostHeader, PostSection } from "./styles";
import {  faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useParams, Link as LinkRouter } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../api/axios";
import InputComponent from "../../components/Input";
import { PostInformations } from "../../@types/PostInformations";
import { Loading } from "../../components/Loading";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
interface apiPostIssues {
    data: PostInformations
}

export default function Post() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [postInformations, setPostInformation] = useState<PostInformations>({} as PostInformations);

    const fetchPost = useCallback(async () => {
        const {data}:apiPostIssues = await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`);
        setPostInformation(data);
        setLoading(false)
      }, [])
  
    useEffect(() => {
        setLoading(true);
        if (postInformations) {
            fetchPost();
        }
    }, []);
    return (
        <PostContainer>
            {!loading ? (
                <>
                    <PostHeader>
                        <nav>
                            <LinkRouter to="/"><FontAwesomeIcon color="#3A536B" icon={faChevronLeft} /><span>VOLTAR</span></LinkRouter>
                            <InputComponent url={postInformations.html_url} text="VER NO GITHUB" />
                        </nav>
                        <h1>JavaScript data types and data structures</h1>
                        <FooterInformationsProfile>
                            <a href={postInformations.user.html_url}><FontAwesomeIcon color="#3A536B" icon={faGithub} /><span>{ postInformations.user.login}</span></a>
                            <a><FontAwesomeIcon color="#3A536B" icon={faCalendarDay} /><span>{formatDistanceToNow(new Date(postInformations.created_at), {
                                addSuffix: true,
                                locale: ptBR
                            })}</span></a>
                            <a href={postInformations.comments_url}><FontAwesomeIcon color="#3A536B" icon={faComment} /><span>{postInformations.comments} comentários</span></a>
                        </FooterInformationsProfile>
                    </PostHeader>
                    <PostSection>
                        <p><ReactMarkdown>{ postInformations.body}</ReactMarkdown></p>
                    </PostSection>
                </>
            ) : (<Loading size={32} />)
            }
        </PostContainer>
    )
};
