import axios from '../../axios';

const Payment = ({cartItems}) =>{
    const handleSubmit= async() =>{
        axios.post("/payment/pay",{cartItems})
            .then(response=>{
                if (response.data.url) {
                    window.location.href = response.data.url;
                  }
            })
            .catch(err=>console.log(err));

    }
    return (
    
      <button className='btn btn-primary' onClick={() => handleSubmit()}>Check out</button>
    
    )
}

export default Payment;