import React ,{useState}from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {
    const [showMediaIcons,setShowMediaIcons]=useState(false);

    return (
        <>

            <nav className="main-nav">
                <div className="logo">
                <img src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...WDrRJPnx3OwXs1M3EMoAJtlicqjvBi8Pk+" style={{width:"120px",height:"50px"}}/>

                    <h2>
                        <span>G</span>ender &nbsp;
                        <span>E</span>quality
                    </h2>
                </div>
                <ul className= {showMediaIcons ? "menu-link mobile-menu-link": "menu-link"}>
                    <li className="link" onClick={()=>setShowMediaIcons(!showMediaIcons)}><NavLink to="/" >Home</NavLink></li>
                    <li className="link" onClick={()=>setShowMediaIcons(!showMediaIcons)}><NavLink to="/about">About</NavLink></li>
                    <li className="link" onClick={()=>setShowMediaIcons(!showMediaIcons)}><NavLink to="/contact">Contact</NavLink></li>
                    <li className="link" onClick={()=>setShowMediaIcons(!showMediaIcons)}><NavLink to="/donate">Donate</NavLink></li>
                </ul>
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li className="vipul"><a href="https://facebook.com/"><FaFacebookSquare className="facebook" style={{fontSize:"30px"}} /></a></li>
                        <li className="vipul"><a href="https://www.instagram.com/"><FaInstagramSquare className="instagram" style={{fontSize:"30px"}} /></a></li>
                        <li className="vipul"><a href="https://www.youtube.com/"><FaYoutubeSquare className="youtube" style={{fontSize:"30px"}} /></a></li>
                    </ul>
                    <div className="hamburger-menu">
                        <GiHamburgerMenu onClick={()=>setShowMediaIcons(!showMediaIcons)}/>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar;