import { useEffect,useState } from "react"
import axios from '../../axios'
import {Link} from 'react-router-dom'
import {imgUrl} from '../../api/api'
const SellerGenre = () =>{
    const [genreData,setGenreData] = useState([])

    const FetchAllOrderlist = async() =>{
        await axios.get("/genre/getAllGenre")
        .then(e=>{
            console.log(e);
            setGenreData(e.data)
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        FetchAllOrderlist();
    },[])

    return(
        <>
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
        </>
    )
}
export default SellerGenre;