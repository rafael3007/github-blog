import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterInformationsProfile, PostContainer, PostHeader, PostSection } from "./styles";
import {  faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "../../components/Link";

export default function Post() {
    return (
        <PostContainer>
            <PostHeader>
                <nav>
                    <a><FontAwesomeIcon icon={faChevronLeft} /><span>VOLTAR</span></a>
                    <Link text="VER NO GITHUB"/>
                </nav>
                <h1>JavaScript data types and data structures</h1>
                <FooterInformationsProfile>
                    <a href=""><FontAwesomeIcon icon={faGithub} /><span>Link profile</span></a>
                    <a href=""><FontAwesomeIcon icon={faCalendarDay} /><span>Há 1 dia</span></a>
                    <a href=""><FontAwesomeIcon icon={faComment} /><span>5 comentários</span></a>
                </FooterInformationsProfile>
            </PostHeader>
            <PostSection>

            </PostSection>
        </PostContainer>
    )
};
