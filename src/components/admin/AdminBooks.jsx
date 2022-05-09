import axios from '../../axios';
import { useEffect ,useState } from 'react';
import {imgUrl} from '../../api/api'
import {Link} from 'react-router-dom'
const AdminBooks = ()=>{
    const [bookData,setBookData] = useState([]);

    const FetchAllBookList = async () =>{
        await axios.get("admin/getBooks")
        .then(d=>{
            console.log(d);
            setBookData(d.data);
        })
        .catch(err=>console.log(err))
    }
    const handleDeleteBook = async(id) => {
        console.log("deleting book",id);
        await axios.get("/seller/deleteBookById/"+id)
        .then(d=>{
            console.log("del ",d);
            FetchAllBookList();
        })
        .catch(err=>console.log(err));
    }


    useEffect(()=>{
        FetchAllBookList()
    },[])

    return(
        <>
        <div className='container'>
            <Link to="/seller/addBook" className="btn btn-success">Add Book</Link>
            {bookData.length > 0 ?
                <div> 
                    
                    <table className="table">
                    <caption>List of books</caption>
                    <thead>
                        <tr>    
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Genre</th>
                            <th>Seller</th>
                            <th></th>
                            <th>Options</th>
                        </tr>
                    </thead>
                {(bookData.map((item,index)=>
                            <tr>
                                <td><img src={imgUrl +"/"+item.imgurl} className="imgcs" alt="imgs"/></td>
                                <td>{item.title}</td>
                                <td>{item.desc}</td>
                                <td>{item.price}</td>
                                <td>{item.genre.genre}</td>
                                <td>Sold by {item.user.username}</td>
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
            </div>
        </>
    )
}
export default AdminBooks;