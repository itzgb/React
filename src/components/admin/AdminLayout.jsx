import AdminSideNav from "./AdminSideNav"
import {Outlet} from 'react-router-dom'
const AdminLayout =() =>{
    return(
        <>
        <AdminSideNav/>
        <div className="wrapper">
            <Outlet/>
        </div>
        </>
    )
}
export default AdminLayout;