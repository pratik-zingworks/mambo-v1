import './Sidebar.style.scss'
import AddIcon from '@mui/icons-material/Add';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssistantIcon from '@mui/icons-material/Assistant';

const Sidebar = () => {
    return ( 
        <div className="sidebar-container">
            <ul>
                <li><AddIcon sx={{
                    fontSize : "40px",
                    marginTop : "10px",
                    color : "rgba(0, 0, 0, .5)"
                    
                    }}/></li>
                <li>
                    <AnalyticsIcon sx={{
                    fontSize : "40px",
                    marginTop : "10px",
                    color : "rgba(0, 0, 0, .5)"
                    
                    }} />
                </li>
                <li>
                    <AssistantIcon sx={{
                    fontSize : "40px",
                    marginTop : "10px",
                    color : "rgba(0, 0, 0, .5)"
                    
                    }} />
                </li>

            </ul>
        </div>
     );
}
 
export default Sidebar;