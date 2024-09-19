import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "./styles";

interface LinkComponentProps {
  text: string;
}

export default function Link({ text }:LinkComponentProps) {
  return ( 
    <LinkContainer href="">
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </LinkContainer>
)
}
