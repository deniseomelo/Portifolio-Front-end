import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <header>
            <ul>
                <li><Link to='/'>IMC</Link></li>
            </ul>
        </header>
    )
}
export default Header;