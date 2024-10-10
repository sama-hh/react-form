import '../App.css'
import CharacterGallery from "./CharacterGallery.tsx";
import {useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";

type CharactersProps = {
    characters: Character[],
    setPage: any,
    info: any
}

export default function Characters(props: CharactersProps) {
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = props.characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    const handlePreviousPage = () => {
        if (props.info.prev)
            props.setPage((prevState: number) => prevState - 1);
    }

    const handleNextPage = () => {
        if (props.info.next)
            props.setPage((prevState: number) => prevState + 1);
    }

    return (
        <>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters}/>
                    : <p>No characters found</p>
            }

            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={props.info.prev === null}>Previous</button>
                <button onClick={handleNextPage} disabled={props.info.next === null}>Next</button>
            </div>
        </>
    );
}