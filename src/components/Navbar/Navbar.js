import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return(
        <header>
            <div className="headerLogo">

            <img className="logo" src={logo}></img>
            </div>
        <nav className="navHeader">
        <div className="divHeader">
        <a href="#" className="ancorHeader">Home</a>
        </div>
        <div className="divHeader">
        <a href="#" className="ancorHeader">Noticias</a>
        </div>
        <div className="divHeader">
        <a href="#" className="ancorHeader">Ultimas noticias</a>
        </div>
        <div className="divHeader">
        <a href="#" className="ancorHeader">Contacto</a>
        </div>
        </nav>
        <div className="headerUser">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
</svg> <h6 className="headerH6">Iniciar sesión</h6></a>
        </div>
        </header>
    )
}

export default Navbar