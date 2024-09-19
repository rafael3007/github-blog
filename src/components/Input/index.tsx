import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputContainer } from "./styles";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface InputComponentProps {
  text: string;
}

export default function InputComponent({ text }: InputComponentProps) {
    return ( 
      <InputContainer href="">
        <span>{text}</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </InputContainer>
  )
}
