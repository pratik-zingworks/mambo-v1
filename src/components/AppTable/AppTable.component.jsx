import "./AppTable.style.scss"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const AppTable = () => {
    return ( 
        <div className="tableContainer">
            <div className="tableTitle">
                <h2>Super Admin</h2>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Contact Name</th>
                            <th>Contact Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>pratik.sonar</td>
                            <td>Pratik Sonar</td>
                            <td>pratik.sonar@zingworks.in</td>
                            <td>
                                <HighlightOffIcon sx={{
                                    cursor: "pointer"
                                }} />
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>john.gates</td>
                            <td>John Gates</td>
                            <td>john.gates@zingworks.in</td>
                            <td>
                                <HighlightOffIcon sx={{
                                    cursor: "pointer"
                                }} />
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default AppTable;