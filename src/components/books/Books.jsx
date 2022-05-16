import axios from '../../axios';
import {useState , useEffect } from 'react';
import { getAllBookUrl ,addCartItemUrl,imgUrl} from "../../api/api";
import {bookArr} from "../../utils/fakeData";
import {Link ,useParams} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
const Book = () =>{
    
    const route = useParams().id;
    const [data,setData] = useState([]);
    const [totalCount,setTotalCount]= useState(0)

    
    const limit = 9;
    const fetchBookList = async (page) =>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        
        const data = await axios.get( getAllBookUrl + `/${route}`+`?page=${page}&limit=${limit}` ).then(d=>{
            console.log(d);
            
            setData(d.data[0])
            setTotalCount(d.data[1])
            
        })
        .catch(e=>console.log("err",e));
        
        
        return data;
    }
    const handlePageClick = async(select) => {
        console.log(select.selected);
        fetchBookList(select.selected);
    }
    const addToCart = async(id) =>{
        await axios.post(addCartItemUrl , {id:id , quantity:1})
            .then(d=>{
                console.log("addtocart test",d);
            })
            .catch(e=>console.log("err",e))
    }
    
    
    useEffect(()=>{
        fetchBookList(0);
        console.log(data);  
    },[]);
    return(
        <>
        { data.length > 0 ?
        <>
        
        <div className='row w-100 justify-content-center'>
            <div>{data[0].genre.genre}</div>
            <div className='card-deck ml-5 '>
            {data.map( (item , index) => 
                        <div className='col-4 mt-5  d-flex'>
                            <div className ="card shadow ">
                                <img className="card-img cardsimg" src={imgUrl+"/" +item.imgurl} alt="Card image" />
                                <Link to={"/book"  +"/" +item.id} className="stretched-link"></Link>
                                <div className="card-body">
                                    <p className='card-title'>Book title : {item.title}</p>
                                    <p className='card-text'>Price : {item.price}</p>
                                    <button className="btn btn-success book-card-button"  onClick={(e)=>{addToCart(item.id)}} >Add to Cart</button>
                                </div>  
                            </div>
                                                        
                        </div>                    
            ) } 
            </div>
        </div>
        <ReactPaginate 
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(totalCount/limit)}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination ml-5 justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        />
        </>
        :
        <div>No Products Yet</div>
        }
        </>
    );
}

export default Book;