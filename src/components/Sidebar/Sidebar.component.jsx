import './Sidebar.style.scss'
import AddIcon from '@mui/icons-material/Add';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssistantIcon from '@mui/icons-material/Assistant';

const Sidebar = () => {
    var iconStyle = {
        fontSize : "40px",
        marginTop : "10px",
        color : "rgba(0, 0, 0, .5)",
        transition : "all .5s ease-in-out",
        "&:hover" : {
            color : "rgba(0, 0, 0, .8)",
        }
        
        }
    return ( 
        <div className="sidebar-container">
            <ul>
                <li><AddIcon sx={iconStyle}/></li>
                <li>
                    <AnalyticsIcon sx={iconStyle} />
                </li>
                <li>
                    <AssistantIcon sx={iconStyle} />
                </li>

            </ul>
        </div>
     );
}
 
export default Sidebar;