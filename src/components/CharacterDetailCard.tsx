import {useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard.tsx";
import {Character} from "../types/RickAndMortyCharacter.ts";

export function CharacterDetailCard(props: {
    characters: Character[]
}) {
    const {id} = useParams();

    const getCharacter: Character | undefined = props.characters
        .find((character) => character.id.toString() === id);

    return getCharacter ? <CharacterCard key={getCharacter.id} character={getCharacter}/> :
        <p>Character not found</p>;
}