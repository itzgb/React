import axios from '../../axios';
import {useState , useEffect} from 'react'
import { getAllCartItemsUrl ,imgUrl} from '../../api/api';
import Payment from '../payment/Payment';

const Cart = () => { 

    const FetchCartItems = async () =>{
        await axios.get(getAllCartItemsUrl)
            .then((d)=>{
                console.log("cart items ",d);
                console.log(d.data.cart_books);
                if(d.data.cart_books !== undefined){
                    setCart(d.data.cart_books);
                }
                
                console.log("cart",cart,cart.length);
            })
            .catch((err)=>console.log(err));
            return cart;
    }
    const incQuan = async(e,id) =>{
        console.log("event",e ,id);
        e.preventDefault();
        await axios.get("cart/updateinc/"+id).then(e=>{console.log(e);FetchCartItems()}).catch(err=>console.log(err))
    };
    const decQuan = async(e,id) =>{
        console.log("dec event",e ,id);
        e.preventDefault()
        await axios.get("cart/updatedec/"+id).then(e=>{console.log(e);FetchCartItems()}).catch(err=>console.log(err))
    };
    const computeSubtotal = (a,b) => {
        console.log(a,b);
        subTotal.push(a*b);
        
        return a*b;
    }
    const computeTotal = () =>{
        let tot=0;
        cart.map((item)=>{
             tot = computeSubtotal(item.quantity , item.book_id.price) + tot
        })
        return tot;
    }
    const delItem= async(e,id) => {
        console.log("dec event",e ,id);
        e.preventDefault()
        await axios.get("cart/delete/"+id).then(e=>{console.log(e);FetchCartItems()}).catch(err=>console.log(err))
    } 
    
    const[cart,setCart]         = useState([]);
    const[subTotal,setSubTotal] = useState([]);
    const[total,setTotal]       = useState(0);
    useEffect(()=>{
         FetchCartItems();
         console.log("cart test ",cart);
    },[]);

    return(
        <>
        { cart.length === 0 ?
            (<div>No Cart Items Yet</div>)
            :
                <>
                <div>Cart Items</div>
                <div>
                        <table className="table">
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                                <th>Subtotal</th>
                            </tr>
                    
                { cart.map( ( item,index) => 
            
                            <tr>
                                <td> <img className = "imgcs" src ={imgUrl+"/"+item.book_id.imgurl} /> </td>
                                <td>{item.book_id.title}</td>
                                <td>{item.book_id.price}</td>
                                <td>
                                    <button className="btn btn-primary btncls" name={item.id} onClick={(e)=>incQuan(e,item.id)}> <i class="fa-solid fa-plus"></i></button>
                                    {item.quantity}
                                    <button  className="btn btn-primary btncls " onClick={(e)=>decQuan(e,item.id)}> <i class="fa-solid fa-minus"></i></button>
                                    <button  className="btn btn-danger btncls " onClick={(e)=>delItem(e,item.id)}> <i class="fa-solid fa-trash"></i></button>
                                </td>
                                <td></td>
                                <td>{computeSubtotal(item.quantity , item.book_id.price) }</td>
                            </tr>
                            
                            )
                        }
                        <tr>
                            <td colSpan={4}></td>
                            <td>Total:</td>
                            <td>{computeTotal()}</td>
                        </tr>
                        <tr>
                            <td colSpan={4}></td>
                            <td colSpan={2}>

                            <Payment cartItems={cart} />
                            </td>
                        </tr>
                        </table>
                    </div> 
            </>
        }
        </>
    )
}

export default Cart;