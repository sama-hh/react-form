import '../App.css'
import CharacterGallery from "./CharacterGallery.tsx";
import {useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";

export default function Characters(props: {
    characters: Character[]
}) {
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = props.characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters}/>
                    : <p>No characters found</p>
            }
        </>
    );
}