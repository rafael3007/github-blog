import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputContainer } from "./styles";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface InputComponentProps {
  text: string;
  url?: string;
}

export default function InputComponent({ text, url }: InputComponentProps) {
    return ( 
      <InputContainer href={url} >
        <span>{text}</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </InputContainer>
  )
}
