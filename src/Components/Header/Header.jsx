import './HeaderStyles.css'
import logo from '../../assets/img/logo.svg'
const Header = () =>{
    return(
      <div className='header-container'>
        <img className="header-img"src={logo} alt="Logo de Batatabit" />
        <div className="header--title-container">
        <h1>La próxima revolución en el intercambio de criptomodenas.</h1>
        <p>
          Batatabit te ayuda a navegar entre los diferentes precios y
          tendencias.
        </p>
        <a href="#plans" class="header--button">Conoce Nuestros Planes <span></span></a>
        </div>
      </div>  
    )
}
export default Header;