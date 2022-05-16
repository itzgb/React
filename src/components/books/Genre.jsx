import axios from '../../axios'; 
import {useState , useEffect } from 'react'
import {getAllGenre , imgUrl} from "../../api/api"
import {genreArr} from "../../utils/fakeData"
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
const Genre = () =>{
    const fetchGenreList =   async (page) =>{
        console.log(getAllGenre);
         await axios.get("/genre/getGenres"+`?page=${page}&limit=${limit}`)
            .then(d=>{
                console.log(d);
                
                setData(d.data[0])
                setTotalCount(d.data[1])
            })
            .catch(e=>console.log("err",e));

        
    }
    const [data , setData] = useState([]);
    const [totalCount,setTotalCount] = useState(0);
    const limit= 9;
    const handlePageClick = async(select) => {
        console.log(select.selected);
        fetchGenreList(select.selected);
    }
    
    useEffect(()=>{
        fetchGenreList(0)
        console.log(data);
    },[]);
    
    if (data.length > 0){
        return(
            <div key={data.id}>
                <div className='row w-100 justify-content-center'>
                <div className='card-deck ml-5'>
                {data.map( (item , index) => 
                             <div key={index} className="col-4 mt-5  d-flex">
                                <div className ="card cards">
                                    <img className="card-img cardsimg" src= {imgUrl+"/"+item.imgurl} alt="Card image" />
                                    <Link to={"/genre/" + item.id} className="stretched-link"></Link>
                                    <div className="card-img-overlay">
                                        <p className='card-text'>{item.genre}</p>
                                        <div>{item.id}</div>
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
            </div>
        );
    }else{
        return(
            <div>No Genre yet</div>
        )
    }
}

export default Genre;