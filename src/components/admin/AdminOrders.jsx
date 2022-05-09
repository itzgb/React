import { useEffect,useState } from "react"
import axios from '../../axios'
import {Link} from 'react-router-dom'
import {imgUrl} from '../../api/api'
const AdminOrders = () =>{
    
    const [orderData,setOrderData] = useState([]);
    

    const FetchAllDatalist = async() =>{
        
        await axios.get("admin/getOrders")
        .then(d=>{
            console.log(d);
            setOrderData(d.data);
        })
        .catch(err=>console.log(err))
    }
    const handleDeleteOrder =async(id) =>{}

    useEffect(()=>{
        FetchAllDatalist();
    },[])

    return(
        <>
        <div className="container">
        { orderData.length === 0 ?
            <div>No Orders Yet</div>
                :
                <>
                        
                            <table className="table table-striped">
                            <caption>List of orders</caption>
                            { orderData.map( ( item,index) => 
                                <>
                                <thead>
                                    <tr>
                                        <td >Order ID #{item.id}</td>
                                        <td colSpan={4}>
                                            <div> Ordered by {item.user_id.username}</div>
                                        </td>
                                        <td >
                                                <span className="btn btn-danger" >Delete</span>
                                                </td>
                                
                                    </tr>
                                    </thead>
                                    
                                        <tr>
                                        
                                            <th scope="col">Image</th>
                                            <th scope="col">Title</th>
                                            <th scope='col'>Price</th>
                                            <th scope='col'>Quantity</th>
                                            <th scope='col'>Seller</th>
                                            <th scope='col'>Subtotal</th>
                                        </tr>
                                        <tbody>
                                    {item.order_details_id.map((i)=>

                                        <>
                                            <tr>
                                                <td> <img className = "imgcs" src ={imgUrl+"/"+i.book_id.imgurl} /> </td>
                                                <td>{i.book_id.title}</td>
                                                <td>{i.book_id.price}</td>
                                                <td>{i.quantity}</td>
                                                
                                                <td>Sold by {i.book_id.user.username}</td>
                                                <td>  
                                                {i.quantity * i.book_id.price}
                                                </td>
                                                
                                                
                                            </tr>
                                        </>
                                        ) }
                                        
                                    <tr >
                                        <td colSpan={6}>

                                        <b>Delivery Address:  </b>
                                        {item.addr_id.line1},{item.addr_id.line2},{item.addr_id.state} -{item.addr_id.postal_code},{item.addr_id.city} , {item.addr_id.country}
                                        </td>
                                    </tr>
                                    <tr>
                                    </tr>   
                                    <tr >
                                        <td colSpan={6}>

                                        <b>Delivery Mobile:  </b>
                                        {item.delivery_number}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}></td>
                                        <td>Total:</td>
                                        <td>{item.total / 100}</td>
                                    </tr>
                                    
                            </tbody>
                                </>
                                )
                            }
                            </table>
                    </>
                }
</div>
</>
)
}

export default AdminOrders;