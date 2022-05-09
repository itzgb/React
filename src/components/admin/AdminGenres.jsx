import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from '../../axios'
import {imgUrl} from '../../api/api'
const AdminGenres = () => {
    const [genreData,setGenreData] = useState([]);

    const FetchAllGenreList = async() =>{
        await axios.get("/genre/getAllGenre")
        .then(e=>{
            console.log(e);
            setGenreData(e.data)
        })
        .catch(err=>console.log(err))
    }
    const handleDeleteGenre= async (id) =>{
        await axios.get("/genre/delete/"+id)
        .then(d=>{
            console.log(d);
            FetchAllGenreList();
        })
        .catch(err=>console.log(err));
    }


    useEffect(()=>{
        FetchAllGenreList();
    },[])

    return(
        <>
        <div className='container'>
            
            <Link to="/admin/addGenre" className="btn btn-success">Add Genre</Link>
            {genreData.length > 0 ?
                <div > 
                    <table className="table table-striped">
                        <caption>List of genres</caption>
                        <thead>
                            <tr>    
                                <th>Image</th>
                                <th>Genre</th>
                                <th></th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {(genreData.map((item,index)=>
                            <tr>
                                <td><img src={imgUrl +"/"+item.imgurl} className="imgcs" alt="imgs"/></td>
                                <td>{item.genre}</td>
                                <td></td>
                                <td>
                                <Link to={"/seller/editBook/" + item.id} >
                                    <span className="btn btn-info">
                                    <i className="fa-solid fa-pen"></i>
                                    
                                    </span>
                                    
                                </Link>
                                <span className="btn btn-danger" onClick={(e)=>{handleDeleteGenre(item.id)}}>
                                    <i className="fa-solid fa-trash"></i>
                                    
                                </span>
                            
                                </td>
                            </tr>
                        
                        ))}
                        </tbody>        
                    </table>
                </div> 
                
                :
                (
                    <div>No Genre Yet</div>
                )
            }
            </div>
        </>
    )
}

export default AdminGenres;