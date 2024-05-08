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
                <span className="title">ReactFacts</span>
                <ul className="nav-items">
                    <li>React Course - Project 1</li>
                </ul>
            </nav>
        </header>
    )
}