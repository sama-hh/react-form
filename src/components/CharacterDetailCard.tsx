import {useParams} from "react-router-dom";
import {characters} from "../Characters.ts";
import CharacterCard from "./CharacterCard.tsx";
import {Character} from "../types/RickAndMortyCharacter.ts";

export function CharacterDetailCard() {
    const {id} = useParams();

    const getCharacter: Character | undefined = characters
        .find((character) => character.id.toString() === id);

    return getCharacter ? <CharacterCard key={getCharacter.name} character={getCharacter}/> : <p>Character not found</p>;

}