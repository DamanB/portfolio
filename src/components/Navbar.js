import '../styles/navbar.css'
import { useState } from 'react';
import NavItems from './NavItems.js'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="navbar">
            <div className="dropdown-navitems">
                <div onClick={handleMenuClick} className="navbar-menu">
                    <span className="material-icons-round menu-icon">menu</span>
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