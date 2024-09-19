import { FooterInformationsProfile, HeaderInformationsProfile, ImageContent, InformationsSection, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
    return (
        <ProfileContainer>
            <ImageContent>
                <img src="https://github.com/rafael3007.png"  />
            </ImageContent>
            <InformationsSection>
                <HeaderInformationsProfile>
                    <h1>Rafael Brito</h1>
                    <a rel="stylesheet" href="">
                        <span>GITHUB</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </HeaderInformationsProfile>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <FooterInformationsProfile>
                    <a href=""><FontAwesomeIcon icon={faGithub} /><span>Link profile</span></a>
                    <a href=""><FontAwesomeIcon icon={faBuilding} /><span>Business</span></a>
                    <a href=""><FontAwesomeIcon icon={faUserGroup} /><span>32 Seguidores</span></a>
                </FooterInformationsProfile>
            </InformationsSection>
        </ProfileContainer>
    )
}
