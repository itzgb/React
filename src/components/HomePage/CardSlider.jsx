import { imgUrl } from "../../api/api";

const CardSlider = ({data}) => {
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
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="col-12 ">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row ">
                                
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+data[0].imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{data[0].title}</h4>
                                            <p class="card-text">{data[0].price}</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+data[1].imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{data[1].title}</h4>
                                            <p class="card-text">{data[1].price}</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+data[2].imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{data[2].title}</h4>
                                            <p class="card-text">{data[2].price}</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+data[3].imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{data[3].title}</h4>
                                            <p class="card-text">{data[3].price}</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+data[0].imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{data[0].title}</h4>
                                            <p class="card-text">{data[0].price}</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+data[0].imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{data[0].title}</h4>
                                            <p class="card-text">{data[0].price}</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+data[0].imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{data[0].title}</h4>
                                            <p class="card-text">{data[0].price}</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+data[0].imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{data[0].title}</h4>
                                            <p class="card-text">{data[0].price}</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid cardsimg" alt="100%x280" src={imgUrl+"/"+data[0].imgurl} />
                                        <div class="card-body">
                                            <h4 class="card-title">{data[0].title}</h4>
                                            <p class="card-text">{data[0].price}</p>
                                        </div>
                                    </div>
                                </div>
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
export default CardSlider;