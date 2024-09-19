import { FooterInformationsProfile, HeaderInformationsProfile, ImageContent, InformationsSection, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "../../../../components/Input";

export default function Profile() {
    return (
        <ProfileContainer>
            <ImageContent>
                <img src="https://github.com/rafael3007.png"  />
            </ImageContent>
            <InformationsSection>
                <HeaderInformationsProfile>
                    <h1>Rafael Brito</h1>
                    <InputComponent text="GITHUB" />
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
