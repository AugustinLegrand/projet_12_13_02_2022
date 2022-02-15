import './Header.css'

export default function HeaderComponent() {

    return (
        <div className="header">
            <img className="header-logo" src="../../logo.svg" alt="Logo SportSee" />
            <nav className='header-navbar'>
                <ul>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/profil">Profil</a>
                    </li>
                    <li>
                        <a href="/settings">Réglage</a>
                    </li>
                    <li>
                        <a href="/community">Communauté</a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}