import { useForm } from "react-hook-form";
import { SearchFormContainer, SearchFormInputContainer, SearchFormSection } from "./styles";
import * as z from "zod";
import { PostContext } from "../../../../contexts/PostContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { memo } from "react";
interface SearchFormProps {
    quantityPosts: number;
}

const SearchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>

const SearchFormComponent = ({ quantityPosts }: SearchFormProps) => {

    const fetchPosts = useContextSelector(PostContext, (context) => context.fetchPosts)
    
    const { register, watch } = useForm<SearchFormInputs>({
      resolver: zodResolver(SearchFormSchema),
    });


    async function handleKeyDown(event: React.KeyboardEvent){
      if (event.key === 'Enter') {
        const query = watch('query');
        fetchPosts(encodeURIComponent(query));
      }
    }

    return (
        <SearchFormContainer>
            <SearchFormSection>
                <span>Publicações</span>
                <span>{ quantityPosts } publicações</span>
            </SearchFormSection>
            <SearchFormInputContainer>
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    onKeyDown={handleKeyDown}
                    {...register("query")}
                />
            </SearchFormInputContainer>
      </SearchFormContainer>
    )
}

export const SearchForm = memo(SearchFormComponent)
