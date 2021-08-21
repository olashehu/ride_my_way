import UsersSidebarNav from '../newdashboardUser/usersNavigationFolder/UsersSidebarNav';
import { Table } from '../tablecomponent/Table';


const RideHistory = () => {
    return (
        <UsersSidebarNav>
            <h1 style={{textAlign:'center', fontSize: '1.8rem'}}>User History</h1>
            <Table 
              Date = '05-04-2021'
              Time='09:30am'
              Location='Ilorin'
              Destination='Ibadan'
              Price='2000'
              Status='completed'
            />
        </UsersSidebarNav>
    )
}

export default RideHistory
