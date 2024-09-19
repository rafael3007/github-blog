import { SearchFormContainer, SearchFormInputContainer, SearchFormSection } from "./styles";

export default function SearchForm(){
    return (
        <SearchFormContainer>
            <SearchFormSection>
                <span>Publicações</span>
                <span>6 publicações</span>
            </SearchFormSection>
            <SearchFormInputContainer>
                <input type="text" placeholder="Buscar conteúdo" />
            </SearchFormInputContainer>
      </SearchFormContainer>
    )
}
