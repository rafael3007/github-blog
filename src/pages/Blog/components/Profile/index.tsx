import { FooterInformationsProfile, HeaderInformationsProfile, ImageContent, InformationsSection, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "../../../../components/Input";
import { ProfileContext } from "../../../../contexts/ProfileContext";
import { useContext } from "react";
import * as React from 'react';

export default function Profile() {

    const { profileInformations } = useContext(ProfileContext)

    return (
      <ProfileContainer>
        <ImageContent>
          <img src={profileInformations.avatar_url} />
        </ImageContent>
        <InformationsSection>
          <HeaderInformationsProfile>
            <h1>{profileInformations.name}</h1>
            <InputComponent
              url={profileInformations.url_profile}
              text="GITHUB"
            />
          </HeaderInformationsProfile>
          <p>{profileInformations.bio}</p>
          <FooterInformationsProfile>
            <a href={profileInformations.url_profile}>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profileInformations.username}</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{profileInformations.company}</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{profileInformations.followers} Seguidores</span>
            </a>
          </FooterInformationsProfile>
        </InformationsSection>
      </ProfileContainer>
    );
}
