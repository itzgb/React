import { imgUrl } from "../../api/api";

const Carder = ({data}) => {
    const insertDivStart = (index)=>{
        if(index%3===0){
                return (
                    <>
                <div class="carousel-inner"> </div>
                    </>
                )
            
        }
    }
    const insertDivClose = (index)=>{
        if(index%3===0){
                return (
                    <>
                <div class="carousel-inner"> </div>
                    </>
                )
            
        }
    }
    return(
        <section class="pt-5 pb-5">
    <div class="container ">
        <div class="row">
            <div class="col-6">
                <h3 class="mb-3"> </h3>
            </div>
            <div class="col-6 text-right">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators3" role="button" data-slide="next">
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="col-12 ">
                <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row ">
                            {data.map((item,index) =>    {
                               return( <>
                                
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+item.imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{item.title}</h4>
                                            <p class="card-text">{item.price}</p>

                                        </div>

                                    </div>
                                </div>
                                
                                </>)
                                }
                            )}
                            </div>    
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</section>
    )
}
export default Carder;