import SellerSideNav from "./SellerSideNav"
import {Outlet} from 'react-router-dom'
const SellerLayout =() =>{
    return(
        <>
        <SellerSideNav/>
        <div className="wrapper">
            <Outlet/>
        </div>
        </>
    )
}
export default SellerLayout;