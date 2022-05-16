import {Link} from 'react-router-dom'

const SellerSideNav =() =>{
    return(
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <Link to="#">
                        Seller Panel
                    </Link>
                    
                </li>
                <li>
                    <Link to="manage">Dashboard</Link>
                </li>
                <li>
                    <Link to="books">Books</Link>
                </li>
                <li>
                    <Link to="genres">Genres</Link>
                </li>
                <li>
                    <Link to="orders">Orders</Link>
                </li>
                
            </ul>
        </div>
        

    )
}
export default SellerSideNav;