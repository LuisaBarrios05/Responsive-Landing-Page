import './FooterStyles.css'
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import logo from '../../assets/img/logo-footer.svg'
const Footer = () => {
  return (
    <div className="footer">
      <section className="left">
        <div className="social-icons">
          <a href="#"><CiLinkedin /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><CiInstagram /></a>
        </div>
      </section>
      <section className="right">
        <img src={logo} alt="Logo de Batatabit" className='logo-footer' />
      </section>

    </div>
  )
}
export default Footer;