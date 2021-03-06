import { HashLink } from 'react-router-hash-link';

const NavItems = ({menuOpen}) => {
    return ( 
        <div className="menuItems">
            {menuOpen &&
                <div className="nav-links">
                    <HashLink to="/#hero" >Home</HashLink>
                    <HashLink to="/#contact">Contact</HashLink>
                    <a href="https://drive.google.com/file/d/1qXeLp_wptBpARxylE6XOrHZEzTeuvcrK/view?usp=sharing" target="_blank" rel = "noopener noreferrer">Resume</a>
                </div>
            }
        </div>
    );
}
 
export default NavItems;