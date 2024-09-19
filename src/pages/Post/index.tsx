import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostContainer, PostHeader, PostSection } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Post() {
    return (
        <PostContainer>
            <PostHeader>
                <nav>
                    <div><FontAwesomeIcon icon={faChevronLeft} /><span>VOLTAR</span></div>
                    <div><span>VER NO GITHUB</span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></div>
                </nav>
                <h1>JavaScript data types and data structures</h1>
                <footer>
                <a href=""><FontAwesomeIcon icon={faGithub} /><span>Link profile</span></a>
                    <div><FontAwesomeIcon icon={faCalendarDay} /><span>Há 1 dia</span></div>
                    <div><FontAwesomeIcon icon={faComment} /><span>5 comentários</span></div>
                </footer>
            </PostHeader>
            <PostSection>

            </PostSection>
        </PostContainer>
    )
};
