import { useEffect, useState } from "react";
import CardSlider from "./CardSlider";
import Carosel from "./Carosel";
import axios from '../../axios'
import Carder from "./Carder";
const HomePage = () =>{
    const [caroselData , setCaroselData] = useState([]);
    const [recentAddedData , setRecentAddedData] = useState([]);
    const [topSellerData , setTopSellerData] = useState([]);
    const[success,setSuccess] = useState(false)
    const fetchData = async() =>{
        await axios.get( "/book/getnewbooks" )
        .then(d=>{
            console.log(d);
            setRecentAddedData(d.data)
            setSuccess(true);
        })
        .catch(e=>console.log("err",e));
        
    }
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
        <Carosel />
        <div className="ml-5 mt-5 display-4">Recently Added</div>
        {success &&
        <CardSlider key ={1} data={recentAddedData}/>
        }
        <div className="ml-5 display-4">Top Sellers</div>
        {success &&
        <CardSlider key={2} data={recentAddedData}/>
        }
        </>
    )
}
export default HomePage;