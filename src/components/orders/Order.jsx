import axios from '../../axios';
import {useState , useEffect} from 'react'
import { getAllOrderItemsUrl ,imgUrl} from '../../api/api';
import Payment from '../payment/Payment';

const Order = () => { 

    const FetchOrderItems = async () =>{
        await axios.get(getAllOrderItemsUrl)
            .then((d)=>{
                console.log("cart items ",d);
                console.log(d.data.order_id);
                if(d.data.order_id !== undefined){
                    setOrder(d.data.order_id);
                }
                
                console.log("cart",order,order.length);
            })
            .catch((err)=>console.log(err));
            return order;
    }
    
    const computeSubtotal = (a,b) => {
        console.log(a,b);
        subTotal.push(a*b);
        
        return a*b;
    }
    const computeTotal = () =>{
        let tot=0;
        order.map((item)=>{
             tot = computeSubtotal(item.quantity , item.book_id.price) + tot
        })
        return tot;
    }
    
    
    const[order,setOrder]         = useState([]);
    const[subTotal,setSubTotal] = useState([]);
    const[total,setTotal]       = useState(0);
    useEffect(()=>{
         FetchOrderItems();
         console.log("order test ",order);
    },[]);

    return(
        <>
        { order.length === 0 ?
            (<div>No Orders Yet</div>)
            :
                <>
                <div>Order Items</div>
                <div>
                        <table className="table">
                            
                { order.map( ( item,index) => 
                            <>
                            <div className="container">
                            <tr>
                                
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                                <th>Subtotal</th>
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
                            
                            <tr colSpan={6}>
                                <b>address:  </b>
                                {item.addr_id.line1},{item.addr_id.line2},{item.addr_id.state} -{item.addr_id.postal_code},{item.addr_id.city} , {item.addr_id.country}
                            </tr>
                            <tr>
                            </tr>   
                            <tr colSpan={6}>
                                <b>Delivery Mobile:  </b>
                                {item.delivery_number}
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
                    </div> 
            </>
        }
        </>
    )
}

export default Order;