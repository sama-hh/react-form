import {Link} from "react-router-dom";
import "../styles/Header.css"

export function Header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/characters/add">Add new character</Link>
        </div>
    )
}