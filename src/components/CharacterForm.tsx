import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";
import "../styles/CharacterForm.css"
import Logo from "../../public/vite.svg";

const InitialCharacterState = {
    id: Math.floor(Math.random() * (1000 - 50 + 1)) + 50,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    image: Logo
}

export function CharacterForm(props: {
    characters: Character[]
}) {
    const [character, setCharacter] = useState<Character>(InitialCharacterState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCharacter(prevState => ({
            ...prevState,
            [name]: value,
        }));

    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(character)
        props.characters.push(character);
        setCharacter(InitialCharacterState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        value={character.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <input
                        name="status"
                        value={character.status}
                        onChange={handleChange}
                        placeholder="Status"
                    />
                </div>
                <div>
                    <label>Species:</label>
                    <input
                        name="species"
                        value={character.species}
                        onChange={handleChange}
                        placeholder="Species"
                    />
                </div>
                <div>
                    <label>Type:</label>
                    <input
                        name="type"
                        value={character.type}
                        onChange={handleChange}
                        placeholder="Type"
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <input
                        name="gender"
                        value={character.gender}
                        onChange={handleChange}
                        placeholder="Gender"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}