import { HeaderContainer } from "./styles";

import Logo from "/logo.svg";

export default function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} />
        </HeaderContainer>
    )
}