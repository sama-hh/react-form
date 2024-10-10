import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Characters from "./components/Characters.tsx";
import {Header} from "./components/Header.tsx";
import {CharacterDetailCard} from "./components/CharacterDetailCard.tsx";
import {CharacterForm} from "./components/CharacterForm.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import {RickAndMortyResponse} from "./types/RickAndMortyResponse.ts";

export default function App() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [info, setInfo] = useState({});
    const [page, setPage] = useState<number>(1);

    const getCharacters = function () {
        axios.get<RickAndMortyResponse>(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((response) => {
                    setCharacters(response.data.results);
                    setInfo(response.data.info);
                }
            )
            .catch(() => {
                    console.log("API request failed.");
                }
            )
    }
    useEffect(
        getCharacters,
        [page]
    );

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<Characters info={info} setPage={setPage} characters={characters}/>}/>
                <Route path="/characters/:id" element={<CharacterDetailCard characters={characters}/>}/>
                <Route path="/characters/add" element={<CharacterForm characters={characters}/>}/>
            </Routes>
        </>
    );
}


