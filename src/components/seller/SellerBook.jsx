import { useEffect , useState } from "react";
import {Link} from 'react-router-dom';
import axios from '../../axios';
import {imgUrl} from '../../api/api'
const SellerBook = () =>{
    const [bookData,setBookData] = useState([]);
    
    const FetchAllBooklist = async() =>{
        await axios.get("seller/getBooks")
        .then(d=>{
            console.log(d);
            setBookData(d.data);
        })
        .catch(err=>console.log(err))

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

        </>
    )
}

export default SellerBook;