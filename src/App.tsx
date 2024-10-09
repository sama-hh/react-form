import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Characters from "./components/Characters.tsx";
import {Header} from "./components/Header.tsx";
import {CharacterDetailCard} from "./components/CharacterDetailCard.tsx";
import {CharacterForm} from "./components/CharacterForm.tsx";

export default function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/characters/:id" element={<CharacterDetailCard/>}/>
                <Route path="/characters/add" element={<CharacterForm/>}/>
            </Routes>
        </>
    );
}


