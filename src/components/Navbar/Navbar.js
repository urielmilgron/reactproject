import './Navbar.css'

const Navbar = () => {
    return(
        <header>
        <nav className="navHeader">
        <div className="divHeader">
        <a href="#" className="ancorHeader">Home</a>
        </div>
        <div className="divHeader">
        <a href="#" className="ancorHeader">Noticias</a>
        </div>
        <div className="divHeader">
        <a href="#" className="ancorHeader">Destacados</a>
        </div>
        <div className="divHeader">
        <a href="#" className="ancorHeader">Contacto</a>
        </div>
        </nav>
        </header>
    )
}

export default Navbar