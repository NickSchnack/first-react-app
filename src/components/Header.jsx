import reactLogo from '../assets/react.svg'

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img
                    className="logo"
                    src={reactLogo}
                    alt="React Logo."
                ></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}