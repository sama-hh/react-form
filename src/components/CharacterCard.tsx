import {Character} from "../types/RickAndMortyCharacter.ts";
import "../styles/CharacterCard.css";
import {useNavigate} from "react-router-dom";

type CharacterCardProps = {
    character: Character;
}

export default function CharacterCard(props: Readonly<CharacterCardProps>) {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/characters/${id}`)
    }

    return (
        <div className="character-card" onClick={() => handleClick(props.character.id)}>
            <img src={props.character.image} alt="Image"/>
            <div className="character-card-info">
                <h3>{props.character.name}</h3>
                <p>Species: {props.character.species}</p>
                <p>Status: {props.character.status}</p>
            </div>
        </div>
    );
}
