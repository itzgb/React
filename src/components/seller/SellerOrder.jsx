import { useEffect , useState } from "react";
import axios from '../../axios';
import { imgUrl } from "../../api/api";
const SellerOrder = () =>{
    const [order,setOrder] = useState([])
    const FetchAllOrderlist = async() =>{
        await axios.get("seller/getOrders")
        .then(d=>{
            console.log(d);
            setOrder(d.data);
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        FetchAllOrderlist();
    },[])

    return(
        <>
        { order.length === 0 ?
                (<div>No Orders Yet</div>)
                :
                    <>
                        <h2>Order Items</h2>
                        
                            <table className="table w-100">
                                
                            { order.map( ( item,index) => 
                                <>
                                    <div className="w-100">
                                    <tr >
                                    
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th></th>
                                        <th>Subtotal</th>
                                        <th></th>
                                    </tr>
                                    {item.order_details_id.map((i)=>

                                        <>
                                            <tr>
                                                <td> <img className = "imgcs" src ={imgUrl+"/"+i.book_id.imgurl} /> </td>
                                                <td>{i.book_id.title}</td>
                                                <td>{i.book_id.price}</td>
                                                <td>{i.quantity}</td>
                                                
                                                <td></td>
                                                <td>  
                                                {i.quantity * i.book_id.price}
                                                </td>
                                            </tr>
                                        </>
                                        ) }
                                
                                    <tr >
                                        <td className="row ml-2 w-100">

                                        <b>address:  </b>
                                        {item.addr_id.line1},{item.addr_id.line2},{item.addr_id.state} -{item.addr_id.postal_code},{item.addr_id.city} , {item.addr_id.country}
                                        </td>
                                    </tr>
                                    <tr>
                                    </tr>   
                                    <tr >
                                        <td className="row ml-2 w-100">

                                        <b>Delivery Mobile:  </b>
                                        {item.delivery_number}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}></td>
                                        <td>Total:</td>
                                        <td>{item.total / 100}</td>
                                    </tr>
                                    </div>
                                </>
                                )
                            }
                            </table>
                        
            
                    </>
}
        </>
    )
}

export default SellerOrder;