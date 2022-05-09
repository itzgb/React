import { useEffect,useState } from "react"
import {Navigate} from 'react-router-dom'
import axios from '../../axios'
const AddGenre = () =>{
    const[data,setData] = useState()
    const[genre,setGenre] = useState()
    const[image,setImage] = useState()
    
    const[success,setSuccess] = useState();
    const[errMsg,setErrMsg] = useState();
    useEffect(()=>{},[])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append("genre",genre);
        data.append("image",image);
        console.log(image);
        console.log(data.image)
        const response = await axios.post( "/genre/add",
            data,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        );
        
        console.log(JSON.stringify(response.data));
    }

    return(
        <>
        {success && (
            <Navigate to="/seller/manage" replace={true} />
        )
        }
        <div className='formContainer'>
            <p  className={errMsg ? "errmsg" : "nodisplay"}>{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <h1>Add Genre</h1>
                <input 
                    className="form-control"
                    type="text" 
                    placeholder='Book Genre'
                    value={genre}
                    onChange={(e)=>{setGenre(e.target.value)}}/>
                
                <br />
                <input 
                    type="file"
                    name="image"
                    className="form-control"
                    onChange={(e)=>{setImage(e.target.files[0])}} />
                <br />
                
                <button type="submit" className="form-control btn btn-success">Add Genre</button>
                
            </form>
            
        </div>
        </>
    )
}
export default AddGenre;