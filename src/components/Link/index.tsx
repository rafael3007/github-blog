import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "./styles";

interface LinkComponentProps {
  text: string;
  path: string;
}

export default function Link({ text, path }:LinkComponentProps) {
  return ( 
    <LinkContainer to={path}>
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </LinkContainer>
)
}
