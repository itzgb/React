import {useState , useEffect } from 'react';
import axios from '../../axios';
import {useParams , Link} from 'react-router-dom';
import {bookData} from '../../utils/fakeData';
import {getBookByIdUrl ,getAllCartItemsUrl, imgUrl , addCartItemUrl} from '../../api/api';
import CustomerReviewWrapper from '../common/FormUI/CustomerReview/CustomerReviewWrapper';
import CustReview from './cust_review/CustReview';
import DisplayComments from '../common/FormUI/CustomerReview/DisplayComments';
import { Rating } from '@material-ui/lab';
const SingleBook = () =>{
    const params = useParams();
    const [quan,setQuan] = useState(1);
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState({});
    const [stat , setStat ] = useState(true);

    
    const FetchSingleBookList =  async() =>{
        const data = await axios.get( getBookByIdUrl+`/${params.id}`)
            .then(d=>{
                setData(d.data);
                console.log(d);
                setLoading(false)
            })
            .catch(err=>console.log(err));    
        return data;
    }

    const addToCart = async(id) =>{
        await axios.post(addCartItemUrl , {id:id ,quantity:quan})
            .then(d=>{
                console.log("addtocart test",d);
            })
            .catch(e=>console.log("err",e))
    }

    const incQuan = () =>{
        setQuan(quan+1)
    }
    const decQuan = () =>{
        if(quan>1)
        setQuan(quan-1)
    }
    useEffect(()=>{
        FetchSingleBookList()
    },[])
    useEffect(()=>{
        FetchSingleBookList()
    },[stat])
    return(
        <>{loading ? 
            <div>Loading</div>
            :
        <div key ={data.id}>
            <div className='container '>
                <div className='row mb-5 mt-3'>
                    <Link to="/genre">genre</Link>/
                    <Link to={"/genre/"+data.genre.id}>{data.genre.genre}</Link>/
                    <Link to={"/book/"+data.id}>{data.title}</Link>
                </div>
                <div className='row'>
                    <div className="col-7">
                    <img className="card-img " src={imgUrl+"/"+data.imgurl} alt="Card image" />
                    </div>
                    <div className="col-5">
                        <div className='display-4'>{data.title}</div>
                        <div className='text-muted'>{data.genre.genre}</div>
                        <Rating 
                                name="read-only"
                                value={4}
                            />
                        <div className='h5'> sold by {data.user.company}</div>
                        <hr />
                        <div>Description : {data.desc}</div>
                        <div className='h5'>Price : &#8377; {data.price * quan}</div>
                            select Quantity:
                        <div className='d-flex w-50'>
                            <button className='btn btn-primary' onClick={incQuan}>
                                <i className='fa-solid fa-plus'></i>
                            </button>
                            <input 
                                type='number'
                                value={quan}
                                onChange={(e)=>{setQuan(e.target.value)}}
                                />
                            <button className='btn btn-primary' onClick={decQuan}>
                            <i className='fa-solid fa-minus'></i>
                            </button>
                        </div>
                        <button className="btn btn-success" onClick={(e)=>{addToCart(data.id)}} >Add to Cart</button>
                        <div className='container'>
                        <CustReview 
                            setStat = {setStat}
                            stat ={stat}
                            >

                            </CustReview>
                        <DisplayComments 
                            data = {data.reviews}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    );
}

export default SingleBook;