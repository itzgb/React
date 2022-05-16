import { useEffect,useState } from "react"
import axios from '../../axios'
import {Link} from 'react-router-dom'
import {imgUrl} from '../../api/api'
const SellersManage = () =>{
    const [genreData,setGenreData] = useState([])
    const [bookData,setBookData] = useState([]);
    const [order,setOrder] = useState([])
    const FetchAllBooklist = async() =>{
        await axios.get("/genre/getAllGenre")
        .then(e=>{
            console.log(e);
            setGenreData(e.data)
        })
        .catch(err=>console.log(err))

        await axios.get("seller/getBooks")
        .then(d=>{
            console.log(d);
            setBookData(d.data);
        })
        .catch(err=>console.log(err))

        await axios.get("seller/getOrders")
        .then(d=>{
            console.log(d);
            setOrder(d.data);
        })
        .catch(err=>console.log(err))
    }
    const handleDeleteGenre = async(id) => {
       
        await axios.get("/genre/delete/"+id)
        .then(d=>{
            console.log(d);
            FetchAllBooklist();
        })
        .catch(err=>console.log(err));
    }
    const handleDeleteBook = async(id) => {
        console.log("deleting book",id);
        await axios.get("/book/delete/"+id)
        .then(d=>{
            console.log("del ",d);
            FetchAllBooklist();
        })
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        FetchAllBooklist();
    },[])

    return(
        <>
        <Link to="/seller/addBook" className="btn btn-success mt-5">Add Book</Link>
        <Link to="/seller/addGenre" className="btn btn-success mt-5 ml-2">Add Genre</Link>
        {genreData.length > 0 ?
            <div> 
                <table className="table">
                    <tr>    
                        <th>Image</th>
                        <th>Genre</th>
                        <th></th>
                        <th></th>
                    </tr>
                    
            {(genreData.map((item,index)=>
                
                    
                        
                        <tr>
                            <td><img src={imgUrl +"/"+item.imgurl} className="imgcs" alt="imgs"/></td>
                            <td>{item.genre}</td>
                            <td></td>
                            <td>

                            </td>
                        </tr>
                    
            ))}

                        
                        </table>
                    </div> 
            
            :
            (
                <div>No Genre Yet</div>
            )
        }

        {bookData.length > 0 ?
            <div> 
                <h2>Books</h2>
                <table className="table">
                    <tr>    
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Genre</th>
                        <th></th>
                        <th>Options</th>
                    </tr>
                    
            {(bookData.map((item,index)=>
                        <tr>
                            <td><img src={imgUrl +"/"+item.imgurl} className="imgcs" alt="imgs"/></td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.price}</td>
                            <td>{item.genre.genre}</td>
                            <td></td>
                            <td>
                                <Link to={"/seller/editBook/" + item.id} >
                                    <span className="btn btn-info">Edit</span>
                                </Link>
                                <span className="btn btn-danger" onClick={(e)=>{handleDeleteBook(item.id)}}>Delete</span>
                            </td>
                        </tr>
                    
            ))}
                </table>
            </div>
            :
            (
                <div>No Books Yet</div>
            )
        }


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
                                        <td colSpan={7}>

                                        <b>address:  </b>
                                        {item.addr_id.line1},{item.addr_id.line2},{item.addr_id.state} -{item.addr_id.postal_code},{item.addr_id.city} , {item.addr_id.country}
                                        </td>
                                    </tr>
                                    <tr>
                                    </tr>   
                                    <tr >
                                        <td colSpan={7}>

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

export default SellersManage;