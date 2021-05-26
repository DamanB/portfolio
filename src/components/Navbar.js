import '../styles/navbar.css'
import { useState } from 'react';
import NavItems from './NavItems.js'

const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }
    const animate = props.animate;
    const [navbarActive, setNavbarActive] = useState(false);
    const activateNavbar = () => {
        if (animate && window.scrollY > window.innerHeight-100)
        {
            setNavbarActive(true)
        }
        else
        {
            setNavbarActive(false)
        }
    }    
    window.addEventListener('scroll', activateNavbar);

    return (
        <nav className={(!animate || navbarActive) ? 'navbar active' : 'navbar'}>
            <div className="dropdown-navitems">
                <div onClick={handleMenuClick} className="navbar-menu">
                    {!menuOpen && <span className="material-icons menu-icon">menu</span>}
                    {menuOpen && <span className="material-icons menu-icon">menu_open</span>}
                </div>
                <NavItems menuOpen={menuOpen} />
            </div>
            <div className="flat-navitems">
                <NavItems menuOpen={true} />
            </div>
        </nav>
    );
}

export default Navbar;