import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.style.scss';
const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <nav>
                <div className="navbar-logo">
                    <h3>LOGO</h3>
                </div>
                <div className="navbar-search-container">
                    <TextField variant = "outlined" size="small"
                     InputProps={{
                        endAdornment: (
                        //   <InputAdornment position="start">
                            <SearchIcon />
                        //   </InputAdornment>
                        ),
                      }}
                      placeholder='Search'
                    fullWidth sx={{background: "#fff"}}/>
                </div>
                <div className= "menu-container">
                    <ul>
                        <li><a href="#" id="active">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Help</a></li>  
                        <li><a href="#" id="logout">Logout</a></li>
                    </ul>
                </div>
            </nav>
            <div className="profile-container">
                <div className="profile-picture">

                </div>
            </div>
        </div>
     );
}
 
export default Navbar;