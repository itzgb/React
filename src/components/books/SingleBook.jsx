import {useState , useEffect } from 'react';
import axios from '../../axios';
import {useParams , Link} from 'react-router-dom';
import {bookData} from '../../utils/fakeData';
import {getBookByIdUrl ,getAllCartItemsUrl, imgUrl , addCartItemUrl} from '../../api/api';
const SingleBook = () =>{
    const params = useParams();
    
    const FetchSingleBookList =  async() =>{
        
        
        const data = await axios.get( getBookByIdUrl+`/${params.id}`)
            .then(d=>{setData(d.data);console.log(d)}   )
            .catch(err=>console.log(err));
        
        return data;
    }

    const addToCart = async(id) =>{
        await axios.get(addCartItemUrl+"/"+id)
            .then(d=>{
                console.log("addtocart test",d);
            })
            .catch(e=>console.log("err",e))
    }

    const [data,setData] = useState({});
    useEffect(()=>{
        FetchSingleBookList()
    },[])
    return(
        <div>
            <div className='container '>
                <div className='row'>
                    <div className="col-7">
                    <img className="card-img " src={imgUrl+"/"+data.imgurl} alt="Card image" />
                    </div>
                    <div className="col-5">
                        <div>{data.id}</div>
                        <div>{data.title}</div>
                        <div>{data.desc}</div>
                        <div>{data.price}</div>
                        <button className="btn btn-success" onClick={(e)=>{addToCart(data.id)}} >Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBook;