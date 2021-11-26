import MainLogo from "../../Assets/Light.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
        <div>
        
            <img className="main-logo1" src={MainLogo} alt="logo-icon"></img>
        </div>
        <div className="Copyright">
          <p className="Footer-text">Copyright</p>
        </div>
      </footer>
    )
}


export default Footer;