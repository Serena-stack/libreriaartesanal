const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <nav id="navbar">
        <div className="logo">
            <a href="#">Librería Artesanal</a>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#books">Catálogo</a></li>
            <li><a href="#events">Eventos</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </nav>
    );
    };
    
    export default NavBar;
    