import "../css/components/header.css"
import image from "../img/footer.png"
import { Link } from "react-router-dom"

const Header =()=> {
    return (
        <header className="header-main">
        <nav className="nav-container">
            <img src={image}/>
            <ul className="nav-button">
            <button className="button button-home"><Link to="/">HOME</Link></button>
            <button className="button button-video"><Link to="/NewVideo" >NUEVO VIDEO</Link></button>
            </ul>
        </nav>
        {/* <div className="banner-main">
        <img src="/img/banner.png" alt="Banner"/>
        </div> */}
    </header>
    )
}

export default Header