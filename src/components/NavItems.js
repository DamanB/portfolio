const NavItems = ({menuOpen}) => {
    return ( 
        <div className="menuItems">
            {menuOpen &&
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/">Resume</a>
                    <a href="/">Contact</a>
                </div>
            }
        </div>
    );
}
 
export default NavItems;