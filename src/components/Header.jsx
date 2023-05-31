import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <div>
                <h1>Header</h1>
                <nav className="navbar">
                <Link to="/">Landing Page</Link>
                <Link to="/anonymization">Data Anonymization</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;