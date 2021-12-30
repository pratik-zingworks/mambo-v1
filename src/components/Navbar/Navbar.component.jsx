import './Navbar.style.scss';
const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <nav>
                <div className="navbar-logo">
                    <h3>MAMBO</h3>
                </div>
                <ul>
                    <li><a href="#" id="active">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Help</a></li>  
                    <li><a href="#" id="logout">Logout</a></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;