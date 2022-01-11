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
                <li>
                <button>

                    <AddIcon sx={iconStyle}/>
                </button>
                    </li>
                <li>
                    <button>
                    <AnalyticsIcon sx={iconStyle} />
                    </button>
                </li>
                <li>
                    <button>
                    <AssistantIcon sx={iconStyle} />
                    </button>
                </li>

            </ul>
        </div>
     );
}
 
export default Sidebar;