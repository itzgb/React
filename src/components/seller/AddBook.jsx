import axios from "../../axios"
import { useEffect,useState ,} from "react"
import {Navigate , useLocation , useParams} from 'react-router-dom'
const AddBook = () =>{
    const[data,setData] = useState()
    const[id,setId] = useState()
    const[title,setTitle] = useState()
    const[img,setImg] = useState()
    const[price,setPrice] = useState()
    const[desc,setDesc] = useState()
    const[genreData,setGenreData] = useState([]);
    const[bookData,setBookData] = useState([]);
    const[genre,setGenre] = useState();
    const[endPoint,setEndPoint] = useState();
    const[success,setSuccess] = useState();
    const[errMsg,setErrMsg] = useState();

    let loc = useLocation();
    let params = useParams();
    useEffect(()=>{
        FetchData();
    },[])
    const FetchData = async () => {
        await axios.get("genre/getAllGenre").then(d=>{
            setGenreData(d.data);
            setGenre(d.data[0].genre)
        })
        .catch(err=>console.log(err));
        console.log(loc.pathname);
        const path = loc.pathname;
        const endpoint = path.split("/")[2];
        setEndPoint(endpoint);
        console.log(endpoint)
        if(endpoint === "editBook"){
            const id = params.id;
            FetchEditData(id);
        }
        
    }

    const FetchEditData = async(id) =>{
        await axios.get("seller/getBookById/"+id)
        .then(d=>{
            console.log(d,d.data.books[0]);
            const titles = d.data.books[0].title;
            const prices = d.data.books[0].price;
            //const imgurls = d.data.books[0].imgUrl;
            const descs = d.data.books[0].desc;
            //const {id as ids,title as titles,price as prices,imgurl as imgurls,desc as descs} = d.data.books[0];
            const book_genre = d.data.books[0].genre.genre;
            console.log(book_genre);
            setId(id)
            setTitle(titles)
            setDesc(descs)
            //setImg(imgurls)
            setPrice(prices)
            //setGenre(book_genre.genre)
        })
        .catch(err=>console.log(err))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('image',img);
        formdata.append('genre',genre);
        formdata.append('title',title);
        formdata.append('price',price);
        formdata.append('desc',desc);
        console.log(img,genre,title,price,desc);
        let url;
        if(endPoint !== "addBook"){
            console.log(id);
            formdata.append("id",id);
        }
        const response = await axios.post("/book/add",
        formdata ,
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
                <h1>Add Product</h1>
                <input 
                    className="form-control"
                    type="text" 
                    placeholder='Book title'
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}/>
                <br />
                <select className ="form-control" onChange={(e)=>setGenre(e.target.value)}>
                    { genreData.map((item,index)=>
                        <option value={item.genre} >{item.genre}</option>
                    )  
                    }
                </select>
                <br/>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder='Description'
                    value={desc}
                    onChange={(e)=>{setDesc(e.target.value)}} />
                <br />
                <input 
                    type="number"
                    className="form-control"
                    placeHolder="price"
                    value={price}
                    onChange={(e)=>{setPrice(e.target.value)}} />  
                <br />
                <input
                    type="file" 
                    className="form-control"
                     
                    alt = "images"
                    onChange={(e)=>{setImg(e.target.files[0])}} />
                <br />
                <button type="submit" className="form-control btn btn-success">Add Book</button>
                
            </form>
            
        </div>
        </>
    )
}
export default AddBook;