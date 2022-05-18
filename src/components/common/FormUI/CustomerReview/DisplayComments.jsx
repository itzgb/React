import { Rating } from "@material-ui/lab";
import { useEffect } from "react";

const DisplayComments = ({data}) =>{
    useEffect(()=>{

    },[data])
    return(
        <div className="container border">
            {data.length < 0 ? 
                <div> No Comments yet</div>
                :
                <div className=" cmtbox overflow-auto">
                    {data.map((item ,index)=>
                        <div key ={index}>
                            <Rating 
                                name="read-only"
                                value={item.rating}
                            />
                            <p>
                            {item.user} : {item.comment}
                            </p>
                        </div> 
                        )}
                </div>
            }
        </div>
    )
}
export default DisplayComments;